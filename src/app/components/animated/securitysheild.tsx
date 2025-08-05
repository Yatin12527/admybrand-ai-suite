import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const SecurityShield = () => {
  // A slow, smooth transition for a subtle color-shifting effect
  const colorShiftTransition = {
    duration: 8,
    repeat: Infinity,
    ease: "linear" as const,
    repeatType: "reverse" as const,
  };

  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 flex items-center justify-center overflow-hidden">
      {/* Background radial gradient with a subtle pulse */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, var(--glow-color-start) 0%, transparent 70%)",
        }}
        animate={{
          "--glow-color-start": [
            "rgba(16, 185, 129, 0.1)",
            "rgba(59, 130, 246, 0.1)",
            "rgba(16, 185, 129, 0.1)",
          ],
        }}
        transition={colorShiftTransition}
      />

      {/* Central Shield Icon with RGB glow */}
      <motion.div
        className="relative p-6 rounded-2xl shadow-2xl"
        style={{
          background:
            "linear-gradient(to bottom right, var(--bg-from), var(--bg-to))",
        }}
        animate={{
          "--bg-from": ["#10b981", "#3b82f6", "#10b981"],
          "--bg-to": ["#059669", "#2563eb", "#059669"],
          boxShadow: [
            "0 0 25px rgba(16, 185, 129, 0.5)",
            "0 0 40px rgba(59, 130, 246, 0.6)",
            "0 0 25px rgba(16, 185, 129, 0.5)",
          ],
        }}
        transition={colorShiftTransition}
      >
        <Shield className="w-12 h-12 text-white" />

        {/* Security badge on the shield */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-slate-800"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Lock className="w-3 h-3 text-slate-900" />
        </motion.div>
      </motion.div>

      {/* Animated security scan line with color shift */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2"
        style={{
          background:
            "linear-gradient(to bottom, var(--scan-color), transparent)",
        }}
        animate={{
          y: ["-100%", "200%"],
          "--scan-color": [
            "rgba(16, 185, 129, 0.3)",
            "rgba(59, 130, 246, 0.3)",
            "rgba(16, 185, 129, 0.3)",
          ],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          },
          "--scan-color": {
            ...colorShiftTransition,
            duration: colorShiftTransition.duration,
          },
        }}
      />

      {/* Top-left status indicator with matching color pulse */}
      <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
        <motion.div
          className="w-2 h-2 rounded-full"
          animate={{
            backgroundColor: ["#10b981", "#3b82f6", "#10b981"],
            scale: [1, 1.5, 1],
          }}
          transition={{ ...colorShiftTransition, repeatType: "reverse" }}
        />
        <motion.span
          className="text-xs font-medium"
          animate={{
            color: ["#10b981", "#3b82f6", "#10b981"],
          }}
          transition={colorShiftTransition}
        >
          Secured
        </motion.span>
      </div>

      {/* Bottom-right text */}
      <div className="absolute bottom-4 right-4 text-xs text-slate-400 font-medium z-10">
        Brand Protection
      </div>
    </div>
  );
};

export default SecurityShield;
