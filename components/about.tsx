"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3">
        Soy un apasionado desarrollador de software con sede en Costa Rica, especializado en desarrollo web <span className="font-medium">Full-Stack</span>. En mi portafolio, encontrarás ejemplos de mis habilidades y experiencia como desarrollador. Siempre estoy en busca de formas de mejorar y aprender nuevas tecnologías en mi tiempo libre. Además de programar, disfruto del surf y el skate, así como estar en contacto con la naturaleza y la adrenalina de los deportes extremos. La música lofi es mi compañera constante mientras trabajo en mis proyectos. ¡Gracias por visitar mi portafolio, espero que lo disfrutes tanto como yo disfruté creándolo!
      </p>
    </motion.section>
  );
}
