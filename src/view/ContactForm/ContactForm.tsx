import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { CircularProgress, Container, TextField, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { FrameSVGOctagon, FrameSVGUnderline } from "@arwes/react";

const useStyles = makeStyles()((theme) => ({
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: theme.palette.primary.main,
    marginBottom: "10%",
  },
  formContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: "600px",

    "[data-name=bg]": {
      color: "hsla(0,0%,0%,0)",
    },
    "[data-name=line]": {
      color: theme.palette.primary.light,
    },
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  },
  inputField: {
    color: "#fff",
  },
  header: {
    color: theme.palette.primary.main,
    width: "100%",
    textAlign: "center",
    fontSize: "2rem",
    textTransform: "uppercase",
  },
}));

interface FormState {
  from_name: string;
  from_email: string;
  message: string;
}

const defaultFormState = (): FormState => ({
  from_email: "",
  from_name: "",
  message: "",
});

const Contacts = React.forwardRef<any, any>((props, ref) => {
  const formRef = useRef(null);

  const { classes } = useStyles();

  const [sending, setSending] = useState(false);

  const [formState, setFormState] = useState<FormState>(defaultFormState());

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_qd0fgkr",
        "template_4x6fw8s",
        {
          from_name: formState.from_name,
          from_email: formState.from_email,
          message: formState.message,
        },
        "MIFDt1uvnUqGtT18s",
      )
      .then(
        (result) => {
          console.log(result.text);
          // @ts-ignore
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <div className={classes.container} ref={ref}>
      <h1 className={classes.header}>CONTACT ME:</h1>

      <form ref={formRef} onSubmit={sendEmail} className={classes.formContainer}>
        <TextField
          size={"medium"}
          onChange={onChangeHandler}
          className={classes.inputField}
          style={{ marginTop: "1em" }}
          required
          type="text"
          name="from_name"
          label={"Name"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          size={"medium"}
          onChange={onChangeHandler}
          className={classes.inputField}
          required
          type="text"
          name="from_email"
          label={"Email"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          onChange={onChangeHandler}
          className={classes.inputField}
          required
          name="message"
          multiline
          rows={4}
          label={"Your message"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant={"outlined"}
          color={"primary"}
          style={{ marginBottom: "1em", width: "250px" }}
          disabled={sending}
          type={"submit"}
          size={"large"}
        >
          {sending && <CircularProgress disableShrink />}
          Send
        </Button>
      </form>
    </div>
  );
});

export default Contacts;
