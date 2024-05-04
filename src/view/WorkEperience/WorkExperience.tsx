import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import chipassist_screen from "@src/images/work/chipassist_screen.png";
import icsearch_screen from "@src/images/work/icsearch_screen.png";
import { NefrexFrame } from "@src/components/NefrexFrame/NefrexFrame";
import { WorkObject } from "@src/view/WorkEperience/WorkObject/WorkObject";

const useStyles = makeStyles()((theme) => ({
  root: {},
  header: {
    color: theme.palette.primary.main,
    width: "100%",
    textAlign: "center",
    fontSize: "2rem",
    textTransform: "uppercase",
  },
}));

export interface Work {
  name: string;
  img: any;
  description: string;
  link: string;
}

const workList: Work[] = [
  {
    name: "ChipAssist",
    img: chipassist_screen,
    description:
      "Marketplace for electronic components. Here users search products in a search line or in a catalog and make an order, also they can request missing components.",
    link: "https://chipassist.com",
  },
  {
    name: "ICSearch",
    img: icsearch_screen,
    description:
      "East Europe marketplace for electronic components. Here users search products in a search line or in a catalog and make an order, also they can request missing components.",
    link: "https://icsearch.ru",
  },
];

const projectList: Work[] = [];

export const WorkExperience = React.forwardRef<any, any>((props, ref) => {
  const { classes } = useStyles();
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container style={{ marginBottom: isMdDown ? "30%" : "10%", padding: isMdDown ? "0 30px" : 0 }} ref={ref}>
      <h1 className={classes.header}>WORK EXPERIENCE</h1>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        zIndex={1}
        position={"relative"}
        flexDirection={isMdDown ? "column" : "row"}
        gap={isMdDown && 5}
      >
        {workList.map((work, index) => (
          <WorkObject work={work} key={index} />
        ))}
      </Box>
    </Container>
  );
});

export default WorkExperience;
