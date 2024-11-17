import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      {isLogin ? <Login /> : <Register />}
      <p style={{ marginTop: "20px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{
            color: "blue",
            textDecoration: "underline",
            border: "none",
            background: "none",
          }}
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
