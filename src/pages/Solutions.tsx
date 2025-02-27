
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Crop Health Monitoring",
    description: "Comprehensive analysis of crop health using NDVI, thermal imaging, and LIDAR to detect stress, disease, pests, and nutrient deficiencies before they become visible to the naked eye.",
    features: [
      "Multi-spectral analysis for early stress detection",
      "AI-powered disease identification with 92% accuracy",
      "Regular monitoring reports delivered to your dashboard",
      "Historical data tracking to identify trends and patterns"
    ],
    image: "/images/illustrations/farm-monitoring.svg",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Water Management System",
    description: "Precision irrigation recommendations based on real-time soil moisture data, crop water requirements, and evapotranspiration rates to optimize water usage and prevent both drought stress and waterlogging.",
    features: [
      "Soil moisture mapping with zonal irrigation recommendations",
      "Weather forecast integration for adaptive scheduling",
      "Up to 42% reduction in water consumption",
      "Automatic alerts for irrigation system failures"
    ],
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Yield Prediction Analytics",
    description: "Advanced modeling that combines historical yield data, current crop status, and environmental factors to provide accurate yield forecasts, enabling better planning and financial projections.",
    features: [
      "Pre-harvest yield estimates with 85% accuracy",
      "Field zone productivity mapping",
      "Seasonal performance comparisons",
      "Market intelligence integration for profit forecasting"
    ],
    image: "/images/illustrations/data-visualization.svg",
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "Pest & Disease Management",
    description: "Early detection and treatment recommendations for pests and diseases using thermal signatures, visual symptoms, and pattern recognition algorithms trained on extensive agricultural datasets.",
    features: [
      "Real-time alerts for pest and disease outbreaks",
      "Targeted treatment recommendations to minimize chemical use",
      "Risk forecasting based on weather and crop conditions",
      "Integration with local supplier networks for quick resource access"
    ],
    image: "/images/illustrations/precision-agriculture.svg",
    color: "bg-red-50",
    iconColor: "text-red-600"
  }
];

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Solutions | Terra Tech";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-terra-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl text-gray-900 mb-6">
                Innovative Agricultural Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive suite of precision agriculture tools transforms how farmers monitor, analyze, and optimize their operations.
              </p>
              <Button
                className="bg-terra-600 hover:bg-terra-700 text-white"
                size="lg"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Our Solutions</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Data-Driven Agricultural Innovations</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Addressing critical farming challenges with cutting-edge technology and actionable insights.
              </p>
            </div>

            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className={`rounded-3xl overflow-hidden shadow-xl ${solution.color} p-3`}>
                      <div className="rounded-2xl overflow-hidden">
                        <img 
                          src={solution.image} 
                          alt={solution.title} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <h3 className="heading-md text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`flex-shrink-0 h-6 w-6 rounded-full ${solution.color} flex items-center justify-center mt-0.5`}>
                            <Check className={`h-4 w-4 ${solution.iconColor}`} />
                          </div>
                          <span className="ml-3 text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className="bg-terra-600 hover:bg-terra-700 text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Solution Comparison</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Find the Perfect Fit for Your Farm</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Compare our agricultural solutions to find the best match for your specific farming needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-terra-50">
                    <tr>
                      <th scope="col" className="px-6 py-5 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Features
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Starter
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Professional
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        Drone Monitoring
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Monthly
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Bi-weekly
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Weekly + On-demand
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        Sensor Types
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        NDVI
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        NDVI + Thermal
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        NDVI + Thermal + LIDAR
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        Data Analysis
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Basic Reports
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Advanced Analytics
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        AI-Powered Predictions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        Mobile Access
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        <Check className="h-5 w-5 mx-auto text-terra-600" />
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        <Check className="h-5 w-5 mx-auto text-terra-600" />
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        <Check className="h-5 w-5 mx-auto text-terra-600" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        Historical Data
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        3 months
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        1 year
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Unlimited
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        Support
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Email
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        Email + Phone
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">
                        24/7 Dedicated Support
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        Pricing (per hectare)
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-terra-600">
                        $10/month
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-terra-600">
                        $18/month
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-terra-600">
                        Custom
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 text-sm text-gray-900 font-medium">
                      </td>
                      <td className="px-6 py-5 text-center">
                        <Button className="bg-white border border-terra-600 text-terra-600 hover:bg-terra-50">
                          Select Plan
                        </Button>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <Button className="bg-terra-600 text-white hover:bg-terra-700">
                          Select Plan
                        </Button>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <Button className="bg-gray-800 text-white hover:bg-gray-900">
                          Contact Sales
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-terra-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-lg text-white mb-6">Ready to Transform Your Farming Practices?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start your journey towards data-driven precision agriculture. Contact us today for a personalized demonstration of our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white hover:bg-gray-100 text-terra-700 font-medium"
                size="lg"
              >
                Schedule a Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-medium"
                size="lg"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
