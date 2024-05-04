import { Animator, FrameSVGLines, useFrameSVGAssemblingAnimation } from "@arwes/react";
import React from "react";
import { ReactElement, useEffect, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  frame: {
    position: "relative",
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",

    "[data-name=bg]": {
      color: "hsla(100,100%,10%,0.8)",
      backdropFilter: "blur(5px)",
    },
    "[data-name=line]": {
      color: theme.palette.text.primary,
    },
  },
}));

const Frame: React.FC<{ text: string }> = (props: { text: string }): ReactElement => {
  const { text } = props;
  const { classes } = useStyles();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div className={classes.frame}>
      <FrameSVGLines elementRef={svgRef} onRender={onRender} />
      <p style={{ margin: "1em" }}>{text}</p>
    </div>
  );
};

export const LineFrame: React.FC<{ text: string; isClicked: boolean }> = ({ text, isClicked }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    return () => setActive(false);
  }, []);

  return (
    <Animator active={active}>
      <Frame text={text} />
    </Animator>
  );
};
