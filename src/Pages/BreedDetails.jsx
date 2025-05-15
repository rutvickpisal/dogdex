import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BreedDetails = () => {
  const { breedName } = useParams(); // e.g. "bulldog/french" or "akita"
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Build API URL based on whether breed has sub-breed
    const urlParts = breedName.split('/');
    let apiUrl = '';

    if (urlParts.length === 2) {
      // sub-breed case
      apiUrl = `https://dog.ceo/api/breed/${urlParts[0]}/${urlParts[1]}/images/random`;
    } else {
      // single breed
      apiUrl = `https://dog.ceo/api/breed/${breedName}/images/random`;
    }


    fetch(apiUrl)
    .then(res => {
      if (!res.ok && urlParts.length === 2) {
        // If error on sub-breed, fallback to breed only
        return fetch(`https://dog.ceo/api/breed/${urlParts[0]}/images/random`);
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      setImageUrl(data.message);
      setLoading(false);
    })
    .catch(() => {
      setImageUrl('');
      setLoading(false);
    });
  }, [breedName]);

  return (
    <Container sx={{ mt: 4 }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back
      </Button>
      <Typography variant="h4" gutterBottom>
        {breedName.replace('/', ' - ').toUpperCase()}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card sx={{ maxWidth: 500, mx: 'auto' }}>
          <CardMedia component="img" height="400" image={imageUrl} alt={breedName} />
          <CardContent>
            <Typography variant="body1">
              {/* Placeholder for future breed info like temperament, size */}
              This is where breed info can go.
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default BreedDetails;
