import { Grid, Typography } from "@mui/material";
import React from "react";

export const EmpireGouvernement = ({ gouvernement, ethiques = [], civismes }) => (
  <Grid
    item
    xs={12}
    md={6}
    lg={4}
    container
    alignItems={"center"}
    direction={"column"}
    style={{
      border: "1px solid black"
    }}
  >
    <Grid item xs>
      <Typography>Système défensif rebelle</Typography>
    </Grid>
    <Grid item xs>
      <img src={gouvernement.image} alt={"EmpireGouvernement"} />
    </Grid>
    <Grid item xs>
      <Typography>{gouvernement.nom}</Typography>
    </Grid>
    {civismes.map((civisme, index) => (
      <Grid key={index} item xs container justifyContent={"center"} alignItems={"center"}>
        <img
          src={civisme.image}
          style={{ height: "30px", width: "30px" }}
          alt={`Civisme ${index}`}
        />
        <Typography>{civisme.nom}</Typography>
      </Grid>
    ))}
    {ethiques.map((ethique, index) => (
      <Grid key={index} item xs container justifyContent={"center"} alignItems={"center"}>
        <img
          src={ethique.image}
          style={{ height: "30px", width: "30px" }}
          alt={`Ethique ${index}`}
        />
        <Typography>{ethique.nom}</Typography>
      </Grid>
    ))}
  </Grid>
);
