
import React from "react";
import { 
  Droplet, 
  Leaf, 
  TrendingUp, 
  Users, 
  Shield, 
  BarChart 
} from "lucide-react";

const Impact = () => {
  const metrics = [
    {
      icon: <Droplet className="h-8 w-8 text-terra-600" />,
      value: "42%",
      label: "Water Usage Reduction",
      description: "Optimized irrigation reduces water consumption while maintaining or improving yields."
    },
    {
      icon: <Leaf className="h-8 w-8 text-terra-600" />,
      value: "35%",
      label: "Lower Pesticide Usage",
      description: "Targeted application based on precise pest detection minimizes chemical use."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-terra-600" />,
      value: "28%",
      label: "Yield Increase",
      description: "Early intervention and optimized resource application leads to higher production."
    },
    {
      icon: <Users className="h-8 w-8 text-terra-600" />,
      value: "12,000+",
      label: "Farmers Supported",
      description: "Growing network of farmers benefiting from our technology across Africa."
    },
    {
      icon: <Shield className="h-8 w-8 text-terra-600" />,
      value: "56%",
      label: "Crop Loss Prevention",
      description: "Early detection of diseases and pests significantly reduces crop failures."
    },
    {
      icon: <BarChart className="h-8 w-8 text-terra-600" />,
      value: "3.4x",
      label: "ROI for Farmers",
      description: "Average return on investment for farmers using our platform within first year."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Impact</h2>
          <h3 className="mt-2 heading-lg text-gray-900">Transforming African Agriculture</h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our technology is creating measurable environmental and economic benefits across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-terra-50 rounded-full opacity-50"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-terra-50 mb-4">
                  {metric.icon}
                </div>
                <h4 className="text-3xl font-bold text-gray-900">{metric.value}</h4>
                <p className="text-lg font-medium text-terra-600 mt-1 mb-2">{metric.label}</p>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-terra-50 to-green-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-terra-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="max-w-3xl">
              <h3 className="heading-md text-gray-900 mb-4">Supporting Sustainable Development Goals</h3>
              <p className="text-lg text-gray-700 mb-8">
                Our work directly contributes to multiple UN Sustainable Development Goals, including Zero Hunger, 
                Climate Action, and Responsible Consumption and Production.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <img src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E-SDG-goals_icons-individual-rgb-02.png" alt="Zero Hunger" className="h-16 w-16 mb-2" />
                  <span className="text-sm font-medium text-center">Zero Hunger</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <img src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E-SDG-goals_icons-individual-rgb-13.png" alt="Climate Action" className="h-16 w-16 mb-2" />
                  <span className="text-sm font-medium text-center">Climate Action</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <img src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E-SDG-goals_icons-individual-rgb-12.png" alt="Responsible Consumption" className="h-16 w-16 mb-2" />
                  <span className="text-sm font-medium text-center">Responsible Consumption</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <img src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E-SDG-goals_icons-individual-rgb-06.png" alt="Clean Water" className="h-16 w-16 mb-2" />
                  <span className="text-sm font-medium text-center">Clean Water</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
