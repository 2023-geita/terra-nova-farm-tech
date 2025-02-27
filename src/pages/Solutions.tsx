
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Crop Health Monitoring",
    description: "Comprehensive analysis of crop health using NDVI, thermal imaging, and LIDAR to detect stress, disease, pests, and nutrient deficiencies before they become visible to the naked eye.",
    features: [
      "Multi-spectral analysis for early stress detection",
      "AI-powered disease identification with 92% accuracy",
      "Regular monitoring reports delivered to your dashboard",
      "Historical data tracking to identify trends and patterns"
    ],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Water Management System",
    description: "Precision irrigation recommendations based on real-time soil moisture data, crop water requirements, and evapotranspiration rates to optimize water usage and prevent both drought stress and waterlogging.",
    features: [
      "Soil moisture mapping with zonal irrigation recommendations",
      "Weather forecast integration for adaptive scheduling",
      "Up to 42% reduction in water consumption",
      "Automatic alerts for irrigation system failures"
    ],
    image: "https://images.unsplash.com/photo-1439627071303-3afd3575a225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Yield Prediction Analytics",
    description: "Advanced modeling that combines historical yield data, current crop status, and environmental factors to provide accurate yield forecasts, enabling better planning and financial projections.",
    features: [
      "Pre-harvest yield estimates with 85% accuracy",
      "Field zone productivity mapping",
      "Seasonal performance comparisons",
      "Market intelligence integration for profit forecasting"
    ],
    image: "https://images.unsplash.com/photo-1508857650881-82afec7a47f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "Pest & Disease Management",
    description: "Early detection and treatment recommendations for pests and diseases using thermal signatures, visual symptoms, and pattern recognition algorithms trained on extensive agricultural datasets.",
    features: [
      "Real-time alerts for pest and disease outbreaks",
      "Targeted treatment recommendations to minimize chemical use",
      "Risk forecasting based on weather and crop conditions",
      "Integration with local supplier networks for quick resource access"
    ],
    image: "https://images.unsplash.com/photo-1595355825761-edf979295edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q