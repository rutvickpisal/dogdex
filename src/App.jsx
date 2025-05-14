import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";

function App() {
  return (
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
  );
}

export default App;
