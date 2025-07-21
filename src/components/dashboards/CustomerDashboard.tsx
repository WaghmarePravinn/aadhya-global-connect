import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TrackingModal from '@/components/TrackingModal'
import NewOrderModal from '@/components/NewOrderModal'
import { Package, Plus, DollarSign, User, Settings, Truck, Clock, CheckCircle } from 'lucide-react'

interface Order {
  id: string
  order_number: string
  shipment_type: string
  status: string
  total_cost: number
  estimated_delivery_date: string
  tracking_number?: string
  created_at: string
}

const CustomerDashboard = () => {
  const { profile, signOut } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [showTracking, setShowTracking] = useState(false)
  const [showNewOrder, setShowNewOrder] = useState(false)
  const [selectedTrackingNumber, setSelectedTrackingNumber] = useState('')

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        console.error('Error fetching orders:', error)
        return
      }

      setOrders(data || [])
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'in_transit':
        return <Truck className="h-4 w-4 text-blue-500" />
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <Package className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-500'
      case 'in_transit':
        return 'bg-blue-500'
      case 'pending':
        return 'bg-yellow-500'
      case 'processing':
        return 'bg-orange-500'
      case 'cancelled':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {profile?.full_name}!</h1>
            <p className="text-muted-foreground mt-2">Manage your shipments and track your orders</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => setShowNewOrder(true)} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Order
            </Button>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{orders.length}</p>
                  <p className="text-muted-foreground text-sm">Total Orders</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Truck className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{orders.filter(o => o.status === 'in_transit').length}</p>
                  <p className="text-muted-foreground text-sm">In Transit</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{orders.filter(o => o.status === 'delivered').length}</p>
                  <p className="text-muted-foreground text-sm">Delivered</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">${profile?.account_balance?.toFixed(2) || '0.00'}</p>
                  <p className="text-muted-foreground text-sm">Account Balance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="tracking">Track Shipment</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Loading orders...</div>
                ) : orders.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                    <p className="text-muted-foreground mb-4">Get started by creating your first shipment order</p>
                    <Button onClick={() => setShowNewOrder(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create First Order
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{order.order_number}</h3>
                            <p className="text-sm text-muted-foreground capitalize">{order.shipment_type} shipment</p>
                          </div>
                          <Badge className={getStatusColor(order.status)}>
                            <div className="flex items-center gap-1">
                              {getStatusIcon(order.status)}
                              <span className="capitalize">{order.status.replace('_', ' ')}</span>
                            </div>
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Total: <span className="font-medium">${order.total_cost}</span>
                            </p>
                            {order.estimated_delivery_date && (
                              <p className="text-sm text-muted-foreground">
                                Est. Delivery: {new Date(order.estimated_delivery_date).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                          {order.tracking_number && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setSelectedTrackingNumber(order.tracking_number!)
                                setShowTracking(true)
                              }}
                            >
                              Track
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Track Your Shipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setShowTracking(true)}>
                  Open Tracking Tool
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <p className="text-muted-foreground">{profile?.full_name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p className="text-muted-foreground">{profile?.phone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Company</label>
                  <p className="text-muted-foreground">{profile?.company_name || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Account Type</label>
                  <p className="text-muted-foreground capitalize">{profile?.role}</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
      
      {showTracking && (
        <TrackingModal 
          isOpen={showTracking} 
          onClose={() => setShowTracking(false)}
        />
      )}
      
      {showNewOrder && (
        <NewOrderModal 
          isOpen={showNewOrder} 
          onClose={() => setShowNewOrder(false)}
          onOrderCreated={fetchOrders}
        />
      )}
    </div>
  )
}

export default CustomerDashboard