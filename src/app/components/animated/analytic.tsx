import React from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import type { Variants } from "framer-motion";

const chartData = [
  { day: "Mon", height: 65 },
  { day: "Tue", height: 45 },
  { day: "Wed", height: 80 },
  { day: "Thu", height: 55 },
  { day: "Fri", height: 90 },
  { day: "Sat", height: 70 },
  { day: "Sun", height: 85 },
];

const barColors = [
  "bg-red-500",
  "bg-yellow-400",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

const AnalyticsDashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="w-full h-48 bg-gradient-to-br from-slate-950 to-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col">
      <motion.div
        className="flex items-center justify-between mb-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center space-x-2"
          variants={itemVariants}
        >
          <BarChart3 className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-slate-300 font-medium">
            Performance
          </span>
        </motion.div>
        <motion.div
          className="flex items-center space-x-1 text-emerald-400"
          variants={itemVariants}
        >
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">+24.7%</span>
        </motion.div>
      </motion.div>

      <div className="flex-grow flex items-end space-x-2">
        <div className="h-full flex flex-col justify-between text-xs text-slate-500 pr-1 border-r border-slate-700">
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>

        {/* X-Axis and Bars Container */}
        <div className="w-full h-full flex items-end border-b border-slate-700">
          <div className="w-full h-full flex items-end justify-around">
            {chartData.map((data, index) => (
              <div
                key={data.day}
                className="relative flex-1 h-full flex justify-center items-end"
              >
                <motion.div
                  className={`w-3/4 max-w-4 rounded-t ${
                    barColors[index % barColors.length]
                  }`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${data.height}%`, opacity: 1 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 70,
                    delay: 0.5 + index * 0.1,
                  }}
                  whileHover={{
                    filter: "brightness(1.25)",
                    transition: { duration: 0.2 },
                  }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.span
                  className="absolute -bottom-5 text-xs text-slate-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  {data.day}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-3 gap-2 text-xs mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="text-slate-400">Impressions</div>
          <div className="text-white font-semibold">2.4M</div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-slate-400">CTR</div>
          <div className="text-white font-semibold">3.8%</div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-slate-400">ROAS</div>
          <div className="text-white font-semibold">4.2x</div>
        </motion.div>
      </motion.div>

      {/* Live status indicator */}
      <div className="absolute top-4 right-4">
        <motion.div
          className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
