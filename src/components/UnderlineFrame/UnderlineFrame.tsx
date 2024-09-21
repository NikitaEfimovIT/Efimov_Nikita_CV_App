import { Animator, FrameSVGOctagon, FrameSVGUnderline, useFrameSVGAssemblingAnimation } from "@arwes/react";
import React, { ReactElement, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",

    "[data-name=bg]": {
      color: "hsla(0,0%,0%,0)",
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
    width: 200,
    height: 100,
    cursor: "pointer",
    marginRight: "1em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 50,
    },
    [theme.breakpoints.up(1050)]: {
      // width: "100%"
      height: 50,
      width: 150,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: "1.5em",
    display: "flex",
    alignItems: "end",
    height: "100%",
  },
}));

const Frame: React.FC<{ title: string }> = (props: { title: string }): ReactElement => {
  const { title } = props;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <FrameSVGUnderline elementRef={svgRef} onRender={onRender} strokeWidth={1} />
      <span className={classes.title}>{title}</span>
    </div>
  );
};
export const UnderlineFrame: React.FC<{ title: string; handleClick: any }> = ({ title, handleClick }) => {
  const [active, setActive] = useState(false);
  const { classes } = useStyles();
  const onHover = () => {
    setActive(true);
  };

  const onUnHover = () => {
    setActive(false);
  };

  return (
    <div onMouseEnter={onHover} onMouseLeave={onUnHover} className={classes.root} onClick={handleClick}>
      <Animator active={active}>
        <Frame title={title} />
      </Animator>
    </div>
  );
};
