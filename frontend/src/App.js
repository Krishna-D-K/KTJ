import './App.css';
import Form from './Components/Form';
import { useNavigate } from "react-router-dom";
import auth from './firebase-config.js'
// require("firebase/compat/auth");
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/compat/auth";

function App() {
  
  return (
    <div className="App">
      
      <Form />
    </div>
  );
}

export default App;
