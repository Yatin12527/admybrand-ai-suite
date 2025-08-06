"use client";
import { motion } from "framer-motion";
import {
  SiSlack,
  SiCoinbase,
  SiWebflow,
  SiDropbox,
  SiDiscord,
  SiZoom,
  SiNetflix,
  SiSpotify,
  SiAirbnb,
  SiStripe,
  SiGoogle,
  SiApple,
  SiAmazon,
  SiMeta,
  SiTesla,
} from "react-icons/si";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { IconType } from "react-icons"; 

// Extended company logos data with consistent fonts
const topRowLogos = [
  { name: "Slack", logo: SiSlack, font: "font-mono" },
  { name: "Coinbase", logo: SiCoinbase, font: "font-mono" },
  { name: "Webflow", logo: SiWebflow, font: "font-mono" },
  { name: "Dropbox", logo: SiDropbox, font: "font-mono" },
  { name: "Discord", logo: SiDiscord, font: "font-mono" },
  { name: "Zoom", logo: SiZoom, font: "font-mono" },
  { name: "Netflix", logo: SiNetflix, font: "font-mono" },
  { name: "Spotify", logo: SiSpotify, font: "font-mono" },
  { name: "Microsoft", logo: TfiMicrosoftAlt, font: "font-mono" },
  { name: "Google", logo: SiGoogle, font: "font-mono" },
];

const bottomRowLogos = [
  { name: "Apple", logo: SiApple, font: "font-mono" },
  { name: "Amazon", logo: SiAmazon, font: "font-mono" },
  { name: "Meta", logo: SiMeta, font: "font-mono" },
  { name: "Tesla", logo: SiTesla, font: "font-mono" },
  { name: "Airbnb", logo: SiAirbnb, font: "font-mono" },
  { name: "Stripe", logo: SiStripe, font: "font-mono" },
  { name: "Slack", logo: SiSlack, font: "font-mono" },
  { name: "Coinbase", logo: SiCoinbase, font: "font-mono" },
  { name: "Webflow", logo: SiWebflow, font: "font-mono" },
  { name: "Dropbox", logo: SiDropbox, font: "font-mono" },
];

// Logo component with icon and text
const LogoItem = ({
  name,
  logo: LogoIcon,
  font,
}: {
  name: string;
  logo: IconType;
  font: string;
}) => (
  <div className="flex-shrink-0 mx-8 group">
    <div className="flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
      <LogoIcon className="w-7 h-7 text-white/50 group-hover:text-white/70 transition-colors duration-300" />
      <div
        className={`text-white/40 group-hover:text-white/60 transition-colors duration-300 ${font} font-bold text-sm tracking-wider`}
      >
        {name.toUpperCase()}
      </div>
    </div>
  </div>
);

// Moving brick pattern background
const MovingBrickBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      {/* First layer moving left */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: [-100, 0] }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
      >
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/5 h-8 rounded-sm"
              style={{
                marginLeft: Math.floor(i / 12) % 2 === 0 ? "0" : "50%",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Second layer moving right for depth */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: [0, -100] }}
        transition={{
          repeat: Infinity,
          duration: 80,
          ease: "linear",
        }}
      >
        <div className="grid grid-cols-10 gap-2 h-full opacity-30">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/3 h-6 rounded-sm"
              style={{
                marginLeft: Math.floor(i / 10) % 2 === 0 ? "25%" : "0",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Infinite scrolling row component
const ScrollingRow = ({
  logos,
  direction = "left",
  speed = 50,
}: {
  logos: typeof topRowLogos;
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Triple the logos for seamless loop and more columns
  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x:
            direction === "left"
              ? [0, -100 * logos.length]
              : [-100 * logos.length, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {tripleLogos.map((company, index) => (
          <LogoItem
            key={`${company.name}-${index}`}
            name={company.name}
            logo={company.logo}
            font={company.font}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const TrustedBySection = () => {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* Moving brick background */}
      <MovingBrickBackground />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-black/90"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header with fire typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white/90">
            {/* Removed "font-black" */}
            <span className="tracking-tight">Trusted by </span>

            <span
              // Removed "font-bold"
              className="italic tracking-wider "
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
              }}
            >
              businesses
            </span>

            {/* Removed "font-black" */}
            <span className="tracking-tight"> of all sizes worldwide.</span>
          </h2>
        </motion.div>

        {/* Large container with more columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-7xl mx-auto"
        >
          {/* Enhanced glowing border */}
          <div className="absolute -inset-px bg-gradient-to-r from-white/5 via-white/15 to-white/5 rounded-3xl blur-sm opacity-40"></div>

          {/* Main large container */}
          <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-3xl   overflow-hidden">
            {/* Inner content with more column dividers */}
            <div className="relative">
              {/* Horizontal divider line */}

              {/* Scrolling logos container */}
              <div className="py-12">
                <div className="space-y-8">
                  {/* Top row - moving left */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <ScrollingRow
                      logos={topRowLogos}
                      direction="left"
                      speed={45}
                    />
                  </motion.div>

                  {/* Bottom row - moving right */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <ScrollingRow
                      logos={bottomRowLogos}
                      direction="right"
                      speed={40}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced fade edges */}
          <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none rounded-l-3xl"></div>
          <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none rounded-r-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
