import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { useAuth } from "./contexts/AuthContext";
import BreedsList from "./Pages/BreedList";
import BreedDetails from "./Pages/BreedDetails";

function App() {
  const {user} = useAuth();
  return (
    <>
    {user && <Navbar />}
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/breeds" element={<PrivateRoute><BreedsList /></PrivateRoute>} />
      <Route path="/breeds/:breedName" element={<PrivateRoute><BreedDetails /></PrivateRoute>} />
      <Route path="/breeds/:breedName/:origin" element={<PrivateRoute><BreedDetails /></PrivateRoute>} />

    </Routes>
    </>
  );
}

export default App;
