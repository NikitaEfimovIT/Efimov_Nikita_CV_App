import { Box, Container, useTheme } from "@mui/material";
import React, { useRef } from "react";
import { makeStyles } from "tss-react/mui";
import Photo from "@src/images/photo.svg";
import { FrameSVGCorners, FrameSVGOctagon, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { Typewriter } from "react-simple-typewriter";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "calc(100vh + 45px)",
      marginTop: 45,
    },
  },
  imgContainer: {
    position: "relative",
    width: "17.80581rem",
    height: "19.79419rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      width: "calc(17.80581rem*0.7)",
      height: "calc(19.79419rem*0.7)",
    },
  },
  img: {
    width: "90%",
    height: "100%",
    flexShrink: 0,
  },
  textContainer: {
    position: "relative",
    width: "17.80581rem",
    height: "120px",
    display: "flex",
    justifyContent: "start",

    [theme.breakpoints.down("md")]: {
      width: "calc(17.80581rem*0.7)",
      height: "calc(120*0.7)",
    },
  },
  greetingsText: {
    color: theme.palette.text.primary,
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    width: "100%",
    height: "120px",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3em",
    },
  },
  frame: {
    position: "absolute",

    // width: "17.80581rem!important",
    // height: "19.79419rem!important",

    "[data-name=bg]": {
      color: "hsl(0,0%,0%)",
    },
    "[data-name=line]": {
      color: theme.palette.text.primary,
    },
  },
}));

// const Frame = (): ReactElement => {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
//
//   return (
//     <div
//       css={{
//         position: "relative",
//         width: 300,
//         height: 150,
//
//         "[data-name=bg]": {
//           color: "hsl(180, 75%, 10%)",
//         },
//         "[data-name=line]": {
//           color: "hsl(180, 75%, 50%)",
//         },
//       }}
//     >
//       <FrameSVGCorners elementRef={svgRef} onRender={onRender} />
//     </div>
//   );
// };

export const Greetings = () => {
  const { classes } = useStyles();

  const theme = useTheme();
  const isMdDown = theme.breakpoints.down("md");

  return (
    <Container className={classes.root}>
      <Box display={"flex"} flexDirection={"column"} maxWidth={"300px"} alignItems={"center"}>
        <div className={classes.imgContainer}>
          <FrameSVGCorners className={classes.frame} cornerLength={10} strokeWidth={2} />
          <img src={Photo} alt={"logo"} className={classes.img} />
        </div>

        <div className={classes.textContainer}>
          <span className={classes.greetingsText}>
            <Typewriter
              words={["Hi! I am Nikita, and I am a frontend developer"]}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </div>
      </Box>
    </Container>
  );
};
