
import React from "react";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-terra-700 to-terra-800 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-pattern opacity-5" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/10 text-white backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-terra-300 mr-2"></span>
              Get Started Today
            </span>
            <h2 className="heading-xl text-white mb-6">
              Transform Your Farm with Data-Driven Precision
            </h2>
            <p className="text-xl text-terra-50 mb-8 max-w-lg">
              Join the agricultural revolution and harness the power of AI, multi-sensor drones, and real-time analytics to optimize your farm's performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white hover:bg-gray-100 text-terra-700 font-medium"
                size="lg"
              >
                Schedule a Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-medium"
                size="lg"
              >
                Contact Us
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 text-white/80">
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required for initial consultation
              </p>
              <p className="flex items-center mt-2">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Special pricing for smallholder farmers
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-terra-500/20 transform rotate-6 rounded-2xl blur-sm"></div>
            <div className="relative bg-white rounded-xl shadow-2xl p-8">
              <h3 className="heading-sm text-gray-900 mb-6">Request Information</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="farm-size" className="block text-sm font-medium text-gray-700 mb-1">
                    Farm Size (hectares)
                  </label>
                  <input
                    type="number"
                    id="farm-size"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent"
                    placeholder="5"
                  />
                </div>
                
                <div>
                  <label htmlFor="farm-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Crop
                  </label>
                  <select
                    id="farm-type"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="maize">Maize</option>
                    <option value="rice">Rice</option>
                    <option value="cassava">Cassava</option>
                    <option value="coffee">Coffee</option>
                    <option value="cocoa">Cocoa</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <Button 
                    className="w-full bg-terra-600 hover:bg-terra-700 text-white"
                    size="lg"
                  >
                    Submit Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="absolute -left-6 -bottom-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-full bg-terra-50 flex items-center justify-center">
                    <span className="text-terra-600 font-bold text-lg">24h</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Fast Response</p>
                  <p className="text-xs text-gray-500">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
