import { Grid, Typography } from "@mui/material";
import React from "react";

export const EmpireEspece = ({espece, traits = []}) => (
  <Grid
    item
    xs={12}
    md={6}
    lg={4}
    container
    alignItems={'center'}
    direction={'column'}
    style={{
      border: '1px solid black',
    }}
  >
    <Grid
      item
      xs={'auto'}
      style={{
        border: '1px solid black',
      }}
    >
      <img
        src={espece.image}
        alt={espece?.nom}
        style={{
          maxWidth: '50%',
          maxHeight: '100%',
        }}
      />
    </Grid>
    <Grid item xs>
      <Typography align={'center'}>Humain</Typography>
    </Grid>
    {traits.map((trait, index) => (
      <Grid key={index} item xs container justifyContent={"center"} alignItems={"center"}>
        <img
          src={trait.image}
          style={{ height: "30px", width: "30px" }}
          alt={`Trait ${index}`}
        />
        <Typography>{trait.nom}</Typography>
      </Grid>
    ))}
  </Grid>
)
