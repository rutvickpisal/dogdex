import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { useAuth } from "./contexts/AuthContext";

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
    </Routes>
    </>
  );
}

export default App;
