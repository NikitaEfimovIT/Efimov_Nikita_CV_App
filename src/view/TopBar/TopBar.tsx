import { Button, Container, SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { UnderlineFrame } from "@src/components/UnderlineFrame/UnderlineFrame";
import long_logo from "@src/images/long_logo.svg";
import { Add, ArrowRight, ArrowRightAlt, Menu, SwipeRightAlt } from "@mui/icons-material";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    flexDirection: "row",
    backdropFilter: "blur(22px)",
    maxWidth: "none!important",
  },

  logo: {
    width: "200px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  linksContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "end",
  },

  drawer: {
    backgroundColor: "#05ff0015",
    backdropFilter: "blur(5px)",
    borderLeft: "1px solid #05ff00",
  },
}));

export const TopBar: React.FC<{ refs: any }> = ({ refs }) => {
  const { classes } = useStyles();

  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const handleClick = (ref: any, block: any = "center") => {
    if (open) {
      setOpen(false);
    }
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: block,
    });
  };
  return (
    <Container className={classes.root}>
      <img className={classes.logo} alt={"logo"} src={long_logo} onClick={() => handleClick(refs[0], "start")} />
      {isMdDown ? (
        <>
          {!open && (
            <Button onClick={() => setOpen((prevState) => !prevState)}>
              <Menu fontSize={"large"} />
            </Button>
          )}
          <SwipeableDrawer anchor={"right"} open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
            <Button
              style={{ display: "flex", justifyContent: "flex-start" }}
              onClick={() => setOpen((prevState) => !prevState)}
            >
              <ArrowRightAlt fontSize={"large"} />
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
                gap: "12px",
              }}
            >
              <UnderlineFrame title={"About me"} handleClick={() => handleClick(refs[1])} />
              <UnderlineFrame title={"Skills"} handleClick={() => handleClick(refs[2])} />
              <UnderlineFrame title={"Experience"} handleClick={() => handleClick(refs[3])} />
              <UnderlineFrame title={"Education"} handleClick={() => handleClick(refs[4])} />
              <UnderlineFrame title={"Contact"} handleClick={() => handleClick(refs[5])} />
            </div>
          </SwipeableDrawer>
        </>
      ) : (
        <div className={classes.linksContainer}>
          <UnderlineFrame title={"About me"} handleClick={() => handleClick(refs[1])} />
          <UnderlineFrame title={"Skills"} handleClick={() => handleClick(refs[2])} />
          <UnderlineFrame title={"Experience"} handleClick={() => handleClick(refs[3])} />
          <UnderlineFrame title={"Education"} handleClick={() => handleClick(refs[4])} />
          <UnderlineFrame title={"Contact"} handleClick={() => handleClick(refs[5])} />
        </div>
      )}
    </Container>
  );
};
