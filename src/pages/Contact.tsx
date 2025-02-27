
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Terra Tech";
  }, []);

  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    if (!formData.consent) {
      newErrors.consent = "You must agree to our privacy policy";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll get back to you soon!",
          duration: 5000
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          consent: false
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-terra-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl text-gray-900 mb-6">
                Get in Touch With Us
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Have questions about our technology or how we can help optimize your agricultural operations? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent"
                        placeholder="+123 456 7890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.subject ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent`}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="careers">Careers</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-terra-600 focus:ring-terra-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="consent" className={`font-medium ${errors.consent ? 'text-red-500' : 'text-gray-700'}`}>
                        I agree to the privacy policy and terms of service
                      </label>
                      {errors.consent && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-terra-600 hover:bg-terra-700 text-white"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="bg-terra-50 rounded-2xl p-8 shadow-sm mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-terra-100 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-terra-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Our Headquarters</h3>
                        <p className="mt-1 text-gray-600">123 Innovation Drive, Nairobi, Kenya</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-terra-100 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-terra-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                        <p className="mt-1 text-gray-600">+254 123 456 789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-terra-100 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-terra-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                        <p className="mt-1 text-gray-600">info@terratech.africa</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-terra-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-terra-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                        <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d36.736063151336126!3d-1.3028617615326255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1682458479818!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Terra Tech Headquarters Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Offices */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">Global Presence</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Regional Offices</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our offices across Africa bring our technology and expertise closer to the farmers we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Accra, Ghana office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Ghana Office</h4>
                  <p className="text-gray-500 mb-4">45 Independence Avenue, Accra</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-terra-600" />
                      +233 30 279 5522
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-terra-600" />
                      ghana@terratech.africa
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566878616592-38f77f5a2cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Lagos, Nigeria office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Nigeria Office</h4>
                  <p className="text-gray-500 mb-4">25 Idowu Taylor Street, Victoria Island, Lagos</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-terra-600" />
                      +234 1 342 8844
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-terra-600" />
                      nigeria@terratech.africa
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533106958148-daebf8d94f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Johannesburg, South Africa office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">South Africa Office</h4>
                  <p className="text-gray-500 mb-4">78 Sandton Drive, Johannesburg</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-terra-600" />
                      +27 11 881 5500
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-terra-600" />
                      southafrica@terratech.africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-terra-600 tracking-wide uppercase">FAQ</h2>
              <h3 className="mt-2 heading-lg text-gray-900">Frequently Asked Questions</h3>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Find answers to common questions about our technology and services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can Terra Tech's technology be implemented on my farm?",
                  answer: "Implementation timelines vary based on farm size and complexity, but typically range from 2-4 weeks. This includes initial drone surveys, system setup, and training your team on the platform. Our onboarding specialists work closely with you throughout the process to ensure a smooth transition."
                },
                {
                  question: "Is Terra Tech's solution suitable for smallholder farmers?",
                  answer: "Absolutely! We've designed specific packages tailored to the needs and budgets of smallholder farmers. We also offer community-based solutions where groups of farmers can share resources and costs. Our mobile app is optimized for low-bandwidth environments and basic smartphones."
                },
                {
                  question: "How does the subscription model work?",
                  answer: "Our subscription plans are based on farm size and the level of services required. We offer monthly and annual payment options, with discounts for longer commitments. All plans include drone surveys, data analysis, and access to our platform. Premium tiers offer additional features like more frequent monitoring and advanced analytics."
                },
                {
                  question: "Do I need technical expertise to use Terra Tech's platform?",
                  answer: "No specialized technical knowledge is required. Our platform is designed to be user-friendly, with intuitive interfaces and clear visualizations. We provide comprehensive training as part of our implementation process, and our support team is always available to assist with any questions."
                },
                {
                  question: "What crops does Terra Tech's technology work with?",
                  answer: "Our technology is effective for a wide range of crops including maize, rice, coffee, tea, cocoa, cassava, and various fruits and vegetables. We continually expand our crop-specific algorithms and have expertise in most major African staple and cash crops."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Don't see your question here?</p>
              <Button
                className="bg-terra-600 hover:bg-terra-700 text-white"
              >
                Contact Our Support Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
