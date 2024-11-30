import React, { useEffect, useRef, useState } from "react";
import { Skill } from "@src/view/Skills/Skills";
import { makeStyles } from "tss-react/mui";
import { useDispatch, useSelector } from "react-redux";
import { changeBlur } from "@src/store/appActions";
import { LineFrame } from "@src/components/LineFrame/LineFrame";
import { useMediaQuery, useTheme } from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: "1em",
    minWidth: "96.13px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    position: "relative",
    backgroundColor: "transparent",
    maxWidth: 500,
    zIndex: 1,
    transition: "box-shadow 0.4s ease-in-out",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "inset 0px 32px 75px -15px rgba(95,240,0,0.68);",
      [theme.breakpoints.down("md")]: {
        boxShadow: "none",
      },
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 200,
  },

  popupContainer: {},
}));

export const SkillBox: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const dispatch = useDispatch<any>();
  // const [clicked, setClicked] = useState(false);
  const clickedIndex = useSelector((state: any) => state.app.current_skill_number);

  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const ref = useRef(null);

  useEffect(() => {
    if (ref) ref.current.style.zIndex = clickedIndex === index ? 3 : 0;
  }, [clickedIndex]);

  // const onIconClick = (e: any) => {
  //   dispatch(changeBlur(index));
  //   setClicked((prevState) => !prevState);
  // };

  const { classes } = useStyles();
  return (
    <div
      className={classes.root}
      style={isMdDown ? { height: "145px" } : {}}
      // onClick={(e: any) => (isMdDown ? null : onIconClick(e))}
      ref={ref}
    >
      <div className={classes.textContainer}>
        <img alt={skill.name} src={skill.img} style={isMdDown ? { height: "60px" } : { height: 60 }}></img>
        <h3 style={{ textAlign: "center" }}>{skill.name}</h3>
      </div>
      {/*{clickedIndex === index && (*/}
      {/*  <div style={{ position: "absolute", top: "100%", width: "calc(100% + 200px)" }}>*/}
      {/*    <LineFrame text={skill.description} isClicked={clicked} />*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default SkillBox;
