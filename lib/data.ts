import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import aifit from "@/public/aifit.jpg";
import shorlink from "@/public/shortlink.jpg";
import star from "@/public/star.jpg";

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
    title: "Desarrollador Freelance",
    location: "Costa Rica, Remote",
    description:
      "Diseñé y desarrollé soluciones personalizadas para clientes, integrando Front-end & Back-end Web. Colaboré directamente con clientes para identificar necesidades y entregar soluciones a medida.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Actual",
  },
  {
    title: "Asistente de atencion al cliente & Desarrollador",
    location: "Costa Rica, Guanacaste",
    description:
      "Gestioné la base de datos de clientes, realizando actualizaciones y manteniendo registros precisos, cierre de caja, lo que me permitió desarrollar una comprensión práctica de la gestión y organización de datos.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Actual",
  },
  {
    title: "Instructor y Asesor Independiente",
    location: "Costa Rica, Remote",
    description:
      "Ofrecí asesoramiento experto en desarrollo web, orientado a clientes en la creación y mantenimiento de sitios web, lo que me permitió perfeccionar mis conocimientos técnicos y habilidades de comunicación.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "SHORT LINK APP",
    description:
      "ShortURL es una herramienta gratuita para acortar URL y generar enlaces cortos el acortador de URL permite crear un enlace acortado que facilita compartirlo.",
    tags: ["Full-Stack", "Next.js", "Prisma", "postgress"],
    imageUrl: shorlink,
    href: "https://getyourlink.vercel.app/",
  },
  {
    title: "AI FIT WORKOUT",
    description:
      "Aplicación web diseñada para brindarte información y rutinas de entrenamiento. Con una interfaz intuitiva y atractiva.",
    tags: ["Full-Stack", "React", "API", "Tailwind", "Axios, AI"],
    imageUrl: aifit,
    href: "https://aifitnow.netlify.app/",
  },
  {
    title: "STAR WARS APP",
    description:
      "Aplicación web para ver información de las peliculas de la saga de Star Wars. Con una interfaz intuitiva y atractiva.",
    tags: ["FRONT-END", "React.JS", "API", "Tailwind", "Axios"],
    imageUrl: star,
    href: "https://stars-wars-bice.vercel.app/",
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
  "NodeJs",
  "Git",
  "Tailwind",
  "Docker",
  "ExpressJs",
  "Redux",
  "Firebase",
  "PostgreSQL",
  "VueJs",
  "Framer Motion",
  "Wordpress",
  "NextJs",
  "Deno",
] as const;
