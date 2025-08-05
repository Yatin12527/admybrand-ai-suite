import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "./ui/spotlight";
import Particles from "./ui/particles";
import { ShieldCheck, XCircle, MessageSquareHeart } from "lucide-react";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "5 AI-generated campaigns/month",
        "Basic analytics dashboard",
        "Email support",
        "1 brand profile",
        "Standard templates",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing marketing teams",
      features: [
        "50 AI-generated campaigns/month",
        "Advanced analytics & insights",
        "Priority support",
        "5 brand profiles",
        "Custom templates",
        "A/B testing",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited AI campaigns",
        "White-label solution",
        "Dedicated account manager",
        "Unlimited brand profiles",
        "Custom integrations",
        "Advanced security",
        "Team collaboration tools",
      ],
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  } as const;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-black py-16 px-4"
    >
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
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="font-gilroy text-4xl md:text-6xl font-bold text-slate-300 mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start free and scale as you grow. All plans include our core AI
            features.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-xl border border-white/30 backdrop-blur-sm">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <SpotlightCard
                className={`h-[580px] w-full rounded-2xl transition-all duration-500 group ${
                  plan.popular
                    ? "bg-gradient-to-br from-black/95 via-gray-900/90 to-black/85 shadow-2xl shadow-white/15 border-2 border-white/25"
                    : "bg-gradient-to-br from-black/90 via-gray-900/75 to-black/60 hover:shadow-xl hover:shadow-white/10 border border-white/15"
                } backdrop-blur-lg overflow-hidden`}
                spotlightColor={
                  plan.popular
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(255, 255, 255, 0.08)"
                }
              >
                <div className="absolute inset-0 p-6 flex flex-col z-10 h-full">
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm max-w-xs mx-auto">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center mb-4">
                      <motion.span
                        className="text-4xl md:text-5xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {plan.price}
                      </motion.span>
                      <span className="text-gray-400 ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>
                  </motion.div>

                  <div className="flex-grow overflow-hidden">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                          variants={featureVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          transition={{
                            delay: index * 0.2 + featureIndex * 0.1 + 0.8,
                          }}
                        >
                          <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 bg-gradient-to-r from-white to-gray-200 shadow-md">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                          </div>
                          <span className="leading-relaxed text-sm">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg mt-auto ${
                      plan.popular
                        ? "bg-gradient-to-r from-white via-gray-100 to-white text-black hover:shadow-xl hover:shadow-white/30 hover:from-gray-50 hover:to-gray-50 border border-white/20"
                        : "bg-gradient-to-r from-gray-800 via-gray-750 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600 hover:shadow-xl border border-gray-600 hover:border-gray-500"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: plan.popular
                        ? "0 20px 40px rgba(255,255,255,0.2)"
                        : "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-gray-500 text-sm mb-4">
            Trusted by 10,000+ businesses worldwide
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-500" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-gray-500" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquareHeart className="w-5 h-5 text-gray-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}