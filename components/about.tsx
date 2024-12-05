"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import TextRevealByWord from "./ui/text-reveal";

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
      <SectionHeading><span className="aboutHero">Sobre Mi</span></SectionHeading>
      <div className="space-y-4 text-gray-900 dark:text-white">
        <p className="mb-3 mx-3 sm:mx-0 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
          Hola 🙋🏽 , soy Álvaro aunque algunos me conocen como Lil Dree (sí,
          suena más a rapero que a programador, lo sé). Mi historia con la
          programación comenzó el día que descubrí que HTML no era una
          enfermedad. Desde entonces, me paso los días hablando con JavaScript y
          tratando de domar a React, Node.js y sus amigos. Uno de mis
          "superpoderes" es hacer funcionar el código a las 3 a.m., después de
          varios intentos fallidos y una buena dosis de cafeína ☕. He trabajado
          en proyectos que, al menos, no han explotado... todavía.{" "}
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Pero hablando en serio, he desarrollado apps que han ayudado a mejorar
          la eficiencia de pequeñas empresas, y eso me llena de orgullo. Mi
          misión en el mundo tech es crear cosas geniales sin perder la cabeza..
        </p>
      </div>
    </motion.section>
  );
}
