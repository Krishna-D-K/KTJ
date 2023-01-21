import React, { useState } from "react";
import auth from '../firebase-config.js'
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function Form() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  

  

  const firebaseAuthentication = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // ..
      });
  };

  return (
    <div className="form">
      <input
        type="email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
        placeholder="Your email..."
      ></input>
      <input
        type="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        placeholder="Your password"
      ></input>
      <button type="submit" onClick={firebaseAuthentication}>
        Submit
      </button>
    </div>
  );
}

export default Form;
