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
      <SectionHeading>Sobre mi</SectionHeading>
      <div className="space-y-4 text-gray-900 dark:text-white">
        <p className="font-semibold font-mono">
          Hola, soy Álvaro aunque algunos me conocen como
          <span className=""> Lil Dree</span>
          <span className="text-violet-600 dark:text-violet-300 font-semibold ml-1">
            (sí, suena más a rapero que a programador, lo sé)
          </span>
          . Mi historia con la programación comenzó el día que descubrí que
          <span className="text-violet-600 dark:text-violet-300 font-semibold"> HTML no era una enfermedad </span>. Desde
          entonces, me paso los días hablando con JavaScript y tratando de domar
          a React, Node.js y sus amigos.
        </p>

        <p className="font-semibold font-mono">
          Uno de mis
          <span className="underline"> "superpoderes" </span>
          es hacer funcionar el código a las
          <span className="font-bold"> 3 a.m.</span>, después de
          varios intentos fallidos y una buena dosis de cafeína ☕. He trabajado
          en proyectos que, al menos,
          <span className="underline"> no han explotado</span>... todavía. Pero
          hablando en serio, he desarrollado apps que han ayudado a mejorar la
          eficiencia de pequeñas empresas, y eso me llena de orgullo.
        </p>

        <p className="font-semibold font-mono">
          Mi misión en el mundo tech es
          <span className="ml-1 text-violet-600 dark:text-violet-300 font-semibold">
            crear cosas geniales sin perder la cabeza
          </span>
          . Me apasiona aprender, mejorar y, si se puede, reírme en el proceso.
          Así que, si buscas a alguien que no solo programe sino que también se
          ría de sus propios errores (¡porque, seamos honestos, no se pueden
          evitar!), aquí estoy.
        </p>
      </div>
    </motion.section>
  );
}
