
import React from "react";
import { Cpu, Database, BarChart3, Droplet, Activity, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Cpu className="h-6 w-6 text-terra-600" />,
      title: "AI-Powered Analytics",
      description: "Deep learning algorithms trained on extensive datasets to identify pests, diseases, and nutrient deficiencies with high precision."
    },
    {
      icon: <Database className="h-6 w-6 text-terra-600" />,
      title: "Multi-Sensor Integration",
      description: "Combining NDVI, thermal imaging, and LIDAR for comprehensive field analysis and enhanced diagnostic accuracy."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-terra-600" />,
      title: "Real-Time Insights",
      description: "Immediate processing of field data to deliver actionable recommendations for timely interventions."
    },
    {
      icon: <Droplet className="h-6 w-6 text-terra-600" />,
      title: "Water Management",
      description: "Precision irrigation schedules based on soil moisture data and evapotranspiration rates to optimize water usage."
    },
    {
      icon: <Activity className="h-6 w-6 text-terra-600" />,
      title: "Yield Prediction",
      description: "Advanced modeling to forecast crop yields, enabling better planning and financial projections for farmers."
    },
    {
      icon: <Globe className="h-6 w-6 text-terra-600" />,
      title: "Climate Resilience",
      description: "Data-driven recommendations for crop varieties and practices that enhance resilience to changing climate conditions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Services</h2>
          <h3 className="mt-2 heading-lg text-gray-900">Comprehensive Agricultural Solutions</h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our integrated platform addresses critical challenges in African agriculture through innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-terra-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-terra-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-terra-50 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-terra-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
