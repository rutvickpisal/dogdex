import axios from "axios";

export const getRandomDog = async () => {
  try {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    return res.data.message; // This is the image URL
  } catch (err) {
    console.error("Error fetching dog:", err);
    return null;
  }
};
