import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  User,
  Mail,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Particles from "./ui/particles";


interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Please enter a valid email" : "";
      case "company":
        return value.length < 2 ? "Company name is required" : "";
      case "message":
        return value.length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      icon: User,
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email Address",
      icon: Mail,
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      name: "company",
      label: "Company",
      icon: Building,
      type: "text",
      placeholder: "Enter your company name",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black py-20 px-4"
    >
      {/* Single particles background that covers everything */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full opacity-40"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-gray-900/5 z-10" />

      {/* Success State */}
      {isSubmitted && (
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto transform transition-all duration-1000 scale-100 opacity-100">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 transform transition-all duration-500 delay-200 scale-100">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Message <span className="font-serif italic">Sent!</span>
            </h2>

            <p className="text-xl text-slate-300 mb-8">
              Thank you for reaching out! Our team will get back to you within
              24 hours.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  message: "",
                });
              }}
              className="bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Send Another Message
            </button>
          </div>
        </div>
      )}

      {/* Main Form Content */}
      {!isSubmitted && (
        <div className="relative z-20 container mx-auto px-6 max-w-3xl">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-gilroy md:text-6xl font-bold text-slate-200 mb-6 leading-tight">
              Let's <span className="font-gloock italic">Connect</span>
              <br />
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your marketing? Tell us about your project and
              we'll craft a solution just for you.
            </p>
          </div>

          <div
            className={`bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              {/* Form Fields */}
              <div className="space-y-6">
                {formFields.map((field, index) => (
                  <div
                    key={field.name}
                    className={`space-y-2 transform transition-all duration-700 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <label className="block text-slate-300 font-medium">
                      {field.label} <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={field.type}
                        value={formData[field.name as keyof FormData]}
                        onChange={(e) =>
                          handleInputChange(field.name, e.target.value)
                        }
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField("")}
                        className={`w-full bg-white/[0.05] border rounded-2xl px-4 py-4 pl-12 text-white placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                          errors[field.name]
                            ? "border-red-400 focus:border-red-300"
                            : focusedField === field.name
                            ? "border-white/[0.3] bg-white/[0.08]"
                            : "border-white/[0.1] hover:border-white/[0.2]"
                        }`}
                        placeholder={field.placeholder}
                      />
                      <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    </div>
                    {errors[field.name] && (
                      <div className="flex items-center text-red-400 text-sm animate-pulse">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}

                {/* Message Field */}
                <div
                  className={`space-y-2 transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "900ms" }}
                >
                  <label className="block text-slate-300 font-medium flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-slate-400" />
                    Tell Us About Your Project{" "}
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    rows={5}
                    className={`w-full bg-white/[0.05] border rounded-2xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-300"
                        : focusedField === "message"
                        ? "border-white/[0.3] bg-white/[0.08]"
                        : "border-white/[0.1] hover:border-white/[0.2]"
                    }`}
                    placeholder="Tell us about your marketing challenges, goals, and how we can help you succeed..."
                  />
                  {errors.message && (
                    <div className="flex items-center text-red-400 text-sm animate-pulse">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div
                className={`text-center pt-4 transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-white text-black font-semibold px-12 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center mx-auto transform ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-slate-100 hover:shadow-2xl hover:scale-105 active:scale-95"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </button>

                <p className="text-slate-400 text-sm mt-4">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
