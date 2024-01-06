import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name;
  let value;
  const handleDataChange = async (e) => {
    name = e.target.name;
    value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = registerData;
      const response = await axios.post("/api/user/register", {
        name,
        email,
        password,
      });
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "70vh" }}
    >
      <div className="mt-4 ">
        <h1 className="text-4xl text-center mb-6 font-bold font-sans">
          Register
        </h1>
        <form action="" className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={registerData.name}
            name="name"
            onChange={handleDataChange}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={registerData.email}
            name="email"
            onChange={handleDataChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={registerData.password}
            onChange={handleDataChange}
          />
          <button className="primary mt-2">register</button>
          <div className="text-center py-2 text-gray-600">
            Already a member?{" "}
            <Link to="/register" className="underline text-black">
              Login{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
