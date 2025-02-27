
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import { Button } from "@/components/ui/button";

const ImpactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impact | Terra Tech";
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
                Our Impact on African Agriculture
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Terra Tech is creating measurable environmental, economic, and social benefits for farmers and communities across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Reuse the Impact component */}
        <Impact />

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Success Stories</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Case Studies</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Real-world examples of how Terra Tech's technology is transforming agricultural practices across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Case Study 1 */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1593414220166-085caeae0382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Maize farm in Ghana" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4">
                      <div className="inline-block px-2 py-1 bg-terra-600 text-white text-xs font-medium rounded-full mb-2">Ghana</div>
                      <h4 className="text-white font-semibold text-lg">Commercial Maize Production</h4>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">Water Usage</span>
                      <span className="text-sm font-medium text-terra-600">-42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">Yield Increase</span>
                      <span className="text-sm font-medium text-terra-600">+35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A 500-hectare commercial maize farm in Ghana implemented Terra Tech's comprehensive monitoring solution, resulting in significant water savings and yield improvements through optimized irrigation and early pest detection.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="Samuel Osei" 
                        className="h-10 w-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Samuel Osei</p>
                        <p className="text-xs text-gray-500">Farm Manager</p>
                      </div>
                    </div>
                    <Button variant="link" className="text-terra-600">
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1591208333284-a25f58ad0d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Coffee plantation in Kenya" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4">
                      <div className="inline-block px-2 py-1 bg-terra-600 text-white text-xs font-medium rounded-full mb-2">Kenya</div>
                      <h4 className="text-white font-semibold text-lg">Coffee Cooperative</h4>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">Disease Reduction</span>
                      <span className="text-sm font-medium text-terra-600">-68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">Quality Improvement</span>
                      <span className="text-sm font-medium text-terra-600">+25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A cooperative of 800 smallholder coffee farmers in Kenya utilized Terra Tech's disease detection system to dramatically reduce coffee rust outbreaks and improve bean quality and market value.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="Grace Mwangi" 
                        className="h-10 w-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Grace Mwangi</p>
                        <p className="text-xs text-gray-500">Cooperative Leader</p>
                      </div>
                    </div>
                    <Button variant="link" className="text-terra-600">
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-terra-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Environmental Benefits</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Sustainable Agriculture</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our technology is helping farmers reduce their environmental footprint while increasing productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Reduced Chemical Use</h4>
                <p className="text-gray-600">
                  Targeted application of fertilizers and pesticides based on precise detection of deficiencies and threats minimizes chemical runoff into water systems.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Chemical Reduction</span>
                    <span className="text-sm font-medium text-terra-600">35%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Water Conservation</h4>
                <p className="text-gray-600">
                  Precision irrigation recommendations prevent overwatering, reducing water usage and protecting this precious resource in drought-prone regions.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Water Savings</span>
                    <span className="text-sm font-medium text-terra-600">42%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="h-14 w-14 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Carbon Sequestration</h4>
                <p className="text-gray-600">
                  Healthier crops with optimized resource use sequester more carbon, contributing to climate change mitigation and soil health improvement.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Increased Sequestration</span>
                    <span className="text-sm font-medium text-terra-600">22%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: "22%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Social Impact</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Empowering Communities</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Beyond environmental and economic benefits, our work is strengthening communities and creating new opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-1 bg-gray-50 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Farmers receiving training" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Skills Development</h4>
                  <p className="text-gray-600">
                    Our technology adoption programs have trained over 15,000 farmers in digital literacy and modern agricultural practices, creating pathways for continued education.
                  </p>
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-1 bg-gray-50 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd59a93f9724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Women farmers using technology" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Gender Equality</h4>
                  <p className="text-gray-600">
                    We've specifically designed our programs to engage and empower women farmers, with 48% of our user base now being women-led farms and cooperatives.
                  </p>
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-1 bg-gray-50 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584835898441-53c8be362cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Local employment" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Local Employment</h4>
                  <p className="text-gray-600">
                    Our operations have created over 200 direct jobs and 1,500 indirect jobs across Africa, with 90% of our team members being local professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-terra-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-lg text-white mb-6">Join Us in Creating Impact</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Whether you're a farmer, investor, or potential partner, there are many ways to participate in our mission to transform African agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white hover:bg-gray-100 text-terra-700 font-medium"
                size="lg"
              >
                Partner With Us
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-medium"
                size="lg"
              >
                Download Impact Report
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImpactPage;
