import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Particles from "./ui/particles";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "How does the AI campaign generation work?",
      answer:
        "Our AI analyzes your brand voice, audience data, and market trends to generate highly targeted campaigns. It uses advanced natural language processing and machine learning to create content that resonates with your specific audience, delivering campaigns that feel authentically human while being powered by cutting-edge technology.",
    },
    {
      question: "Can I customize the AI-generated content?",
      answer:
        "Absolutely! All AI-generated content can be fully customized to your exact specifications. You can edit, refine, and adjust any element to match your brand guidelines and campaign objectives. Our intuitive editor makes it easy to maintain your unique voice while leveraging AI efficiency.",
    },
    {
      question: "What kind of analytics and insights do you provide?",
      answer:
        "We provide comprehensive analytics including real-time engagement rates, conversion tracking, audience insights, performance predictions, and actionable recommendations for optimization. Our AI-powered analytics dashboard gives you deep insights into what's working and how to improve your campaigns for maximum ROI.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a comprehensive 14-day free trial with full access to all premium features. No credit card required to start your trial. Experience the full power of ADmyBRAND AI Suite and see the difference it can make for your marketing campaigns.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take data security extremely seriously. All data is encrypted in transit and at rest using industry-leading security protocols. We comply with GDPR, CCPA, and other major data protection regulations. Your brand data and customer information are protected with enterprise-grade security measures.",
    },
    {
      question: "What support options are available?",
      answer:
        "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated success team helps with onboarding, training, and ongoing optimization. Plus, access to our comprehensive knowledge base and video tutorials for self-service support.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.6,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
      className="relative min-h-screen w-full overflow-hidden bg-black py-20 px-4"
    >
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full opacity-30"
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-indigo-900/8 z-10" />

      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
      <div
        className="absolute bottom-32 right-16 w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-20 container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-gilroy md:text-6xl font-bold text-slate-200 mb-6 leading-tight">
            Questions & <span className="font-gloock italic">Answers</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Everything Covered
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get instant answers to the most common questions about
            <span className="text-blue-400 font-semibold">
              {" "}
              ADmyBRAND AI Suite
            </span>
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-500 shadow-2xl hover:shadow-blue-500/5">
                {/* Enhanced glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

                <motion.button
                  className="w-full text-left p-8 flex items-center justify-between group-hover:bg-white/[0.02] transition-all duration-300"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="font-semibold text-slate-100 text-lg pr-6 group-hover:text-white transition-colors duration-300">
                    {faq.question}
                  </span>

                  <div className="relative flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-10 h-10 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/[0.2] transition-all duration-300"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-white/[0.08] pt-6">
                      <p className="text-gray-300 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-8">
            Still have questions? We're here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 hover:from-blue-500 hover:to-indigo-500 backdrop-blur-xl text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 border border-white/10 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button
              className="bg-white/[0.05] backdrop-blur-xl text-slate-200 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 border border-white/[0.12] hover:border-white/[0.2] hover:bg-white/[0.08]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
