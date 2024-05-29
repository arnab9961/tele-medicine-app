import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import App from "../App";
import { Link } from 'react-router-dom';
function Signin() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {value ? (
        <link rel="stylesheet" href="App.jsx" />
      ) : (
        <div className="card w-96 bg-white shadow-xl p-5">
          <div className="card-body">
            <h2 className="card-title text-center">Sign In</h2>
            <button 
              onClick={handleClick} 
              className="btn btn-primary w-full mt-4"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin;
