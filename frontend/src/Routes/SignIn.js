import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase-config.js";
import { Link, useNavigate } from "react-router-dom";

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
    

<div className="form_wrapper">
    <div className="form_container">
      <div className="title_container">
        <h2>Sign In Form</h2>
      </div>
      <div className="row clearfix">
        <div className>
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
              <input type="email" name="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value);}} required />
            </div>
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
              <input type="password" name="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value);}} required />
            </div>
            <input className="button" type="submit" defaultValue="Register" onClick={firebaseSignin} />
            <Link to={'/'}>Sign up if you haven't registered yet</Link>
        </div>
      </div>
    </div>
</div>
    </>
    
  );
}

export default SignIn;
