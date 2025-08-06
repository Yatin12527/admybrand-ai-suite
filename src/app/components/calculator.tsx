import React, { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Check, Users, BarChart3, Shield, ArrowRight } from "lucide-react";
import Particles from "./ui/particles";

export default function InteractivePricingCalculator() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [teamSize, setTeamSize] = useState(5);
  const [campaigns, setCampaigns] = useState(50);
  const [billing, setBilling] = useState("monthly");
  const [addOns, setAddOns] = useState({
    analytics: false,
    priority: false,
    training: false,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const plans = {
    starter: {
      name: "Starter",
      basePrice: 29,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 10 campaigns/month",
        "2 team members",
        "Basic analytics",
        "Email support",
      ],
      teamLimit: 2,
      campaignLimit: 10,
    },
    pro: {
      name: "Professional",
      basePrice: 99,
      description: "Best for growing businesses",
      features: [
        "Unlimited campaigns",
        "Up to 10 team members",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
      ],
      teamLimit: 10,
      campaignLimit: 100,
    },
    enterprise: {
      name: "Enterprise",
      basePrice: 299,
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
      ],
      teamLimit: Infinity,
      campaignLimit: Infinity,
    },
  };

  const addOnOptions = [
    {
      key: "analytics",
      name: "Advanced Analytics Dashboard",
      price: 19,
      icon: BarChart3,
    },
    {
      key: "priority",
      name: "Priority Support & Training",
      price: 39,
      icon: Shield,
    },
    {
      key: "training",
      name: "Custom Training & Onboarding",
      price: 99,
      icon: Users,
    },
  ];

  const calculatePrice = () => {
    const plan = plans[selectedPlan as keyof typeof plans];
    let basePrice = plan.basePrice;

    if (billing === "yearly") {
      basePrice = basePrice * 0.8;
    }

    let teamOverage = 0;
    if (selectedPlan !== "enterprise" && teamSize > plan.teamLimit) {
      teamOverage = (teamSize - plan.teamLimit) * 15;
    }

    let campaignOverage = 0;
    if (selectedPlan === "starter" && campaigns > plan.campaignLimit) {
      campaignOverage = Math.ceil((campaigns - plan.campaignLimit) / 10) * 10;
    }

    const addOnTotal = Object.entries(addOns).reduce(
      (total, [key, enabled]) => {
        const addon = addOnOptions.find((a) => a.key === key);
        return total + (enabled && addon ? addon.price : 0);
      },
      0
    );

    return {
      base: basePrice,
      teamOverage,
      campaignOverage,
      addOns: addOnTotal,
      total: basePrice + teamOverage + campaignOverage + addOnTotal,
    };
  };

  const pricing = calculatePrice();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  // Reusable card wrapper component
  const ConfigCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8">
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      {children}
    </div>
  );

  // Reusable slider component
  const SliderControl = ({
    label,
    value,
    onChange,
    min,
    max,
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
  }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-300">{label}</span>
        <span className="text-2xl font-bold text-white">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-slate-400 text-sm">
        <span>{min}</span>
        <span>{max}+</span>
      </div>
    </div>
  );

  // Reusable button component
  const ToggleButton = ({
    active,
    onClick,
    children,
    badge,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    badge?: string;
  }) => (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl transition-all duration-300 relative ${
        active
          ? "bg-white text-black font-semibold"
          : "bg-white/[0.05] text-slate-300 hover:bg-white/[0.1]"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {badge && (
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </motion.button>
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black py-20 px-4"
    >
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={120}
          particleSpread={8}
          speed={0.06}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full opacity-25"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-gray-900/10 z-10" />

      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-gilroy md:text-6xl font-bold text-slate-200 mb-6 leading-tight">
            Pricing <span className="font-gloock italic">Calculator</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find Your Perfect Plan
            <br />
            Customize your ADmyBRAND experience with our interactive pricing
            calculator
          </p>
        </motion.div>

        <div className=" sm:border sm:bg-white/[0.05] flex justify-center items-center rounded-4xl sm:p-10 sm:border-white/[0.4]">
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Configuration Panel */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              variants={itemVariants}
            >
              {/* Plan Selection */}
              <ConfigCard title="Choose Your Plan">
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(plans).map(([key, plan]) => (
                    <motion.button
                      key={key}
                      onClick={() => setSelectedPlan(key)}
                      className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                        selectedPlan === key
                          ? "bg-white/[0.08] border-white/[0.2] shadow-lg"
                          : "bg-white/[0.02] border-white/[0.08] hover:border-white/[0.15]"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h4 className="font-semibold text-white mb-2">
                        {plan.name}
                      </h4>
                      <p className="text-2xl font-bold text-slate-200 mb-2">
                        ${plan.basePrice}
                        <span className="text-sm text-slate-400">/mo</span>
                      </p>
                      <p className="text-slate-400 text-sm">
                        {plan.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </ConfigCard>

              {/* Billing Toggle & Team Size Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <ConfigCard title="Billing Cycle">
                  <div className="flex items-center space-x-4">
                    <ToggleButton
                      active={billing === "monthly"}
                      onClick={() => setBilling("monthly")}
                    >
                      Monthly
                    </ToggleButton>
                    <ToggleButton
                      active={billing === "yearly"}
                      onClick={() => setBilling("yearly")}
                      badge="20% OFF"
                    >
                      Yearly
                    </ToggleButton>
                  </div>
                </ConfigCard>

                <ConfigCard title="Team Size">
                  <SliderControl
                    label="Number of team members"
                    value={teamSize}
                    onChange={setTeamSize}
                    min={1}
                    max={50}
                  />
                </ConfigCard>
              </div>

              {/* Campaigns - only for starter */}
              {selectedPlan === "starter" && (
                <ConfigCard title="Monthly Campaigns">
                  <SliderControl
                    label="Campaigns per month"
                    value={campaigns}
                    onChange={setCampaigns}
                    min={1}
                    max={200}
                  />
                </ConfigCard>
              )}

              {/* Add-ons */}
              <ConfigCard title="Add-ons">
                <div className="space-y-4">
                  {addOnOptions.map((addon) => (
                    <motion.label
                      key={addon.key}
                      className="flex items-center p-4 rounded-xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <input
                        type="checkbox"
                        checked={addOns[addon.key as keyof typeof addOns]}
                        onChange={(e) =>
                          setAddOns((prev) => ({
                            ...prev,
                            [addon.key]: e.target.checked,
                          }))
                        }
                        className="sr-only"
                      />

                      <div
                        className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center transition-all duration-200 ${
                          addOns[addon.key as keyof typeof addOns]
                            ? "bg-white border-white"
                            : "border-slate-400"
                        }`}
                      >
                        {addOns[addon.key as keyof typeof addOns] && (
                          <Check className="w-3 h-3 text-black" />
                        )}
                      </div>

                      <addon.icon className="w-5 h-5 text-slate-400 mr-3" />

                      <div className="flex-1">
                        <div className="text-white font-medium">
                          {addon.name}
                        </div>
                        <div className="text-slate-400 text-sm">
                          +${addon.price}/month
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </ConfigCard>
            </motion.div>

            {/* Pricing Summary */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="sticky top-8 bg-white/[0.05] backdrop-blur-2xl border border-white/[0.12] rounded-3xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-gilroy font-bold text-white mb-2">
                    Your Plan
                  </h3>
                  <p className="text-slate-400">
                    {plans[selectedPlan as keyof typeof plans].name} - {billing}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Base plan</span>
                    <span className="text-white font-semibold">
                      ${pricing.base.toFixed(0)}
                    </span>
                  </div>

                  {pricing.teamOverage > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Extra team members</span>
                      <span className="text-white font-semibold">
                        +${pricing.teamOverage}
                      </span>
                    </div>
                  )}

                  {pricing.campaignOverage > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Extra campaigns</span>
                      <span className="text-white font-semibold">
                        +${pricing.campaignOverage}
                      </span>
                    </div>
                  )}

                  {pricing.addOns > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Add-ons</span>
                      <span className="text-white font-semibold">
                        +${pricing.addOns}
                      </span>
                    </div>
                  )}

                  {billing === "yearly" && (
                    <div className="flex justify-between items-center text-green-400">
                      <span>Yearly discount (20%)</span>
                      <span>
                        -$
                        {(
                          plans[selectedPlan as keyof typeof plans].basePrice *
                          0.2
                        ).toFixed(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/[0.1] pt-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-white">
                      Total
                    </span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        ${pricing.total.toFixed(0)}
                      </div>
                      <div className="text-slate-400 text-sm">
                        per {billing === "yearly" ? "year" : "month"}
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-white text-black font-semibold py-4 rounded-2xl hover:bg-slate-100 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>

                <p className="text-slate-400 text-xs text-center mt-4">
                  14-day free trial • No credit card required
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
