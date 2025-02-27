
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = Number(htmlEl.getAttribute('data-speed') || 1);
        
        htmlEl.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Abstract shapes for background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-terra-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float parallax-element" data-speed="0.5"></div>
        <div className="absolute -left-20 top-1/3 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float parallax-element" data-speed="0.8" style={{animationDelay: '2s'}}></div>
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-terra-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float parallax-element" data-speed="0.6" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="stagger-animation">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-terra-50 text-terra-700 mb-6 border border-terra-100">
                <span className="flex h-2 w-2 rounded-full bg-terra-500 mr-2"></span>
                Pioneering Precision Agriculture
              </div>
              
              <h1 className="heading-xl mb-6 text-gray-900">
                <span className="block">Data-Driven Farming</span>
                <span className="block bg-gradient-to-r from-terra-700 to-terra-500 bg-clip-text text-transparent">
                  For a Sustainable Africa
                </span>
              </h1>
              
              <p className="body-lg text-gray-600 mb-8 max-w-lg">
                Revolutionizing African agriculture with AI-powered drone technology, multi-sensor integration, and real-time analytics for increased yields and sustainable farming practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-terra-600 hover:bg-terra-700 text-white font-medium px-8 py-6" size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-terra-200 text-terra-700 hover:bg-terra-50 font-medium px-8 py-6" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center parallax-element" data-speed="0.2">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-terra-500 rounded-3xl blur-xl opacity-10 scale-105 -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="/images/illustrations/agriculture-drone.svg" 
                  alt="Drone scanning crops" 
                  className="w-full h-auto scale-in-animation"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs font-medium text-white/90">Live Monitoring</span>
                  </div>
                  <p className="text-white text-sm font-medium">Multispectral drone scanning active in Western Region</p>
                </div>
              </div>
              
              <div className="absolute -right-16 -bottom-8 w-48 bg-white rounded-xl shadow-lg p-4 scale-in-animation" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-terra-50 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-terra-500"></div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Disease Detection</p>
                    <p className="text-sm font-semibold text-gray-900">92% Accuracy</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                  <div className="bg-terra-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div className="absolute -left-12 top-1/4 w-40 bg-white rounded-xl shadow-lg p-3 scale-in-animation" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-500">Water Usage</span>
                  <span className="text-xs font-bold text-terra-600">-42%</span>
                </div>
                <div className="flex space-x-1 h-16">
                  <div className="w-1/4 bg-gray-100 rounded-sm relative overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-terra-200 rounded-sm" style={{height: '60%'}}></div>
                  </div>
                  <div className="w-1/4 bg-gray-100 rounded-sm relative overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-terra-300 rounded-sm" style={{height: '40%'}}></div>
                  </div>
                  <div className="w-1/4 bg-gray-100 rounded-sm relative overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-terra-400 rounded-sm" style={{height: '30%'}}></div>
                  </div>
                  <div className="w-1/4 bg-gray-100 rounded-sm relative overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-terra-500 rounded-sm" style={{height: '18%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </div>
  );
};

export default Hero;
