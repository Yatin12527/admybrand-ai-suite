import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  DollarSign,
  Users,
  Eye,
  Heart,
  Share2,
  Target,
  Activity,
  MoreHorizontal,
  RefreshCw,
  Download,
  Filter,
  ArrowUp,
  ArrowDown,
  Globe,
  BarChart2,
  CheckCircle,
  Calendar,
  Clock,
  Zap,
} from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  trend?: string;
  delay?: number;
  isNegative?: boolean;
}
interface ProgressBarProps {
  name: string;
  value: string | number;
  color: string;
  percentage: number;
  delay?: number;
}

// Data Constants - Centralized for easier maintenance
const CHART_DATA = {
  revenue: [
    { month: "Jan", value: 85, growth: 12 },
    { month: "Feb", value: 92, growth: 8 },
    { month: "Mar", value: 78, growth: -15 },
    { month: "Apr", value: 95, growth: 22 },
    { month: "May", value: 88, growth: -7 },
    { month: "Jun", value: 115, growth: 31 },
    { month: "Jul", value: 127, growth: 10 },
  ],
  social: [
    { name: "FB", value: 85, color: "#1877F2" },
    { name: "IG", value: 92, color: "#E4405F" },
    { name: "TW", value: 78, color: "#1DA1F2" },
    { name: "LI", value: 68, color: "#0A66C2" },
    { name: "YT", value: 95, color: "#FF0000" },
    { name: "TT", value: 88, color: "#000000" },
  ],
  audience: [
    { label: "Desktop", value: 60, color: "#10B981" },
    { label: "Mobile", value: 25, color: "#F59E0B" },
    { label: "Tablet", value: 15, color: "#EF4444" },
  ],
};

const REVENUE_SOURCES = [
  { name: "Subscriptions", value: 82, color: "blue", percentage: 65 },
  { name: "Ad Revenue", value: 32, color: "purple", percentage: 25 },
  { name: "Partnerships", value: 13, color: "orange", percentage: 10 },
];

// Shared Styles
const STYLES = {
  card: "bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10",
  button: "p-1 sm:p-1.5 hover:bg-white/10 rounded transition-colors",
  statCard:
    "bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2.5 min-h-[70px] flex flex-col justify-between",
};

