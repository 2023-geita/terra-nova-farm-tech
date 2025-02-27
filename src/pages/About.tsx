
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Terra Tech";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-terra-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl text-gray-900 mb-6">
                Our Mission to Transform African Agriculture
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Terra Tech is dedicated to revolutionizing farming practices across Africa through innovative technology, empowering farmers to achieve sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Our Story</h2>
                <h3 className="mt-2 heading-lg text-gray-900 mb-6">From Academic Project to Agricultural Revolution</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Terra Tech emerged from an undergraduate project focused on NDVI-based crop monitoring. What began as academic research quickly revealed its potential to address critical challenges in African agriculture.
                  </p>
                  <p>
                    Recognizing the limitations of existing agricultural technologies in African contexts, our founders expanded the initial concept to create a comprehensive platform that integrates thermal imaging, LIDAR, artificial intelligence, and distributed computing.
                  </p>
                  <p>
                    Our journey has been guided by a deep understanding of the unique challenges facing African farmers, from climate variability to resource constraints. Every feature of our platform is designed with these challenges in mind, ensuring that our solutions are not just technologically advanced but contextually relevant.
                  </p>
                  <p>
                    Today, Terra Tech is at the forefront of the precision agriculture movement in Africa, partnering with farmers, agricultural cooperatives, and research institutions to drive innovation and sustainable practices across the continent.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-terra-100 transform -rotate-6 rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Founders in the field" 
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Our Team</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Meet the Innovators</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                A diverse team of experts committed to transforming African agriculture through technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Nana Kwame Osei",
                  role: "Founder & CEO",
                  bio: "Agricultural engineer with 15 years of experience in precision farming and remote sensing technologies.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  name: "Dr. Amina Diallo",
                  role: "Chief Scientific Officer",
                  bio: "PhD in Agricultural Data Science with expertise in AI applications for crop monitoring and disease detection.",
                  image: "https://randomuser.me/api/portraits/women/32.jpg"
                },
                {
                  name: "Michael Chukwu",
                  role: "CTO",
                  bio: "Computer scientist specializing in distributed computing architectures and edge processing for IoT devices.",
                  image: "https://randomuser.me/api/portraits/men/43.jpg"
                },
                {
                  name: "Grace Muthoni",
                  role: "Head of Product",
                  bio: "Product manager with deep expertise in UX design and developing intuitive interfaces for agricultural applications.",
                  image: "https://randomuser.me/api/portraits/women/27.jpg"
                },
                {
                  name: "Ibrahim Sesay",
                  role: "Business Development Director",
                  bio: "Agricultural economist focused on creating sustainable business models for technology adoption in rural communities.",
                  image: "https://randomuser.me/api/portraits/men/56.jpg"
                },
                {
                  name: "Dr. Fatima Nkosi",
                  role: "Research Lead",
                  bio: "Specialist in agricultural sensing technologies with multiple patents in multispectral and thermal imaging systems.",
                  image: "https://randomuser.me/api/portraits/women/65.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-xl font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-terra-600 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Our Values</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Guiding Principles</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                The core values that drive our mission and shape our approach to agricultural innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Constantly pushing the boundaries of what's possible in agricultural technology to solve complex challenges.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terra-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Sustainability",
                  description: "Developing solutions that promote environmentally responsible farming practices and resource conservation.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terra-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Accessibility",
                  description: "Ensuring our technology is accessible to farmers of all scales, from smallholders to large commercial operations.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terra-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Data Privacy",
                  description: "Respecting farmers' ownership of their data and ensuring secure, ethical handling of agricultural information.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terra-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "Local Relevance",
                  description: "Designing solutions with deep understanding of regional agricultural contexts and challenges across Africa.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terra-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Collaborative Impact",
                  description: "Partnering with farmers, researchers, and institutions to create solutions with meaningful, measurable impact.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terra-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-lg bg-terra-50 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-terra-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-lg text-white mb-6">Join Us in Transforming African Agriculture</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Whether you're a farmer seeking to optimize your operations, a researcher interested in collaboration, or an investor looking to support sustainable agricultural innovation, we invite you to connect with us.
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="bg-white hover:bg-gray-100 text-terra-700 font-medium"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
