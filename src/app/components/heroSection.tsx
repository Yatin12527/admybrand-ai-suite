"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity } from "lucide-react";
import { IoSparkles } from "react-icons/io5";
import { BiSolidZap } from "react-icons/bi";
import Particles from "./ui/particles";
import BlurText from "./ui/blurtext";
import { ShinyText } from "./ui/shinytext";
import Dashboard from "./animated/dashboard";

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
          className="text-sm md:text-xl text-white/70 mb-12 max-w-3xl mt-4 leading-relaxed justify-center"
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
