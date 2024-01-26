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
        Soy un apasionado desarrollador de software con base en Costa Rica, especializado en el ámbito <span className="font-bold">Full-Stack del desarrollo web & móvil.</span>  Mi portafolio exhibe ejemplos representativos de mis competencias y experiencia en este campo. Constantemente busco oportunidades para perfeccionarme y adquirir conocimientos sobre las últimas tecnologías durante mi tiempo libre. Además de la programación, dedico tiempo a la investigación tecnológica, a actividades físicas en el GYM y a experiencias en la naturaleza y deportes extremos para mantener un equilibrio. La música lofi es mi constante acompañante durante el desarrollo de mis aplicaciones.

        Agradezco tu visita a mi portafolio y confío en que encuentres tanto placer explorándolo como yo tuve al desarrollarlo.
      </p>
    </motion.section>
  );
}
