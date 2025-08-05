"use client";
import React, { useState, useEffect } from "react";
import InteractivePricingCalculator from "./components/calculator";
import ContactForm from "./components/contact";
import { FAQSection } from "./components/faqSection";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/heroSection";
import PricingSection from "./components/pricingSection";
import FeaturesSection from "./components/section";
import { TestimonialsSection } from "./components/testimonial";
import TrustedBySection from "./components/ui/trustedby";
import { HiOutlineCalculator } from "react-icons/hi2";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscFeedback,
  VscQuestion,
} from "react-icons/vsc";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return isMobile;
};

type DockItem = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

type DockProps = {
  items: DockItem[];
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
};

const Dock: React.FC<DockProps> = ({
  items,
  panelHeight = 78,
  baseItemSize = 80,
  magnification = 20,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <div
      className="flex items-center justify-around md:justify-center w-[95vw] md:w-auto p-3 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
      style={{
        height: `${panelHeight}px`,
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {items.map((item, index) => {
        let size = baseItemSize;
        if (!isMobile && hoveredIndex !== null) {
          const distance = Math.abs(index - hoveredIndex);
          const scale = Math.max(0.85, 1 - distance * 0.08);
          size = index === hoveredIndex ? magnification : baseItemSize * scale;
        }

        const isHovered = !isMobile && index === hoveredIndex;

        return (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center mx-1 cursor-pointer transition-all duration-300 ease-out group"
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            onClick={item.onClick}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: isHovered ? "translateY(-6px)" : "translateY(0)",
            }}
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
                {item.label}
              </div>
            </div>

            <div
              className="flex items-center justify-center w-full h-full rounded-xl transition-all duration-300 shadow-lg"
              style={{
                background: isHovered
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div
                style={{ fontSize: `${Math.min(size * 0.4, 22)}px` }}
                className="text-white"
              >
                {item.icon}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const LandingPage = () => {
  const isMobile = useIsMobile();

  const allItems: DockItem[] = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Features",
      onClick: () =>
        document
          .getElementById("features")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Pricing",
      onClick: () =>
        document
          .getElementById("pricing")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <HiOutlineCalculator size={18} />,
      label: "Calculator",
      onClick: () =>
        document
          .getElementById("calculator")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscFeedback size={18} />,
      label: "Reviews",
      onClick: () =>
        document
          .getElementById("testimonials")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscQuestion size={18} />,
      label: "FAQ",
      onClick: () =>
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Contact",
      onClick: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  const navItems = isMobile
    ? allItems.filter(
        (item) => item.label !== "Calculator" && item.label !== "Reviews"
      )
    : allItems;

  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustedBySection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <PricingSection />
        <div id="calculator">
          <InteractivePricingCalculator />
        </div>
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Dock
          items={navItems}
          panelHeight={80}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  );
};

export default LandingPage;
