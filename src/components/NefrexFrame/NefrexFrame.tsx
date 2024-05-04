import React, { ReactElement, useEffect, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Animator, FrameSVGNefrex, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { Work } from "@src/view/WorkEperience/WorkExperience";

const useStyles = makeStyles()((theme) => ({
  container: {
    position: "relative",
    height: "100%",

    "[data-name=bg]": {
      color: "hsl(0, 0%, 0%)",
    },
    "[data-name=line]": {
      color: theme.palette.text.primary,
    },
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
  root: {
    cursor: "pointer",
    marginRight: "1em",
  },
  title: {
    fontWeight: 600,
    fontSize: "1.5em",
    display: "flex",
    alignItems: "end",
    height: "100%",
  },
}));
const Frame: React.FC<{ work: Work }> = (props: { work: Work }): ReactElement => {
  const { work } = props;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <FrameSVGNefrex elementRef={svgRef} onRender={onRender} strokeWidth={1} />
      <img src={work.img} alt={"chipassist"} width={"50%"} />
      <p className={classes.title}>{work.name}</p>
      <span>{work.description}</span>
    </div>
  );
};
export const NefrexFrame: React.FC<{ work: Work }> = (props: { work: Work }) => {
  const [active, setActive] = useState(false);
  const { classes } = useStyles();

  const onHover = () => {
    setActive(true);
  };

  const onUnHover = () => {
    setActive(false);
  };

  return (
    <div onMouseEnter={onHover} onMouseLeave={onUnHover} className={classes.root}>
      <Animator active={active}>
        <Frame work={props.work} />
      </Animator>
    </div>
  );
};
