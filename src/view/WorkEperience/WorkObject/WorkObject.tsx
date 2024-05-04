import React from "react";
import { Work } from "@src/view/WorkEperience/WorkExperience";
import { Chip, useTheme } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  title: {
    color: theme.palette.primary.main,
    transition: "color 0.3s ease-in-out",
    width: "fit-content",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "2em",
    margin: "0.5em 0",
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
}));

export const WorkObject: React.FC<{ work: Work }> = ({ work }) => {
  const { classes } = useStyles();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "left", maxWidth: 400 }}>
      <img src={work.img} alt={work.name} style={{ maxWidth: 400, maxHeight: 237 }}></img>
      <a className={classes.title} href={work.link} target={"_blank"}>
        {work.name}
        <ArrowOutwardOutlinedIcon />
      </a>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Chip label="React" color={"primary"} variant={"outlined"} style={{ marginRight: "10px" }} />
        <Chip label="Redux" color={"primary"} variant={"outlined"} style={{ marginRight: "10px" }} />
        <Chip label="TypeScript/JavaScript" color={"primary"} variant={"outlined"} style={{ marginRight: "10px" }} />
        <Chip label="Webpack" color={"primary"} variant={"outlined"} style={{ marginRight: "10px" }} />
        <Chip label="i18next" color={"primary"} variant={"outlined"} style={{ marginRight: "10px" }} />
        <Chip label="Axios" color={"primary"} variant={"outlined"} style={{ marginRight: "10px" }} />
        <Chip label="HTML/CSS" color={"primary"} variant={"outlined"} />
      </div>
      <p style={{ color: "white" }}>{work.description}</p>
    </div>
  );
};
