import React, { useRef } from "react";
import { makeStyles } from "tss-react/mui";
import { Animator, Illuminator, Puffs } from "@arwes/react";
import { Greetings } from "@src/view/Greetings/Greetings";
import { TopBar } from "@src/view/TopBar/TopBar";
import { About } from "@src/view/About/About";
import { Footer } from "@src/components/Footer/Footer";
import Skills from "@src/view/Skills/Skills";
import { useSelector } from "react-redux";
import WorkExperience from "@src/view/WorkEperience/WorkExperience";
import { Education } from "@src/view/Education/Education";
import ContactForm from "@src/view/ContactForm/ContactForm";
import { useMediaQuery, useTheme } from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 0,
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    zIndex: 100,
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    [theme.breakpoints.down("md")]: {
      width: "inherit",
    },
  },
  blurContainer: {
    position: "absolute",
    backdropFilter: "blur(10px)",
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    height: "100%",
    width: "100%",
  },
}));

function App() {
  const { classes } = useStyles();

  const isBlurEnable = useSelector((state: any) => state.app.blur_is_active);

  const clickedIndex = useSelector((state: any) => state.app.current_skill_number);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const educationRef = useRef(null);
  const topRef = useRef(null);
  const contactRef = useRef(null);

  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root} ref={topRef}>
      {clickedIndex && <div className={classes.blurContainer}></div>}
      <header className={classes.header}>
        <TopBar refs={[topRef, aboutRef, skillsRef, worksRef, educationRef, contactRef]} />
      </header>
      <Animator duration={{ enter: 0.5, exit: 0.5, interval: 3 }}>
        <Puffs
          color={"hsla(119,100%,50%,0.69)"}
          quantity={100}
          padding={20}
          xOffset={[50, -100]}
          yOffset={[50, -100]}
          radiusOffset={[10, 0]}
        />
        {!isMdDown && <Illuminator color={"hsla(119,100%,50%,0.20)"} size={100} />}

        <Greetings />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <WorkExperience ref={worksRef} />
        <Education ref={educationRef} />
        <ContactForm ref={contactRef} />
      </Animator>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
