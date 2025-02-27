
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Terra Tech's platform has completely transformed how we manage our maize farm. We've reduced water usage by 40% and increased yields by almost a third.",
    author: "Samuel Osei",
    role: "Commercial Farmer, Ghana",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The early pest detection alone saved our entire cassava crop last season. The ROI on this technology is incredible for smallholder farmers like us.",
    author: "Grace Mwangi",
    role: "Smallholder Farmer, Kenya",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "As an agricultural cooperative, we've seen dramatic improvements across all our member farms. The data insights have empowered our farmers to make better decisions.",
    author: "Ibrahim Diallo",
    role: "Cooperative Director, Senegal",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    quote: "The precision agriculture approach has allowed us to farm more sustainably while improving our profitability. It's a win-win for business and the environment.",
    author: "Amara Nkosi",
    role: "Farm Manager, Tanzania",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.addEventListener('animationend', () => {
        setIsAnimating(false);
      });
    }
    
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-terra-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-terra-200"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-terra-200"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Testimonials</h2>
          <h3 className="mt-2 heading-lg text-gray-900">What Farmers Are Saying</h3>
        </div>
        
        <div className="relative">
          <div 
            ref={slideRef}
            className={`flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden transition-all ${
              isAnimating ? 'animate-scale-out' : 'animate-scale-in'
            }`}
          >
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <Quote className="h-12 w-12 text-terra-200 mb-6" />
              <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8">
                {testimonials[currentSlide].quote}
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].author} 
                  className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-terra-300"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonials[currentSlide].author}</p>
                  <p className="text-terra-600">{testimonials[currentSlide].role}</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Flourishing agricultural field" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center lg:justify-start p-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-sm font-medium text-gray-800">Real Results</p>
                  </div>
                  <p className="text-gray-700 text-sm">Our customers are seeing an average of 28% increase in yields after implementing our solutions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide} 
              disabled={isAnimating}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-terra-600 hover:border-terra-300 focus:outline-none transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating || index === currentSlide) return;
                    setIsAnimating(true);
                    setCurrentSlide(index);
                  }}
                  className={`h-2 w-2 rounded-full ${
                    index === currentSlide ? 'bg-terra-600' : 'bg-gray-300 hover:bg-terra-300'
                  } transition-colors duration-300`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              disabled={isAnimating}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-terra-600 hover:border-terra-300 focus:outline-none transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
