import React from "react";
import { motion, easeInOut } from "framer-motion";
import { Layers, Cpu } from "lucide-react";

const CreativeStudio: React.FC = () => {
  const glowTransition = {
    duration: 6,
    repeat: Infinity,
    ease: [0, 0, 1, 1] as [number, number, number, number],
  };

  const pulseTransition = {
    duration: 1.5,
    repeat: Infinity,
    ease: easeInOut,
    repeatType: "mirror" as const,
  };

  const nodeColors = ["bg-red-500/90", "bg-green-500/90", "bg-blue-500/90"];

  return (
    <div className="relative w-full h-48 bg-[#111111] rounded-xl border border-neutral-800 p-6 overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, var(--glow-color) 0%, transparent 60%)",
          }}
          animate={{
            "--glow-color": [
              "hsla(190, 100%, 70%, 0.15)",
              "hsla(250, 100%, 70%, 0.15)",
              "hsla(310, 100%, 70%, 0.15)",
              "hsla(190, 100%, 70%, 0.15)",
            ],
          }}
          transition={glowTransition}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-slate-400" />
            <span className="text-sm text-slate-300 font-medium">
              Creative Engine
            </span>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-1 rounded-full border border-neutral-700 bg-black/30">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={pulseTransition}
            />
            <span className="text-xs text-slate-300 font-medium">
              Processing
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-16 flex items-center justify-center">
        <motion.div
          className="relative w-12 h-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {nodeColors.map((colorClass, index) => (
            <motion.div
              key={index}
              className="absolute w-full h-full"
              style={{ transform: `rotate(${index * 120}deg)` }}
            >
              <motion.div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${colorClass}`}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ ...pulseTransition, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
            <Cpu className="w-6 h-6" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Rendering Output</span>
          <span className="font-semibold text-slate-300">73%</span>
        </div>
        <div className="w-full bg-black/40 rounded-full h-2.5 border border-neutral-800">
          <motion.div
            className="h-2.5 rounded-full bg-white"
            initial={{ width: "0%" }}
            animate={{
              width: "73%",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
            }}
            transition={{
              width: { duration: 2.5, ease: "circOut" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeStudio;
