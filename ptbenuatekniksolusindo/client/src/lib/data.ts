import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock Data
import heroImage from "@assets/generated_images/modern_commercial_building_hvac_system_on_roof.png";
import ductingImage from "@assets/generated_images/industrial_hvac_ducting_installation.png";
import vrvImage from "@assets/generated_images/vrv_vrf_outdoor_ac_units.png";
import chillerImage from "@assets/generated_images/industrial_chiller_system.png";

export const projects = [
  {
    id: 1,
    title: "Grand Tower HVAC System",
    category: "Chiller",
    image: chillerImage,
    location: "Jakarta CBD",
    year: "2024",
    description: "Complete installation of water-cooled chiller system for a 45-story office building."
  },
  {
    id: 2,
    title: "Industrial Factory Ventilation",
    category: "Ducting",
    image: ductingImage,
    location: "Cikarang",
    year: "2023",
    description: "Large-scale industrial ducting and exhaust system for a manufacturing plant."
  },
  {
    id: 3,
    title: "Luxury Mall VRV System",
    category: "VRV/VRF",
    image: vrvImage,
    location: "Surabaya",
    year: "2023",
    description: "High-efficiency VRV system installation for a premium shopping center."
  },
  {
    id: 4,
    title: "Hospital Air Filtration",
    category: "Maintenance",
    image: heroImage,
    location: "Bandung",
    year: "2024",
    description: "HEPA filtration upgrade and maintenance for critical hospital wings."
  },
  {
    id: 5,
    title: "Data Center Cooling",
    category: "Chiller",
    image: chillerImage,
    location: "Jakarta",
    year: "2024",
    description: "Precision cooling system implementation for a Tier-4 data center."
  },
  {
    id: 6,
    title: "Hotel Resort HVAC",
    category: "VRV/VRF",
    image: vrvImage,
    location: "Bali",
    year: "2022",
    description: "Integrated climate control system for a luxury beachside resort."
  }
];

export const services = [
  {
    title: "Installation",
    description: "Expert installation of Chiller, VRV/VRF, and Split systems for commercial and industrial needs.",
    icon: "Wrench"
  },
  {
    title: "Ducting Works",
    description: "Custom fabrication and installation of high-quality ductwork for optimal airflow efficiency.",
    icon: "Wind"
  },
  {
    title: "Maintenance",
    description: "Comprehensive maintenance contracts to ensure your systems run at peak efficiency year-round.",
    icon: "ShieldCheck"
  },
  {
    title: "System Design",
    description: "Professional HVAC engineering and design services tailored to your building's specifications.",
    icon: "Ruler"
  }
];

export const testimonials = [
  {
    name: "Budi Santoso",
    role: "Facility Manager, Grand Tower",
    content: "PT Benua Teknik Solusindo delivered exceptional quality on our chiller upgrade. Professional and on time."
  },
  {
    name: "Sarah Wijaya",
    role: "Director, Metro Malls",
    content: "The VRV system installation was seamless. Their team is highly skilled and responsive."
  }
];
