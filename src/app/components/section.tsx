"use client";

import type React from "react";
import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

// Assuming these components exist in the specified paths
import AnalyticsDashboard from "./animated/analytic";
import TargetingSystem from "./animated/targetSystem";
import OptimizationEngine from "./animated/optEngine";
import SecurityShield from "./animated/securitysheild";
import CreativeStudio from "./animated/creativeStudio";
import AIBrainNetwork from "./animated/brain";
import Particles from "./ui/particles";

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  children,
  index,
}) => {
  const gradients = [
    "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    "from-blue-500/10 via-cyan-500/10 to-indigo-500/10",
    "from-purple-500/10 via-violet-500/10 to-fuchsia-500/10",
    "from-emerald-500/10 via-green-500/10 to-teal-500/10",
    "from-cyan-500/10 via-sky-500/10 to-blue-500/10",
    "from-red-500/10 via-pink-500/10 to-rose-500/10",
  ];

  const borderGradients = [
    "from-orange-400/50 to-amber-400/50",
    "from-blue-400/50 to-cyan-400/50",
    "from-purple-400/50 to-violet-400/50",
    "from-emerald-400/50 to-green-400/50",
    "from-cyan-400/50 to-sky-400/50",
    "from-red-400/50 to-pink-400/50",
  ];

  const gradientIndex = index % gradients.length;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative h-full p-8 rounded-2xl bg-slate-900/70 border border-slate-700/50 backdrop-blur-xl hover:border-slate-600/60 transition-all duration-500 hover:bg-slate-900/90 overflow-hidden group">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradients[gradientIndex]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            {children}
          </div>
          <h3
            className={`font-gilroy text-2xl font-bold text-white mb-4 transition-colors duration-300`}
          >
            {title}
          </h3>
          <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex-grow">
            {description}
          </p>
        </div>

        {/* Corner accent with matching gradient */}
        <div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${borderGradients[gradientIndex]} to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  );
};

// Main component
export default function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transformations for the background blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const features = useMemo(
    () => [
      {
        content: <AIBrainNetwork />,
        title: "AI Campaign Intelligence",
        description:
          "Advanced machine learning algorithms analyze market trends, competitor strategies, and consumer behavior to generate high-converting campaigns automatically.",
      },
      {
        content: <AnalyticsDashboard />,
        title: "Real-time Analytics Suite",
        description:
          "Comprehensive performance tracking with predictive insights, conversion attribution, and ROI optimization recommendations powered by enterprise-grade analytics.",
      },
      {
        content: <TargetingSystem />,
        title: "Precision Audience Targeting",
        description:
          "Leverage first-party data and AI-driven segmentation to reach your ideal customers with surgical precision across all digital channels.",
      },
      {
        content: <OptimizationEngine />,
        title: "Automated Performance Optimization",
        description:
          "Continuous campaign optimization using reinforcement learning to maximize conversions, reduce costs, and improve ROAS without manual intervention.",
      },
      {
        content: <SecurityShield />,
        title: "Enterprise Security & Compliance",
        description:
          "Bank-level security with SOC2 compliance, data encryption, and comprehensive audit trails to protect your brand and customer data.",
      },
      {
        content: <CreativeStudio />,
        title: "AI Creative Studio",
        description:
          "Generate professional-grade visuals, copy variations, and creative assets that maintain brand consistency while maximizing engagement rates.",
      },
    ],
    []
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-black overflow-hidden py-20"
    >
      {/* Original background with particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full opacity-40"
        />

        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-20 -right-10 w-[30rem] h-[30rem] bg-blue-500/15 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-gilroy text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-100  to-slate-300 bg-clip-text text-transparent mb-8 tracking-tight">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence and advanced analytics
            to transform your marketing operations and drive unprecedented
            growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            >
              {feature.content}
            </FeatureCard>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20 flex justify-center"
        >
          <motion.button className="group  px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white/80 rounded-full font-semibold transition-transform duration-200 flex items-center justify-center hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95">
            See Live Results
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
