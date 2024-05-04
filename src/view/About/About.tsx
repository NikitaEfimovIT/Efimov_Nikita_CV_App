import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { forwardRef } from "react";

const useStyles = makeStyles()((theme) => ({
  header: {
    color: theme.palette.primary.main,
    width: "100%",
    textAlign: "center",
    fontSize: "2rem",
    textTransform: "uppercase",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",

    padding: "0 4rem 0 4rem",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },

  text: {
    color: "white",
    fontSize: "1.5em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
  },
}));

export const About = React.forwardRef<any, any>((props, ref) => {
  const { classes } = useStyles();

  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container style={{ marginBottom: isMdDown ? "30%" : "10%", padding: isMdDown ? "0 30px" : 0 }} ref={ref}>
      <h1 className={classes.header}>About</h1>

      <section className={classes.textContainer}>
        <p className={classes.text}>
          Passionate web developer with a focus on crafting dynamic and user-friendly interfaces using React.js and a
          variety of other software and design tools. Experienced in developing adaptive web applications and thriving
          in collaborative environments. Continuously learning and adapting to new technologies to deliver elegant
          solutions. Excited to contribute to a team of professionals and continue evolving in the ever-changing world
          of front-end development.
        </p>
      </section>
    </Container>
  );
});
