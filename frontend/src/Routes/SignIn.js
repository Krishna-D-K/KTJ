import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase-config.js";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate()
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      navigate('/portal')
      // ...
    } else {
      // User is signed out
      // ...
     
    }
  });

const firebaseSignin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate('/portal')
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
        required
        onChange={(e) => {
          setemail(e.target.value);
        }}
        placeholder="Your email..."
      ></input>
      <input
        type="password"
        required
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
