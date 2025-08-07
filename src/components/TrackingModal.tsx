
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Package, Truck, MapPin, Calendar, Clock } from "lucide-react";

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ isOpen, onClose }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Mock tracking data - replace with actual API call
  const mockTrackingData = {
    'AGS001234': {
      status: 'In Transit',
      currentLocation: 'Mumbai Distribution Center',
      estimatedDelivery: '2025-01-12',
      progress: 75,
      timeline: [
        { status: 'Order Placed', location: 'Pune', date: '2025-01-08', time: '9:30 AM', completed: true },
        { status: 'Picked Up', location: 'Pune Warehouse', date: '2025-01-08', time: '02:15 PM', completed: true },
        { status: 'In Transit', location: 'Mumbai Hub', date: '2025-01-09', time: '08:45 AM', completed: true },
        { status: 'Out for Delivery', location: 'Destination City', date: '2025-01-12', time: 'Expected', completed: false },
        { status: 'Delivered', location: 'Customer Address', date: '2025-01-12', time: 'Pending', completed: false }
      ]
    },
    'AGS005678': {
      status: 'Delivered',
      currentLocation: 'Delivered to Customer',
      estimatedDelivery: '2025-01-05',
      progress: 100,
      timeline: [
        { status: 'Order Placed', location: 'Delhi', date: '2025-01-02', time: '11:20 AM', completed: true },
        { status: 'Picked Up', location: 'Delhi Warehouse', date: '2025-01-02', time: '04:30 PM', completed: true },
        { status: 'In Transit', location: 'Gurgaon Hub', date: '2025-01-03', time: '09:15 AM', completed: true },
        { status: 'Out for Delivery', location: 'Noida', date: '2025-01-05', time: '07:30 AM', completed: true },
        { status: 'Delivered', location: 'Customer Address', date: '2025-01-05', time: '02:45 PM', completed: true }
      ]
    }
  };

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return;
    
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const data = mockTrackingData[trackingNumber as keyof typeof mockTrackingData];
      setTrackingData(data || null);
      setLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Track Your Shipment</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="flex gap-3 mb-6">
            <Input
              placeholder="Enter tracking number (Try: AGS001234 or AGS005678)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleTrack} disabled={loading} className="bg-blue-600 hover:bg-blue-700">
              {loading ? 'Tracking...' : 'Track'}
            </Button>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Tracking your shipment...</p>
            </div>
          )}

          {trackingData && (
            <div className="space-y-6">
              {/* Status Overview */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Package className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{trackingData.status}</h3>
                      <p className="text-gray-600">Tracking ID: {trackingNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{trackingData.currentLocation}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>ETA: {trackingData.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{trackingData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${trackingData.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Shipment Timeline</h4>
                <div className="space-y-4">
                  {trackingData.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-1 ${
                        event.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className={`font-medium ${
                              event.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>{event.status}</h5>
                            <p className={`text-sm ${
                              event.completed ? 'text-gray-600' : 'text-gray-400'
                            }`}>{event.location}</p>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm ${
                              event.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>{event.date}</p>
                            <p className={`text-xs ${
                              event.completed ? 'text-gray-600' : 'text-gray-400'
                            }`}>{event.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {trackingNumber && !loading && !trackingData && (
            <div className="text-center py-8">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tracking Number Not Found</h3>
              <p className="text-gray-600">Please check your tracking number and try again.</p>
              <p className="text-sm text-gray-500 mt-2">Sample tracking numbers: AGS001234, AGS005678</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;
