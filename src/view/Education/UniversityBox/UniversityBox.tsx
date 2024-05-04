import { University } from "@src/view/Education/Education";
import React from "react";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { Chip } from "@mui/material";
import { useStyles } from "@src/view/WorkEperience/WorkObject/WorkObject";

export const UniversityBox: React.FC<{ university: University }> = ({ university }) => {
  const { classes } = useStyles();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "left", maxWidth: 400 }}>
      <img
        src={university.photo}
        alt={university.name}
        style={{ width: "100%", height: 237, alignSelf: "baseline", objectFit: "cover" }}
      ></img>
      <a className={classes.title} href={university.link} target={"_blank"}>
        {university.name}
        <ArrowOutwardOutlinedIcon />
      </a>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {university.subjects.map((subject) => (
          <Chip label={subject} variant={"outlined"} color={"primary"}></Chip>
        ))}
      </div>
      <p style={{ color: "white" }}>{university.course}</p>
    </div>
  );
};
