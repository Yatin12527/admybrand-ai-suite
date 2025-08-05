import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import React from "react";

const nodeCount = 8;
const radius = 80;

const nodes = Array.from({ length: nodeCount }).map((_, i) => {
  const angle = (i / nodeCount) * 2 * Math.PI;
  return {
    id: i,
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
    color: `hsl(${(i * 360) / nodeCount}, 70%, 60%)`,
  };
});

const AIBrainNetwork = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center bg-slate-950 rounded-xl border border-slate-800 overflow-hidden group">
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23334155%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M0%200h1v40H0zM0%200h40v1H0z%22/%3E%3C/g%3E%3C/svg%3E')]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className="relative flex items-center justify-center"
        style={{ width: `${radius * 2.5}px`, height: `${radius * 2.5}px` }}
      >
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <defs>
            {nodes.map((node) => (
              <radialGradient key={node.id} id={`grad${node.id}`}>
                <stop offset="0%" stopColor={node.color} stopOpacity="1" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
              </radialGradient>
            ))}
          </defs>
          {nodes.map((node) => (
            <motion.line
              key={node.id}
              x1={radius * 1.25}
              y1={radius * 1.25}
              x2={node.x + radius * 1.25}
              y2={node.y + radius * 1.25}
              stroke={`url(#grad${node.id})`}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 1.5,
                delay: node.id * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: node.color,
              x: node.x,
              y: node.y,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "mirror",
              delay: node.id * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="relative p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-lg"
          initial={{ scale: 0.95 }}
          animate={{
            scale: [0.95, 1, 0.95],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: "0 0 0px rgba(99, 102, 241, 0)",
              border: "1px solid rgba(99, 102, 241, 0)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.5)",
                "0 0 40px rgba(139, 92, 246, 0.7)",
                "0 0 20px rgba(99, 102, 241, 0.5)",
              ],
              borderColor: [
                "rgba(99, 102, 241, 0.5)",
                "rgba(139, 92, 246, 0.7)",
                "rgba(99, 102, 241, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <Brain className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 left-4 text-xs text-slate-400 font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        AI Processing
      </motion.div>

      <motion.div
        className="absolute top-4 right-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center space-x-1 px-2 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
          <motion.div
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs text-emerald-400 font-medium">Active</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AIBrainNetwork;
