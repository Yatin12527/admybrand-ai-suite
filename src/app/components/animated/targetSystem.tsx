import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Activity, Crosshair } from "lucide-react";

const TargetingSystem = () => {
  const rings = [
    { size: 80, color: "border-cyan-400/50", duration: 4 },
    { size: 120, color: "border-emerald-500/50", duration: 4.5 },
    { size: 160, color: "border-sky-500/50", duration: 5 },
  ];

  const pings = [
    {
      Icon: Users,
      color: "text-cyan-300",
      bg: "bg-cyan-500/30",
      position: { top: "20%", left: "25%" },
      duration: 3.5,
    },
    {
      Icon: Activity,
      color: "text-emerald-300",
      bg: "bg-emerald-500/30",
      position: { bottom: "25%", right: "20%" },
      duration: 4,
    },
    {
      Icon: Crosshair,
      color: "text-lime-300",
      bg: "bg-lime-500/30",
      position: { top: "30%", right: "15%" },
      duration: 4.5,
    },
  ];

  return (
    <div className="relative w-full h-48 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden group">
      {/* Background radial gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_60%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_50%)] transition-all duration-500"></div>

      {/* Sweeping Radar Line */}
      <motion.div
        className="absolute w-px h-1/2 bg-gradient-to-b from-cyan-400 to-transparent"
        style={{ top: "50%", left: "50%", transformOrigin: "top center" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Concentric circles */}
      {rings.map((ring, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${ring.color}`}
          style={{ width: `${ring.size}px`, height: `${ring.size}px` }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      ))}

      {/* Center target */}
      <motion.div
        className="relative p-3 bg-gradient-to-br from-red-600 to-rose-600 rounded-full shadow-lg z-10"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-red-400"
          animate={{
            boxShadow: [
              "0 0 20px rgba(239, 68, 68, 0.7)",
              "0 0 30px rgba(225, 29, 72, 0.8)",
              "0 0 20px rgba(239, 68, 68, 0.7)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Target className="w-8 h-8 text-white filter drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]" />
      </motion.div>

      {/* Floating data pings */}
      {pings.map((ping, index) => (
        <motion.div
          key={index}
          className={`absolute p-1.5 rounded-full border border-white/20 ${ping.bg}`}
          style={{ ...ping.position }}
          animate={{
            scale: [0.9, 1.2, 0.9],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: ping.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <ping.Icon className={`w-4 h-4 ${ping.color}`} />
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-4 left-4 text-xs text-slate-300 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Precision Targeting
      </motion.div>
    </div>
  );
};

export default TargetingSystem;
