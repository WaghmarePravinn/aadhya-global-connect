import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'
import { Loader2, Plus } from 'lucide-react'

interface NewOrderModalProps {
  isOpen: boolean
  onClose: () => void
  onOrderCreated: () => void
}

interface Carrier {
  id: string
  name: string
  code: string
  service_levels: any
  rates: any
}

const NewOrderModal = ({ isOpen, onClose, onOrderCreated }: NewOrderModalProps) => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [carriers, setCarriers] = useState<Carrier[]>([])
  const [selectedCarrier, setSelectedCarrier] = useState<Carrier | null>(null)
  
  const [formData, setFormData] = useState({
    shipment_type: '',
    carrier_id: '',
    service_level: '',
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    },
    special_instructions: '',
    pickup_address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 'USA'
    },
    delivery_address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 'USA'
    }
  })

  useEffect(() => {
    if (isOpen) {
      fetchCarriers()
    }
  }, [isOpen])

  const fetchCarriers = async () => {
    try {
      const { data, error } = await supabase
        .from('carriers')
        .select('*')
        .eq('is_active', true)

      if (error) {
        console.error('Error fetching carriers:', error)
        return
      }

      setCarriers(data || [])
    } catch (error) {
      console.error('Error fetching carriers:', error)
    }
  }

  const handleCarrierChange = (carrierId: string) => {
    const carrier = carriers.find(c => c.id === carrierId)
    setSelectedCarrier(carrier || null)
    setFormData(prev => ({ ...prev, carrier_id: carrierId, service_level: '' }))
  }

  const calculateCost = () => {
    if (!selectedCarrier || !formData.service_level || !formData.weight) return 0
    
    const rates = selectedCarrier.rates as Record<string, number>
    const baseRate = rates[formData.service_level.toLowerCase()] || 0
    const weight = parseFloat(formData.weight) || 0
    return baseRate * Math.max(1, weight)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setLoading(true)

    try {
      const orderNumber = `FWD-${Date.now()}`
      const totalCost = calculateCost()

      const { error } = await supabase
        .from('orders')
        .insert({
          customer_id: user.id,
          order_number: orderNumber,
          shipment_type: formData.shipment_type as 'ground' | 'air' | 'ocean',
          carrier_id: formData.carrier_id || null,
          service_level: formData.service_level,
          weight: parseFloat(formData.weight) || null,
          dimensions: formData.dimensions,
          special_instructions: formData.special_instructions,
          pickup_address: formData.pickup_address,
          delivery_address: formData.delivery_address,
          total_cost: totalCost,
          status: 'pending'
        })

      if (error) {
        throw error
      }

      toast({
        title: "Order Created Successfully",
        description: `Your order ${orderNumber} has been created and is pending processing.`,
      })

      onOrderCreated()
      onClose()
      
      // Reset form
      setFormData({
        shipment_type: '',
        carrier_id: '',
        service_level: '',
        weight: '',
        dimensions: { length: '', width: '', height: '' },
        special_instructions: '',
        pickup_address: { street: '', city: '', state: '', zip: '', country: 'USA' },
        delivery_address: { street: '', city: '', state: '', zip: '', country: 'USA' }
      })
    } catch (error: any) {
      toast({
        title: "Error Creating Order",
        description: error.message,
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Create New Order
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipment Type */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shipment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="shipment_type">Shipment Type</Label>
                  <Select value={formData.shipment_type} onValueChange={(value) => setFormData(prev => ({ ...prev, shipment_type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select shipment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ground">Ground</SelectItem>
                      <SelectItem value="air">Air</SelectItem>
                      <SelectItem value="ocean">Ocean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="Enter weight"
                    value={formData.weight}
                    onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Dimensions (inches)</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    placeholder="Length"
                    value={formData.dimensions.length}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      dimensions: { ...prev.dimensions, length: e.target.value }
                    }))}
                  />
                  <Input
                    placeholder="Width"
                    value={formData.dimensions.width}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      dimensions: { ...prev.dimensions, width: e.target.value }
                    }))}
                  />
                  <Input
                    placeholder="Height"
                    value={formData.dimensions.height}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      dimensions: { ...prev.dimensions, height: e.target.value }
                    }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="special_instructions">Special Instructions</Label>
                <Textarea
                  id="special_instructions"
                  placeholder="Enter any special handling instructions..."
                  value={formData.special_instructions}
                  onChange={(e) => setFormData(prev => ({ ...prev, special_instructions: e.target.value }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Carrier Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Carrier & Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="carrier">Carrier</Label>
                  <Select value={formData.carrier_id} onValueChange={handleCarrierChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select carrier" />
                    </SelectTrigger>
                    <SelectContent>
                      {carriers.map((carrier) => (
                        <SelectItem key={carrier.id} value={carrier.id}>
                          {carrier.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="service_level">Service Level</Label>
                  <Select 
                    value={formData.service_level} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, service_level: value }))}
                    disabled={!selectedCarrier}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service level" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.isArray(selectedCarrier?.service_levels) ? 
                        selectedCarrier.service_levels.map((level: string) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        )) : null}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {selectedCarrier && formData.service_level && formData.weight && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Estimated Cost: <span className="text-lg text-primary">${calculateCost().toFixed(2)}</span></p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pickup Address */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pickup Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="pickup_street">Street Address</Label>
                  <Input
                    id="pickup_street"
                    placeholder="Enter street address"
                    value={formData.pickup_address.street}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      pickup_address: { ...prev.pickup_address, street: e.target.value }
                    }))}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="pickup_city">City</Label>
                    <Input
                      id="pickup_city"
                      placeholder="City"
                      value={formData.pickup_address.city}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        pickup_address: { ...prev.pickup_address, city: e.target.value }
                      }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickup_state">State</Label>
                    <Input
                      id="pickup_state"
                      placeholder="State"
                      value={formData.pickup_address.state}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        pickup_address: { ...prev.pickup_address, state: e.target.value }
                      }))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="pickup_zip">ZIP Code</Label>
                  <Input
                    id="pickup_zip"
                    placeholder="ZIP Code"
                    value={formData.pickup_address.zip}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      pickup_address: { ...prev.pickup_address, zip: e.target.value }
                    }))}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Delivery Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="delivery_street">Street Address</Label>
                  <Input
                    id="delivery_street"
                    placeholder="Enter street address"
                    value={formData.delivery_address.street}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      delivery_address: { ...prev.delivery_address, street: e.target.value }
                    }))}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="delivery_city">City</Label>
                    <Input
                      id="delivery_city"
                      placeholder="City"
                      value={formData.delivery_address.city}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        delivery_address: { ...prev.delivery_address, city: e.target.value }
                      }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="delivery_state">State</Label>
                    <Input
                      id="delivery_state"
                      placeholder="State"
                      value={formData.delivery_address.state}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        delivery_address: { ...prev.delivery_address, state: e.target.value }
                      }))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="delivery_zip">ZIP Code</Label>
                  <Input
                    id="delivery_zip"
                    placeholder="ZIP Code"
                    value={formData.delivery_address.zip}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      delivery_address: { ...prev.delivery_address, zip: e.target.value }
                    }))}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Order
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewOrderModal