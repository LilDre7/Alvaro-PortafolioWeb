import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecommerce.jpg";
import weatherAppImg from "@/public/weather.jpg";
import gameCart from "@/public/gamecart.jpg";

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
    title: "Graduado Bootcamp Academlo",
    location: "Mexico, Cuidad de Mexico",
    description:
      "Estudié alrededor de 9 meses en un bootcamp de programación interesante.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Estudiante de Platzi, Youtube, Open Bootcamp, freeCodeCamp",
    location: "Costa Rica, Latam ",
    description:
      "Estudié alrededor de 9 meses de manera autodidacta con cursos de programación, videos, proyectos, etc. Esto me añadió mucho valor para empezar con mis proyectos FreeLancer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Proyecto freelance",
    location: "Freelance",
    description:
      "Realice un proyecto freelance en el que trabajaba con React, Next.js, Tailwind, Framer Motion y Prisma. El proyecto fue realizado en un tiempo de 4 días. El proyecto fue realizado por una empresa de bienes raíces.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Weather Apps",
    description:
      "Aplicación web diseñada para brindarte información meteorológica precisa y fácil de entender. Con una interfaz intuitiva y atractiva.",
    tags: ["React", "API", "Tailwind", "Axios"],
    imageUrl: weatherAppImg,
    href: "https://cualestuclima.netlify.app/"
  },
  {
    title: "AgilityMatch",
    description:
      "AgilityMatch es una emocionante aplicación que pondrá a prueba y mejorará tu agilidad mental a través de un divertido juego de cartas.",
    tags: ["React", "Tailwind", "CSS" , "LocalStorage"],
    imageUrl: gameCart,
    href: "https://lildreegame.netlify.app/"
  },
  {
    title: "Ecommerce tecnoPhone",
    description:
      "Un E-commerce Desarrollado en Aproximadamente 48 Horas con Funcionalidades de Inicio de Sesión, Compras y Carrito. Aquí Exhibo Mi Destreza en el Front-End.",
    tags: ["React", "API", "REDUX", "Tailwind", "REACT TOOKITS"],
    imageUrl: ecommerceImg,
    href: "https://lilecommerce.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
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
] as const;
