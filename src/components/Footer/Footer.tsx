import { Container } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container
      style={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <h3 style={{ color: "white", fontWeight: 400, fontSize: "1em" }}>©️2024 Efimov Nikita</h3>
    </Container>
  );
};
