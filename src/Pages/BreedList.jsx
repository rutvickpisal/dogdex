import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, CircularProgress, Card, CardActionArea, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BreedsList = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const breedArray = [];
        for (const breed in data.message) {
          if (data.message[breed].length > 0) {
            data.message[breed].forEach((sub) => breedArray.push(`${breed}/${sub}`));
          } else {
            breedArray.push(breed);
          }
        }
        setBreeds(breedArray);
        setLoading(false);
      });
  }, []);

  const handleClick = (breed) => {
    navigate(`/breeds/${breed}`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Dog Breeds
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {breeds.map((breed) => (
            <Grid item xs={12} sm={6} md={4} key={breed}>
              <Card>
                <CardActionArea onClick={() => handleClick(breed)}>
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {breed.replace('/', ' - ')}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BreedsList;
