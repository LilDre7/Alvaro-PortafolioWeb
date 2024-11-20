import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaAddressBook } from "react-icons/fa";
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
