import React, { useState, useEffect } from "react";
import { getRandomDog } from "../API/dogApi";
import DogCard from "../Components/DogCard";
import { Box, Button, Container, Typography } from "@mui/material";
import LogoutButton from "../Components/Logout";

const Home = () => {
  const [dogImage, setDogImage] = useState("");

  const fetchDog = async () => {
    const img = await getRandomDog();
    setDogImage(img);
  };

  useEffect(() => {
    fetchDog(); // load once at start
  }, []);

  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <LogoutButton />
      </Box> */}
      <Typography variant="h4" gutterBottom>
        🐾 Dogdex - Discover a New Dog Every Time!
      </Typography>

      {dogImage && <DogCard image={dogImage} />}

      <Button variant="contained" sx={{ mt: 3 }} onClick={fetchDog}>
        Show Me Another Dog 🐕
      </Button>
    </Container>
  );
};

export default Home;
