import React, { useEffect, useState } from "react";
import auth from "../firebase-config.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Card from "../Components/Card.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Apiservice from "../Apiservice.js";

function Portal() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;

      // ...
    } else {
      // User is signed out
      // ...
      navigate("/signin");
    }
  });

  const logout= ()=>{
    signOut(auth).then(()=>{
        navigate('/signin')
    }).catch((error)=>{
        console.log(error)
    })
  }

  const getData = async () =>{
    console.log("CKICKC");
    try{
      const fetched = await axios.get(Apiservice + "/competetions").then((res)=>{
        setData(res.data);
      }).then((resData)=>{
      })
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getData();
  }, []);

  return (
    <div className="portal">
      <div className="portal-navbar">









        <Link to={"/portal"}>Portal</Link>
        <button className="popup-navbar-button" onClick={logout}>Log out</button>
        <Popup
          modal
          trigger={<button className="popup-navbar-button"> Add event</button>}
          position="right center"
        >
          <div className="add-event-form">
            <input
              required
              placeholder="Add title..."
              type="text"
              className="event-title"
            ></input>
            <textarea
              required
              placeholder="Add details..."
              type="text"
              className="event-details"
            ></textarea>
            <input
              required
              placeholder="Add Number of members..."
              type="number"
              className="numberOfMembers"
            ></input>
            <button>Submit</button>
          </div>
        </Popup>
      </div>
      <div className="portal-cards-container">
        {data!==null && data.map((val, index)=>{
          return <Card data = {val} index = {index}/>
        })}
      </div>
    </div>
  );
}

export default Portal;
