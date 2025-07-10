
import { CheckCircle, Award, Users, Globe, Shield, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About AGS Logistics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the logistics industry with innovative solutions, unwavering commitment to excellence, 
            and comprehensive supply chain management services across global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Established in 2015, Aadhya Global Services & Logistics has emerged as a trusted name 
                in the logistics and supply chain industry. With over 8 years of dedicated service, 
                we have successfully handled more than 50 lakh tonnes of cargo and served over 50,000 
                satisfied customers across India and internationally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence, innovative technology integration, and customer-centric 
                approach has positioned us as a leader in comprehensive logistics solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">ISO 9001</div>
                <div className="text-gray-600">Certified Quality</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Insured Cargo</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose AGS Logistics?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Advanced Technology Integration</h5>
                    <p className="text-gray-600">Real-time tracking, automated systems, and digital documentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Comprehensive Network Coverage</h5>
                    <p className="text-gray-600">99.8% Pan-India reach with international connectivity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Expert Team & Support</h5>
                    <p className="text-gray-600">Dedicated professionals available 24/7 for customer assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Competitive Pricing & Transparency</h5>
                    <p className="text-gray-600">No hidden costs, transparent billing, and cost-effective solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Excellence</h4>
            <p className="text-gray-600">
              Delivering exceptional service experiences that exceed customer expectations through 
              personalized solutions and dedicated support.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105">
            <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h4>
            <p className="text-gray-600">
              Connecting businesses across borders with seamless international logistics solutions 
              and strategic partnership networks.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105">
            <Clock className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Reliability</h4>
            <p className="text-gray-600">
              Consistent, dependable service delivery with on-time performance and secure handling 
              of all shipments, building long-term trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
