import React from "react";
import {
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Heart,
} from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image src="/logo.svg" width={120} height={40} alt="Logo" />

            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
              Transform your marketing with AI-powered campaigns that drive real
              results. Join thousands of brands revolutionizing their approach.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {[
                {
                  icon: Twitter,
                  label: "Twitter",
                  link: "https://x.com/admybrand?lang=en",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/company/admybrand?originalSubdomain=in",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  link: "https://www.instagram.com/Admybrand",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors duration-200 group"
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-6">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "API", href: "#" },
                { label: "Integrations", href: "#" },
                { label: "Templates", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Blog", href: "#blog" },
                { label: "Careers", href: "#careers" },
                { label: "Contact", href: "#contact" },
                { label: "Press", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-6">
              Connect
            </h4>
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, text: "hello@admybrand.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center text-slate-400 text-sm"
                >
                  <contact.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-slate-400 text-xs mb-3 uppercase tracking-wide">
                Newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-l-lg px-3 py-2 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-600 transition-colors duration-200"
                />
                <button className="bg-slate-700 border border-slate-700 border-l-0 rounded-r-lg px-3 py-2 hover:bg-slate-600 transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-slate-500 text-sm flex items-center">
              © 2025 ADmyBRAND. Made with
              <Heart className="w-3 h-3 mx-1 text-slate-400 fill-current" />
              in San Francisco
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-500 hover:text-slate-300 transition-colors duration-200 flex items-center"
                >
                  {item}
                  <ExternalLink className="w-2.5 h-2.5 ml-1" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
