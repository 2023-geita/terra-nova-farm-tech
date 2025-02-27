
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Technology = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Our Technology</h2>
            <h3 className="mt-2 heading-lg text-gray-900">Advanced Solutions for Modern Agriculture</h3>
            <p className="mt-4 text-xl text-gray-500 mb-6">
              We integrate cutting-edge technologies to transform how farmers monitor, analyze, and optimize their operations.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-terra-100 text-terra-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">NDVI Analysis</h4>
                  <p className="mt-2 text-gray-600">
                    Spectral imaging to assess crop health, detect stress, and monitor photosynthetic activity at sub-millimeter resolution.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-terra-100 text-terra-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Thermal Imaging</h4>
                  <p className="mt-2 text-gray-600">
                    Heat signature detection to identify pest infestations, diseases, and irrigation inefficiencies before they're visible to the eye.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-terra-100 text-terra-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">LIDAR Sensing</h4>
                  <p className="mt-2 text-gray-600">
                    3D mapping of crop structures for stand count, height analysis, and detection of physical abnormalities in the canopy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                variant="default"
                className="bg-terra-600 hover:bg-terra-700 text-white"
              >
                Explore Our Technology
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-terra-50 rounded-3xl transform rotate-6 shadow-inner"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Drone technology scanning crops"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-terra-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-white font-medium">See our technology in action</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 w-64">
              <div className="flex items-center space-x-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 4l.707-.707a1 1 0 111.414 1.414l-.707.707 1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414-.707.707a1 1 0 01-1.414-1.414l.707-.707-1.414-1.414A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <h4 className="font-medium text-gray-900">AI Model Accuracy</h4>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Pest Detection</span>
                    <span className="font-medium">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "96%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Disease Identification</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Nutrient Deficiency</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "89%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
