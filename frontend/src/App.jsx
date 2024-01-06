import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import Register from "./Pages/Register";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
