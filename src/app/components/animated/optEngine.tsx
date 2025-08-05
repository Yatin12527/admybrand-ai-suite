import React from "react";
import { motion } from "framer-motion";
import { Cpu, TrendingUp, Zap } from "lucide-react";

const OptimizationEngine = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-xl border border-slate-700/50 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400 rounded-full"
          initial={{ 
            x: Math.random() * 400, 
            y: Math.random() * 200,
            opacity: 0 
          }}
          animate={{
            x: Math.random() * 400,
            y: Math.random() * 200,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <motion.path
          d="M 80 50 Q 200 30 320 80"
          fill="none"
          stroke="url(#connectionGradient)"
          strokeWidth="2"
          strokeDasharray="3 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 80 140 Q 200 160 320 110"
          fill="none"
          stroke="url(#connectionGradient2)"
          strokeWidth="2"
          strokeDasharray="3 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0"/>
            <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="1"/>
            <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0"/>
            <stop offset="50%" stopColor="rgb(139, 92, 246)" stopOpacity="1"/>
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Main processor unit */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-indigo-500/30 rounded-lg shadow-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(99, 102, 241, 0.3)",
              "0 0 30px rgba(139, 92, 246, 0.4)",
              "0 0 20px rgba(99, 102, 241, 0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="w-8 h-8 text-indigo-300" />
          </motion.div>

          {/* Processing indicator */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Data nodes */}
      <motion.div
        className="absolute left-16 top-12 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute right-16 top-16 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute left-20 bottom-16 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute right-20 bottom-12 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          delay: 0.8,
        }}
      />

      {/* Status indicator */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <motion.div
          className="w-2 h-2 bg-emerald-400 rounded-full"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <span className="text-xs text-slate-300 font-medium tracking-wide">ACTIVE</span>
      </div>

      {/* Performance metrics */}
      <motion.div
        className="absolute top-4 right-4 text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center justify-end space-x-1 mb-1">
          <TrendingUp className="w-3 h-3 text-emerald-400" />
          <motion.span
            className="text-sm font-semibold text-emerald-400"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            +23%
          </motion.span>
        </div>
        <div className="text-xs text-slate-400">Efficiency</div>
      </motion.div>

      {/* Bottom label */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
        <Zap className="w-3 h-3 text-indigo-400" />
        <span className="text-xs text-slate-400 font-medium tracking-wider">
          OPTIMIZATION ENGINE
        </span>
      </div>

      {/* Subtle energy bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default OptimizationEngine;