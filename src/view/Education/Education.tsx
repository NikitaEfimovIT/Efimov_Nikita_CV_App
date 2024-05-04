import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { UniversityBox } from "@src/view/Education/UniversityBox/UniversityBox";

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

export interface University {
  name: string;
  photo: any;
  subjects: string[];
  course: string;
  link: string;
}

const universities: University[] = [
  {
    name: "SRH Berlin University of Applied Science",
    photo:
      "https://www.srh-berlin.de/fileadmin/_processed_/0/0/csm_srh-berlinuniversityofappliedsciences_socialsharing_orange.jpg_fbbbce3d21.jpg",
    subjects: ["Computer Science", "UI/UX Design", "Software Engineering", "Content Marketing + SEO/SEM Strategy"],
    course: "Field of study: Web Development",
    link: "https://www.srh-berlin.de/",
  },
  {
    name: 'Saint Petersburg Electrotechnical University "LETI"',
    photo: "https://etu.ru/assets/files/ru/universitet/korporativnyj-stil/2019/leti_logo_vertical-eng_bel.svg",
    subjects: [
      "Computer Science",
      "Computer Mathematics",
      "Graph Theory",
      "Algorithms and Data Structures",
      "Databases",
      "Web Development",
    ],
    course: "Field of study: Applied Math and Computer Science",
    link: "https://etu.ru/en/university/",
  },
];

export const Education = React.forwardRef<any, any>((props, ref) => {
  const { classes } = useStyles();
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container style={{ marginBottom: isMdDown ? "20%" : "10%", padding: isMdDown ? "0 30px" : 0 }} ref={ref}>
      <h1 className={classes.header}>EDUCATION</h1>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        zIndex={1}
        position={"relative"}
        flexDirection={isMdDown ? "column" : "row"}
        gap={isMdDown && 5}
      >
        {universities.map((univ) => (
          <UniversityBox university={univ} />
        ))}
      </Box>
    </Container>
  );
});
