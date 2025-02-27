
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Technology | Terra Tech";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-terra-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl text-gray-900 mb-6">
                Cutting-Edge Agricultural Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our advanced technological ecosystem combines multi-sensor hardware, artificial intelligence, and distributed computing to revolutionize farming in Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Our Technology Stack</h2>
                <h3 className="mt-2 heading-lg text-gray-900 mb-6">Integrated Precision Agriculture Platform</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Terra Tech has developed a comprehensive technology stack that seamlessly integrates hardware, software, and analytics to provide farmers with powerful insights and actionable recommendations.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our platform evolved from an academic project focused on NDVI-based crop monitoring to a sophisticated system that combines thermal imaging, LIDAR, artificial intelligence, and distributed computing to address the unique challenges of African agriculture.
                </p>
                <div className="mt-8">
                  <Button
                    className="bg-terra-600 hover:bg-terra-700 text-white"
                  >
                    Explore Our Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-terra-50 rounded-3xl transform -rotate-6 shadow-inner"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1584967918940-a7d51b064268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Advanced agricultural technology"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sensor Technology */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Multi-Sensor Integration</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Advanced Sensing Technology</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our drone-mounted sensor array captures comprehensive data about crop health, soil conditions, and environmental factors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="h-14 w-14 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">NDVI Sensor Array</h4>
                <p className="text-gray-600 mb-4">
                  Multispectral cameras capture near-infrared and visible light to calculate Normalized Difference Vegetation Index (NDVI), providing insights into photosynthetic activity and plant vigor.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Sub-millimeter resolution</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Early stress detection</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Chlorophyll concentration mapping</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="h-14 w-14 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Thermal Imaging</h4>
                <p className="text-gray-600 mb-4">
                  High-resolution thermal cameras detect heat signatures of crops, revealing irrigation issues, pest infestations, and disease outbreaks before they're visible to the naked eye.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">0.05°C temperature sensitivity</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Pest infestation detection</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Water stress visualization</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="h-14 w-14 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">LIDAR Technology</h4>
                <p className="text-gray-600 mb-4">
                  Light Detection and Ranging (LIDAR) sensors create detailed 3D maps of crop structure, enabling precise analysis of crop height, density, and physical abnormalities.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Centimeter-level accuracy</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">3D canopy modeling</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Stand count assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI and Data Processing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Artificial Intelligence</h2>
                <h3 className="mt-2 heading-lg text-gray-900 mb-6">AI-Driven Analytics Engine</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our proprietary AI models are trained on extensive agricultural datasets specific to African crops, soil types, and growing conditions, enabling highly accurate analysis and recommendations.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Deep Learning for Pattern Recognition</h4>
                    <p className="text-gray-600 text-sm">
                      Convolutional neural networks identify subtle patterns in multispectral imagery to detect early signs of crop stress, disease, and nutrient deficiencies.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Predictive Modeling</h4>
                    <p className="text-gray-600 text-sm">
                      Machine learning algorithms combine historical data with real-time measurements to forecast crop development, yield potential, and resource requirements.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                    <p className="text-gray-600 text-sm">
                      Our AI models continuously improve through feedback loops, adapting to new data and refining recommendations based on actual outcomes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-terra-50 rounded-3xl transform rotate-6 shadow-inner"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="AI-powered analytics visualization"
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 w-64">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-medium text-gray-900">Model Performance</h4>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Disease Detection</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Yield Prediction</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Water Stress</span>
                        <span className="font-medium">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Distributed Computing */}
        <section className="py-20 bg-gradient-to-br from-terra-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Processing Infrastructure</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Distributed Computing Architecture</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our innovative approach to processing vast amounts of agricultural data enables real-time insights even in areas with limited connectivity.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Edge Computing</h4>
                    <p className="text-gray-600 mb-4">
                      Drone-mounted processors perform initial data analysis in real-time, enabling immediate feedback and reducing reliance on cloud connectivity.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-terra-50 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Low-latency processing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-terra-50 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Optimized for limited bandwidth</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-terra-50 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Real-time alert generation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Distributed Compute Protocol</h4>
                    <p className="text-gray-600 mb-4">
                      Our implementation of DCP distributes computational tasks across available devices, enabling efficient processing of massive datasets even in resource-constrained environments.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-terra-50 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Peer-to-peer processing network</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-terra-50 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Fault-tolerant architecture</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-terra-50 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-terra-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">End-to-end encryption</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-terra-600 mb-1">5x</div>
                      <div className="text-sm text-gray-600">Faster Processing</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-terra-600 mb-1">60%</div>
                      <div className="text-sm text-gray-600">Lower Bandwidth</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-terra-600 mb-1">99.9%</div>
                      <div className="text-sm text-gray-600">System Reliability</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-terra-600 mb-1">15 min</div>
                      <div className="text-sm text-gray-600">Alert Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-terra-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-lg text-white mb-6">Experience Our Technology in Action</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Schedule a demonstration to see how Terra Tech's advanced agricultural technology can transform your farming operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white hover:bg-gray-100 text-terra-700 font-medium"
                size="lg"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-medium"
                size="lg"
              >
                Download Technical Brief
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Technology;
