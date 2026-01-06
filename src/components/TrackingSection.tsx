import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Package, Truck, MapPin, Calendar, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  const handleTrackingInput = (value: string) => {
    setTrackingNumber(value);
    setError('');
    
    if (value.trim()) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const data = mockTrackingData[value as keyof typeof mockTrackingData];
        if (data) {
          setTrackingData(data);
          setError('');
        } else {
          setTrackingData(null);
          setError('Tracking number not found. Try: AGS001234 or AGS005678');
        }
        setLoading(false);
      }, 500);
    } else {
      setTrackingData(null);
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
    switch (status) {
      case 'In Transit':
        return <Truck className="h-4 w-4 text-blue-500" />;
      case 'Out for Delivery':
        return <Package className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <section id="track-shipment" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Track Your Shipment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your tracking number below to get real-time updates on your shipment status.
          </p>
        </div>

        {/* Tracking Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input
              //placeholder="Enter tracking number (Try: AGS001234 or AGS005678)"
              value={trackingNumber}
              onChange={(e) => handleTrackingInput(e.target.value)}
              className="text-lg py-4 pl-12 pr-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300"
            />
            <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {error && (
            <p className="mt-3 text-red-600 text-center font-medium">{error}</p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Tracking your shipment...</p>
          </div>
        )}

        {/* Tracking Results */}
        {trackingData && !loading && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Status Overview */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Package className="h-8 w-8 text-blue-600" />
                  <span>Shipment Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{trackingData.status}</div>
                    <div className="text-gray-600">Current Status</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-900">{trackingData.currentLocation}</span>
                    </div>
                    <div className="text-gray-600">Current Location</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-900">{trackingData.estimatedDelivery}</span>
                    </div>
                    <div className="text-gray-600">Expected Delivery</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{trackingData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${trackingData.progress}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Shipment Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4 relative">
                      {/* Timeline Line */}
                      {index < trackingData.timeline.length - 1 && (
                        <div className="absolute left-2 top-8 w-0.5 h-16 bg-gray-200"></div>
                      )}
                      
                      {/* Status Icon */}
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full mt-1 flex items-center justify-center ${
                        event.completed ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        {getStatusIcon(event.status, event.completed)}
                      </div>
                      
                      {/* Event Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex-1">
                            <h4 className={`text-lg font-semibold ${
                              event.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {event.status}
                            </h4>
                            <p className={`text-sm ${
                              event.completed ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {event.location}
                            </p>
                          </div>
                          <div className="text-right mt-2 sm:mt-0">
                            <p className={`text-sm font-medium ${
                              event.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {event.date}
                            </p>
                            <p className={`text-xs ${
                              event.completed ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {event.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-green-700 mb-4">
                    For any questions about your shipment, contact our customer support team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:+919000000000"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Call: +91-9000000000
                    </a>
                    <a 
                      href="https://wa.me/919000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Package className="w-4 h-4 mr-2" />
                      WhatsApp Support
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Sample Tracking Numbers */}
        
      </div>
    </section>
  );
};

export default TrackingSection;