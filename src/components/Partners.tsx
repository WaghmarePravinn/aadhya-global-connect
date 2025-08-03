import { Truck, Globe, Package } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Aramex",
      description: "Global Express & Logistics Services",
      icon: Globe,
      speciality: "International Express"
    },
    {
      name: "FedEx",
      description: "Worldwide Express Delivery",
      icon: Package,
      speciality: "Global Shipping"
    },
    {
      name: "Delhivery",
      description: "India's Leading Logistics Company",
      icon: Truck,
      speciality: "E-commerce Logistics"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Trusted Partners</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to provide you with the best logistics solutions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <partner.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{partner.name}</h3>
                <p className="text-slate-600 mb-4">{partner.description}</p>
                <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                  {partner.speciality}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Global Network Coverage</h3>
            <p className="text-blue-100 mb-6">
              Through our strategic partnerships, we deliver to over 220 countries and territories worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">220+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50,000+</div>
                <div className="text-blue-100">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.5%</div>
                <div className="text-blue-100">Delivery Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;