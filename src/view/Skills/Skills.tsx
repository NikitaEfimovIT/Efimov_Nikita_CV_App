import { Container, Grid, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import css from "@src/images/skills/css-3.svg";
import html from "@src/images/skills/html-1.svg";
import js from "@src/images/skills/javascript-39404.svg";
import nodejs from "@src/images/skills/nodejs-icon.svg";
import react from "@src/images/skills/react-2.svg";
import redux from "@src/images/skills/redux.svg";
import ts from "@src/images/skills/ts-logo-256.svg";
import webpack from "@src/images/skills/webpack-icon.svg";
import SkillBox from "@src/view/Skills/SkillBox/SkillBox";
import gsap from "gsap";

const useStyles = makeStyles()((theme) => ({
  root: {},
  header: {
    color: theme.palette.primary.main,
    width: "100%",
    textAlign: "center",
    fontSize: "2rem",
    textTransform: "uppercase",
  },
  grid: {
    transition: "height 1s ease-in-out",
  },
}));

export interface Skill {
  name: string;
  img: any;
  description: string;
}

const skills: Skill[] = [
  {
    name: "React",
    img: react,
    description:
      "I use React because it allows me to build interactive and dynamic user interfaces for web applications efficiently. Its component-based architecture and virtual DOM make it easier to manage complex UIs.",
  },
  {
    name: "Redux",
    img: redux,
    description:
      "Redux helps me manage the application state in a predictable way, especially in large-scale applications with complex data flow. It provides a centralized store and enables me to maintain a consistent state across the application.",
  },
  {
    name: "TypeScript",
    img: ts,
    description:
      "I opt for TypeScript because it adds static typing to JavaScript, which helps me catch errors during development and improves code readability and maintainability. Its type checking feature ensures a more robust codebase.",
  },
  {
    name: "Webpack",
    img: webpack,
    description:
      "Webpack is a module bundler that helps me manage dependencies, optimize assets, and bundle resources for web applications. It simplifies the development process by automating tasks like code splitting, minification, and asset management.",
  },
  {
    name: "CSS",
    img: css,
    description: "I use CSS to style and design web pages, making them visually appealing and user-friendly.",
  },
  {
    name: "HTML",
    img: html,
    description:
      "HTML forms the structure of web pages, providing a markup language to define the content and layout. It serves as the foundation for building web applications and ensures compatibility across different browsers and devices.",
  },
  {
    name: "JavaScript",
    img: js,
    description:
      "JavaScript is the backbone of web development, allowing me to add interactivity, animations, and dynamic content to web pages. It runs on the client-side and enables seamless interaction with users.",
  },
  {
    name: "Node JS",
    img: nodejs,
    description:
      "Node.js allows me to run JavaScript on the server-side, enabling me to build scalable and efficient web applications. Its event-driven architecture and non-blocking I/O operations make it suitable for handling concurrent requests.",
  },
];

export const Skills = React.forwardRef<any, any>((props, ref) => {
  const { classes } = useStyles();

  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container style={{ marginBottom: isMdDown ? "30%" : "10%" }} ref={ref}>
      <h1 className={classes.header}>Skills</h1>
      <Grid container spacing={2} className={classes.grid} justifyContent={isMdDown && "center"}>
        {skills.map((skill, index) => {
          return (
            <Grid justifyContent={"center"} display={"flex"} key={index + 1} id={skill.name} item md={3} sm={12}>
              <SkillBox skill={skill} index={index + 1} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
});

export default Skills;
