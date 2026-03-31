"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username,
          password
        }
      );

      login(res.data);

      router.push("/");

    } catch (err) {

      setError("Sai username hoặc password");

    }

  };

  return (

    <div className="container py-5" style={{ maxWidth: "400px" ,marginTop: "100px"}}>

      <h2 className="mb-4 text-center">Login</h2>

      <form onSubmit={handleLogin}>

        <div className="mb-3">

          <label>Username</label>

          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

        </div>

        <div className="mb-3">

          <label>Password</label>

          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

        </div>

        {error && (
          <p className="text-danger">{error}</p>
        )}

        <button className="btn btn-primary w-100">
          Login
        </button>

      </form>

    </div>

  );
}