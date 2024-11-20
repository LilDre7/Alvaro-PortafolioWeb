"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, FileText, Zap, Brain, CodeXml } from "lucide-react";

export default function AnimateBeam() {
  const [activeBeam, setActiveBeam] = useState(0);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const radius = windowWidth < 640 ? 120 : windowWidth < 768 ? 150 : 180;

  // Services configuration
  const services = [
    { icon: <FileText className="w-5 h-5" />, name: "Docs", angle: -30 },
    { icon: <Zap className="w-5 h-5" />, name: "Zapier", angle: 30 },
    { icon: <Brain />, name: "WhatsApp", angle: -150 },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "Messenger",
      angle: 150,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBeam((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="w-full flex items-center justify-center p-4 -mt-32 sm:-mt-56">
      <div className="relative w-[95%] max-w-[360px] sm:max-w-[400px] md:max-w-[500px] aspect-square">
        {/* Center Hub */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 -ml-5 -mt-5 sm:-ml-6 sm:-mt-6 md:-ml-7 md:-mt-7 z-50 bg-white rounded-full shadow-md flex items-center justify-center dark:bg-gray-950"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-15 h-15 z-50">
            <CodeXml />
          </div>
        </motion.div>

        {/* Service Nodes and Beams */}
        {services.map((service, index) => {
          // Responsively reduce radius for smaller screens

          const x = radius * Math.cos((service.angle * Math.PI) / 180);
          const y = radius * Math.sin((service.angle * Math.PI) / 180);

          return (
            <div key={service.name}>
              {/* Beam */}
              <motion.div
                className="absolute left-1/2 top-1/2 origin-left h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent"
                style={{
                  width: radius,
                  rotate: service.angle,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: activeBeam === index ? 1 : 0,
                    opacity: activeBeam === index ? 1 : 0,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Service Icon */}
              <motion.div
                className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 -ml-5 -mt-5 sm:-ml-6 sm:-mt-6 md:-ml-7 md:-mt-7 bg-white rounded-full shadow-lg flex items-center justify-center dark:bg-gray-950"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                animate={{
                  scale: activeBeam === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {typeof service.icon === "string" ? (
                  <span className="text-xl">{service.icon}</span>
                ) : (
                  service.icon
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
