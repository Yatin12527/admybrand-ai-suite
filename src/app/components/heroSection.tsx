"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Activity } from "lucide-react";
import { IoSparkles } from "react-icons/io5";
import { BiSolidZap } from "react-icons/bi";

import {
  FiTrendingUp,
  FiCheckCircle,
  FiCpu,
  FiBarChart2,
  FiTarget,
  FiUsers,
  FiDollarSign,
  FiEye,
  FiHeart,
  FiShare2,
} from "react-icons/fi";
import Particles from "./ui/particles";
import BlurText from "./ui/blurtext";
import { ShinyText } from "./ui/shinytext";
import Dashboard from "./animated/dashboard";

// Enhanced Mini Chart with multiple lines
const MiniChart = () => (
  <div className="w-full h-12 relative">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 120 30"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="chartGradient1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2} />
          <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 20 C 20 22, 30 12, 50 15 S 80 25, 120 10"
        fill="url(#chartGradient1)"
        stroke="#10B981"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M 0 25 C 25 20, 40 18, 60 22 S 90 15, 120 18"
        fill="url(#chartGradient2)"
        stroke="#F59E0B"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

// Mini Bar Chart
const MiniBarChart = () => {
  const bars = [60, 80, 45, 90, 70, 85];
  const colors = [
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
    "#F97316",
  ];

  return (
    <div className="w-full h-12 flex items-end justify-center gap-1">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.6, delay: 1.5 + i * 0.1 }}
          className="w-full rounded-t-sm"
          style={{ backgroundColor: colors[i] }}
        />
      ))}
    </div>
  );
};

// Mini Pie Chart
const MiniPieChart = () => (
  <div className="w-16 h-16 relative">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 42 42">
      <circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="3"
      />
      <motion.circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#10B981"
        strokeWidth="3"
        strokeDasharray="60 40"
        strokeLinecap="round"
        initial={{ strokeDasharray: "0 100" }}
        animate={{ strokeDasharray: "60 40" }}
        transition={{ duration: 1.5, delay: 2 }}
      />
      <motion.circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#F59E0B"
        strokeWidth="3"
        strokeDasharray="25 75"
        strokeDashoffset="-60"
        strokeLinecap="round"
        initial={{ strokeDasharray: "0 100" }}
        animate={{ strokeDasharray: "25 75" }}
        transition={{ duration: 1.5, delay: 2.3 }}
      />
      <motion.circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#EF4444"
        strokeWidth="3"
        strokeDasharray="15 85"
        strokeDashoffset="-85"
        strokeLinecap="round"
        initial={{ strokeDasharray: "0 100" }}
        animate={{ strokeDasharray: "15 85" }}
        transition={{ duration: 1.5, delay: 2.6 }}
      />
    </svg>
  </div>
);

// Enhanced Mini Stat Component
const MiniStat = ({ icon, value, label, delay, trend }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
  >
    <div className="flex justify-center mb-1 text-white/80">{icon}</div>
    <p className="text-sm font-semibold text-white">{value}</p>
    <p className="text-xs text-white/60">{label}</p>
    {trend && (
      <div className="flex items-center justify-center gap-1 mt-1">
        <TrendingUp className="w-3 h-3 text-green-400" />
        <span className="text-xs text-green-400">{trend}</span>
      </div>
    )}
  </motion.div>
);

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-20">
      {/* Background elements */}
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
          style={{ y: y1 }}
          className="absolute -top-10 -left-20 w-96 h-96 bg-purple-500/50 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-20 -right-10 w-[30rem] h-[30rem] bg-blue-500/40 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/80">
            <IoSparkles className="w-4 h-4 text-white" />
            <ShinyText
              text="More than a marketing platform"
              disabled={false}
              speed={3}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-gilroy text-4xl sm:text-8xl text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400"
        >
          Smart <span className=" italic font-semibold">Marketing</span>
          <span className="block text-4xl md:text-6xl ">
            with <span className="font-gloock">AI</span>{" "}
          </span>
        </motion.h1>

        {/* Subheading */}
        <BlurText
          text="Automate campaigns, predict market trends, and unlock actionable insights with the ADmyBRAND AI Suite."
          animateBy="letters"
          delay={5}
          className="text-sm md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed justify-center"
        />

        {/* Unique Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95">
            <BiSolidZap className="mr-2 w-5 h-5 text-yellow-400" />
            Start Free Analysis
          </motion.button>

          <motion.button className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white/80 rounded-full font-semibold transition-transform duration-200 flex items-center justify-center hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95">
            <Activity className="mr-2 w-5 h-5" />
            See Live Results
          </motion.button>
        </motion.div>

        {/* Compact Dashboard Mockup */}
        <Dashboard />
      </div>
    </section>
  );
};

export default HeroSection;
