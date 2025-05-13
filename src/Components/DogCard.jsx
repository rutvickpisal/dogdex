import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const DogCard = ({ image }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, boxShadow: 4 }}>
      <CardMedia component="img" height="300" image={image} alt="Random Dog" />
      <CardContent>
        <Typography variant="h6" align="center">
          Here's a good boy! 🐶
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DogCard;
