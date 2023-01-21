import './App.css';
import Form from './Components/Form';
import { useNavigate } from "react-router-dom";
import auth from './firebase-config.js'

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function App() {
  // const navigate = useNavigate();

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
// navigate('/signin')
//     }
//   });

  return (
    <div className="App">
      <h1>Sign up</h1>
      <Form />
    </div>
  );
}

export default App;