// Enhanced Line Chart with SVG animations
const AdvancedLineChart = () => {
  const [activePoint, setActivePoint] = useState<null | number>(null);

  // Generate SVG path from data points - mathematical transformation
  type DataPoint = { value: number };

  const generatePath = (data: DataPoint[], type: "line" | "area" = "line") => {
    const points = data.map(
      (point, index) => `${30 + index * 45} ${96 - point.value * 0.5}`
    );
    const path = `M ${points.join(" L ")}`;
    return type === "area" ? `${path} L 300 96 L 30 96 Z` : path;
  };

  return (
    <div className="relative h-24 w-full">
      <svg viewBox="0 0 300 96" className="w-full h-full">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Grid lines for visual reference */}
        {Array.from({ length: 4 }, (_, i) => (
          <line
            key={i}
            x1="0"
            y1={16 + i * 16}
            x2="300"
            y2={16 + i * 16}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

        {/* Area fill - provides visual depth */}
        <path
          d={generatePath(CHART_DATA.revenue, "area")}
          fill="url(#chartGradient)"
          className="animate-pulse"
        />

        {/* Main line - primary visual element */}
        <path
          d={generatePath(CHART_DATA.revenue)}
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          style={{
            animation: "drawLine 1.5s ease-out 1.7s both",
          }}
        />

        {/* Interactive data points */}
        {CHART_DATA.revenue.map((point, index) => (
          <circle
            key={index}
            cx={30 + index * 45}
            cy={96 - point.value * 0.5}
            r="3"
            fill="#10B981"
            stroke="rgba(16, 185, 129, 0.3)"
            strokeWidth="6"
            className="cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
            style={{
              animation: `fadeIn 0.4s ease-out ${2.1 + index * 0.05}s both`,
            }}
            onMouseEnter={() => setActivePoint(index)}
            onMouseLeave={() => setActivePoint(null)}
          />
        ))}
      </svg>

      {/* Tooltip - contextual data display */}
      {activePoint !== null && (
        <div
          className="absolute bg-black/90 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs pointer-events-none z-10 transition-all duration-200"
          style={{
            left: `${((activePoint * 45 + 30) / 300) * 100}%`,
            top: `${
              ((96 - CHART_DATA.revenue[activePoint].value * 0.5) / 96) * 100
            }%`,
            transform: "translate(-50%, -120%)",
          }}
        >
          <div className="font-medium">
            ${CHART_DATA.revenue[activePoint].value}K
          </div>
          <div className="text-green-400 text-xs">
            {CHART_DATA.revenue[activePoint].growth > 0 ? "+" : ""}
            {CHART_DATA.revenue[activePoint].growth}%
          </div>
        </div>
      )}
    </div>
  );
};

// Circular progress chart - audience breakdown
const EnhancedPieChart = () => {
  const total = CHART_DATA.audience.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  return (
    <div className="relative w-20 h-20 mx-auto">
      <svg viewBox="0 0 42 42" className="w-full h-full transform -rotate-90">
        <circle
          cx="21"
          cy="21"
          r="15.915"
          fill="transparent"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="3"
        />
        {CHART_DATA.audience.map((segment, index) => {
          const percentage = (segment.value / total) * 100;
          const strokeDasharray = `${percentage} ${100 - percentage}`;
          const strokeDashoffset = -cumulativePercentage;
          cumulativePercentage += percentage;

          return (
            <circle
              key={index}
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke={segment.color}
              strokeWidth="3"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                animation: `drawCircle 1s ease-out ${1.8 + index * 0.1}s both`,
              }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white font-bold text-xs">100%</div>
          <div className="text-white/60 text-[10px]">Reach</div>
        </div>
      </div>
    </div>
  );
};

// Bar chart for social media performance
const ProfessionalBarChart = () => (
  <div className="h-12 flex items-end justify-between gap-1">
    {CHART_DATA.social.map((item, index) => (
      <div key={index} className="flex-1 flex flex-col items-center gap-1">
        <div
          className="w-full rounded-t-sm relative overflow-hidden transition-all duration-700 ease-out"
          style={{
            backgroundColor: item.color,
            maxHeight: "32px",
            height: `${item.value}%`,
            animationDelay: `${1.8 + index * 0.05}s`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
        </div>
        <span className="text-[9px] text-white/60 font-medium">
          {item.name}
        </span>
      </div>
    ))}
  </div>
);

// Circular engagement meter
const EngagementMeter = ({ value = 78 }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-16 h-16 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
          fill="transparent"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#8B5CF6"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          strokeDashoffset={circumference}
          style={
            {
              animation: `drawProgress 1.5s ease-out 2.0s both`,
              "--target-offset": strokeDashoffset,
            } as React.CSSProperties
          }
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white font-bold text-xs">{value}%</div>
        </div>
      </div>
    </div>
  );
};

// Reusable stat component with trend indicators
const StatCard = ({
  icon,
  value,
  label,
  trend,
  delay,
  isNegative = false,
}: StatCardProps) => (
  <div
    className={`${STYLES.statCard} opacity-0 transform translate-y-5`}
    style={{
      animation: `slideUp 0.5s ease-out ${delay}s both`,
    }}
  >
    <div className="flex items-center justify-between mb-1">
      <div className="text-white/70 text-sm">{icon}</div>
      <div
        className={`flex items-center gap-1 text-xs font-medium ${
          isNegative ? "text-red-400" : "text-green-400"
        }`}
      >
        {isNegative ? (
          <ArrowDown className="w-3 h-3" />
        ) : (
          <ArrowUp className="w-3 h-3" />
        )}
        <span>{trend}</span>
      </div>
    </div>
    <div className="text-white font-bold text-sm mb-1">{value}</div>
    <div className="text-white/60 text-xs">{label}</div>
  </div>
);

// Progress bar component for revenue sources
const ProgressBar = ({
  name,
  value,
  color,
  percentage,
  delay,
}: ProgressBarProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 bg-${color}-500 rounded-full`}></div>
      <span className="text-white/80 text-sm">{name}</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-16 bg-white/10 rounded-full h-2 overflow-hidden">
        <div
          className={`bg-${color}-500 h-full rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: `${percentage}%`,
            animationDelay: `${delay}s`,
          }}
        />
      </div>
      <span className="text-white font-medium text-sm min-w-[40px]">
        ${value}K
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes drawCircle {
          from { stroke-dasharray: 0 100; }
        }
        @keyframes drawProgress {
          from { stroke-dashoffset: ${2 * Math.PI * 25}; }
          to { stroke-dashoffset: var(--target-offset); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="w-full min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div
          className="w-full max-w-7xl bg-black/40 backdrop-blur-3xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden min-h-[600px] opacity-0"
          style={{
            animation: "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both",
          }}
        >
          {/* Header - Brand and controls */}
          <div className="h-12 flex items-center justify-between px-4 sm:px-6 border-b border-white/10 bg-black/20">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* macOS-style window controls */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Brand identity */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-base">
                    ADmyBRAND
                  </span>
                  <span className="text-gray-400 font-medium ml-1 sm:ml-2 text-xs sm:text-sm">
                    Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Controls and status */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="text-white/60 text-xs sm:text-sm font-mono hidden sm:block">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs sm:text-sm">Live</span>
              </div>
              <div className="flex items-center gap-1">
                <button className={STYLES.button}>
                  <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
                </button>
                <button className={STYLES.button}>
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
                </button>
                <button className={STYLES.button}>
                  <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-2 sm:p-4 space-y-4">
            {/* Top Analytics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {/* Revenue Analytics - Main chart takes priority space */}
              <div className="lg:col-span-2 xl:col-span-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Revenue Analytics
                    </h3>
                    <p className="text-white/60 text-sm">Monthly performance</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                      <TrendingUp className="w-3 h-3" />
                      <span className="font-bold">+47.2%</span>
                    </div>
                    <Filter className="w-4 h-4 text-white/70" />
                  </div>
                </div>

                <AdvancedLineChart />

                {/* Revenue summary metrics */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">$127K</div>
                    <div className="text-white/60 text-xs">This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">$95K</div>
                    <div className="text-white/60 text-xs">Last Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">$32K</div>
                    <div className="text-white/60 text-xs">Growth</div>
                  </div>
                </div>

                {/* Revenue Sources Breakdown */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold text-sm">
                      Revenue Sources
                    </h4>
                    <div className="text-white/60 text-xs">This Month</div>
                  </div>
                  <div className="space-y-3">
                    {REVENUE_SOURCES.map((source, i) => (
                      <ProgressBar key={i} {...source} delay={2.3 + i * 0.2} />
                    ))}
                  </div>

                  {/* Conversion Rate KPI */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-400" />
                        <span className="text-white/80 text-sm">
                          Conversion Rate
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-green-400 font-bold text-sm">
                          4.2%
                        </span>
                        <ArrowUp className="w-3 h-3 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Analytics Panels */}
              <div className="lg:col-span-2 xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {/* Audience Breakdown */}
                <div className={STYLES.card}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-sm">Audience</h3>
                    <Globe className="w-4 h-4 text-white/70" />
                  </div>
                  <div className="flex justify-center mb-3">
                    <EnhancedPieChart />
                  </div>
                  <div className="space-y-2">
                    {CHART_DATA.audience.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-1">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-white/70">{item.label}</span>
                        </div>
                        <span className="text-white">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Channels Performance */}
                <div className={STYLES.card}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-sm">Channels</h3>
                    <Activity className="w-4 h-4 text-white/70" />
                  </div>
                  <ProfessionalBarChart />
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Top Performer</span>
                      <span className="text-red-400 font-medium">YouTube</span>
                    </div>
                  </div>
                </div>

                {/* Engagement Analytics */}
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-sm">Engagement</h3>
                    <Zap className="w-4 h-4 text-white/70" />
                  </div>
                  <div className="flex items-center justify-between">
                    <EngagementMeter />
                    <div className="flex-1 ml-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Comments</span>
                        <span className="text-purple-400 font-medium">
                          8.2K
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Avg. Time</span>
                        <span className="text-purple-400 font-medium">
                          2:34
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Bounce Rate</span>
                        <span className="text-purple-400 font-medium">22%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Insights */}
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-sm">Schedule</h3>
                    <Calendar className="w-4 h-4 text-white/70" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-xs font-medium">
                          Peak Hours
                        </p>
                        <p className="text-orange-300 text-xs">
                          3:00 PM - 5:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-xs font-medium">
                          Next Post
                        </p>
                        <p className="text-blue-300 text-xs">
                          Today at 4:30 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* KPI Stats Grid - Core metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              <StatCard
                icon={<DollarSign className="w-4 h-4" />}
                value="$127K"
                label="Revenue"
                trend="23%"
                delay={2.3}
              />
              <StatCard
                icon={<Users className="w-4 h-4" />}
                value="45.2K"
                label="Reach"
                trend="18%"
                delay={2.4}
              />
              <StatCard
                icon={<Eye className="w-4 h-4" />}
                value="892K"
                label="Views"
                trend="31%"
                delay={2.5}
              />
              <StatCard
                icon={<Heart className="w-4 h-4" />}
                value="12.4K"
                label="Likes"
                trend="42%"
                delay={2.6}
              />
              <StatCard
                icon={<Share2 className="w-4 h-4" />}
                value="3.2K"
                label="Shares"
                trend="67%"
                delay={2.7}
              />
              <StatCard
                icon={<Target className="w-4 h-4" />}
                value="8.9%"
                label="CTR"
                trend="15%"
                delay={2.8}
              />
            </div>

            {/* Campaign Status Cards - Current initiatives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                className="bg-blue-500/10 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20 opacity-0 transform translate-y-5"
                style={{ animation: "slideUp 0.5s ease-out 2.9s both" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">
                      Live Campaign
                    </p>
                    <p className="text-blue-300 text-xs">Active optimization</p>
                    <div className="mt-2 bg-blue-500/20 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-blue-400 h-full rounded-full transition-all duration-1500 ease-out"
                        style={{ width: "84%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-green-500/10 backdrop-blur-sm p-4 rounded-xl border border-green-500/20 opacity-0 transform translate-y-5"
                style={{ animation: "slideUp 0.5s ease-out 3.0s both" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">Holiday Sale</p>
                    <p className="text-green-300 text-xs">ROI: 34.7x</p>
                    <div className="mt-1 text-green-400 text-xs">
                      Target achieved: 127%
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-yellow-500/10 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/20 opacity-0 transform translate-y-5"
                style={{ animation: "slideUp 0.5s ease-out 3.1s both" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <BarChart2 className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">
                      Brand Awareness
                    </p>
                    <p className="text-yellow-300 text-xs">+156% growth</p>
                    <div className="mt-1 text-yellow-400 text-xs">
                      Trending across platforms
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-purple-500/10 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20 opacity-0 transform translate-y-5"
                style={{ animation: "slideUp 0.5s ease-out 3.2s both" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">AI Insights</p>
                    <p className="text-purple-300 text-xs">Peak: 3-5 PM</p>
                    <div className="mt-1 text-purple-400 text-xs">
                      Optimal posting times
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
