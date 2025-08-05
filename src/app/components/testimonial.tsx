import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Particles from "./ui/particles";

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director at TechCorp",
      image:
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "ADmyBRAND AI Suite transformed our marketing workflow. We've seen a 300% increase in campaign performance and saved countless hours on creative development.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder at StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "The AI-generated campaigns are incredibly accurate and on-brand. It's like having a team of expert marketers available 24/7. Absolutely game-changing.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Growth Manager at ScaleUp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "The ROI we've achieved with ADmyBRAND is unmatched. The platform pays for itself within the first month of use. Our conversion rates doubled overnight.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Creative Director at BrandStudio",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "Finally, an AI tool that understands creative nuance. The generated content feels authentic and perfectly captures our brand voice every single time.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "VP Marketing at InnovateCorp",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      content:
        "We've reduced our campaign creation time by 80% while improving quality. The AI insights have revolutionized how we approach audience targeting.",
      rating: 5,
    },
    {
      name: "Alex Martinez",
      role: "Digital Strategy Lead at FutureFlow",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content:
        "The predictive analytics feature is phenomenal. We can now forecast campaign performance with 95% accuracy before even launching. It's pure magic.",
      rating: 5,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black py-16 px-4"
    >
      {/* Background particles */}
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
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-indigo-900/10 z-10" />

      <div className="relative z-20 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-slate-300 mb-6 leading-tight">
            Trusted by <span className="font-serif italic">Marketing</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See what industry leaders are saying about their transformative
            experience with
            <span className="text-blue-400 font-semibold">
              {" "}
              ADmyBRAND AI Suite
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group"
            >
              <div className="relative h-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 hover:border-white/[0.15] transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 hover:bg-white/[0.05]">
                {/* Enhanced glassmorphism overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />

                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500/80 to-indigo-500/80 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ delay: 0.5 + starIndex * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-amber-400 fill-current mr-1" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-100 mb-8 leading-relaxed text-base font-light">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-2xl mr-4 border border-white/20 group-hover:border-white/30 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of satisfied customers transforming their marketing
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 hover:from-blue-500 hover:to-indigo-500 backdrop-blur-xl text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 border border-white/10 hover:border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
