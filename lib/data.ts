import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaAddressBook } from "react-icons/fa";
import aifit from "@/public/aifit.jpg";
import shorlink from "@/public/shortlink.jpg";
import ai from "@/public/gemini.webp";
import sass from "@/public/saas.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projectos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Estudiante de Platzi, Youtube, Open Bootcamp, freeCodeCamp",
    location: "Costa Rica, Latam ",
    description:
      "Estudié alrededor de 9 meses de manera autodidacta con cursos de programación, videos, proyectos, etc. Esto me añadió mucho valor para empezar con mis proyectos FreeLancer.",
    icon: React.createElement(FaAddressBook),
    date: "2022 - 2024",
  },
  {
    title: "Desarrollo Web Full-Stack y Ciencias de Computación",
    location: "Tecnico superior",
    description:
      "Mi conocimiento en ciencias de la computación también me permite resolver problemas de manera efectiva, trabajar con algoritmos y estructuras de datos eficientes y comprender cómo optimizar los sistemas.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Graduado Bootcamp(Desarrollo de Software) Academlo",
    location: "Mexico, Cuidad de Mexico",
    description:
      "Estudié alrededor de 9 meses en un bootcamp de programación para ser desarrollador Web full-stack",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Proyecto freelance",
    location: "Freelance",
    description:
      "Realice un proyecto freelance en el que trabajaba con React, Next.js, Tailwind, Framer Motion y Prisma. El proyecto fue realizado por una empresa de bienes raíces.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "AI FIT WORKOUT",
    description:
      "Aplicación web diseñada para brindarte información y rutinas de entrenamiento. Con una interfaz intuitiva y atractiva.",
    tags: ["Full-Stack", "React", "API", "Tailwind", "Axios, AI"],
    imageUrl: aifit,
    href: "https://aifitnow.netlify.app/",
  },
  {
    title: "SHORT LINK APP",
    description:
      "ShortURL es una herramienta gratuita para acortar URL y generar enlaces cortos el acortador de URL permite crear un enlace acortado que facilita compartirlo.",
    tags: ["Full-Stack", "Next.js", "Prisma", "postgress"],
    imageUrl: shorlink,
    href: "https://getyourlink.vercel.app/",
  },
  {
    title: "Gemini Clone",
    description:
      "Se trata del  modelo de lenguaje más avanzado de Google hasta el momento y el proyecto de investigación más grande en la historia de la compañía.",
    tags: ["NextJS", "API", "META", "Tailwind", "SKD"],
    imageUrl: ai,
    href: "https://gemini.vercel.ai/",
  },
  {
    title: "Sass UI",
    description:
      "Saas UI es una biblioteca de componentes React que no interfiere con tu proceso y te ayuda a crear productos SaaS intuitivos con rapidez.",
    tags: ["NextJS", "chakra", "UI", "Tailwind", "SAAS"],
    imageUrl: sass,
    href: "https://saas-ui-nextjs-landing-page.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Astro",
  "Node.js",
  "Git",
  "Tailwind",
  "Docker",
  "Express",
  "Redux",
  "Firebase",
  "PostgreSQL",
  "Python",
  "VueJs",
  "Framer Motion",
  "Wordpress",
  "NextJs"
] as const;
