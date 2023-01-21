import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase-config.js";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

const firebaseSignin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


  return (
    <>
    <h1>Sign in</h1>
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
      <button type="submit" onClick={firebaseSignin}>
        Submit
      </button>
    </div>
    </>
    
  );
}

export default SignIn;
