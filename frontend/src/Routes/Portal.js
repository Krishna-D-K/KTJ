import React, { useEffect, useState } from "react";
import auth from "../firebase-config.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Card from "../Components/Card.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Apiservice from "../Apiservice.js";

function Portal() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState(null);
  const [details, setDetails] = useState("");
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  const logout= ()=>{
    signOut(auth).then(()=>{
        navigate('/signin')
    }).catch((error)=>{
        console.log(error)
    })
  }

  const getData = async () =>{
    // console.log("CKICKC");
    try{
      const fetched = await axios.get(Apiservice + "/competetions").then((res)=>{
        setData(res.data);
      }).then((resData)=>{
      })
    }catch(err){
      console.log(err);
    }
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(title, email, details, number);
    try{
      const value = axios.post(Apiservice + "/user",{
        title: title,
        details: details,
        authorMail: email,
        membersNeeded: number
      }).then((res)=>{
        console.log(res);
      }).then((response)=>{
        setData(null);
        setDetails("");
        setEmail(null);
        setNumber("");
        setTitle("");
        setTimeout(()=>{
          getData();
        }, 500)
      })
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log(user.email);
        setEmail(user.email);
  
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/signin");
      }
    });
  }, []);

  return (
    <div className="portal">
      <div className="portal-navbar">

        <Link to={"/portal"}>Portal</Link>
        <Link to={"/profile"}>Profile</Link>
        <button className="popup-navbar-button" onClick={logout}>Log out</button>
        <Popup
          modal
          trigger={<button className="popup-navbar-button"> Add event</button>}
          position="right center"
        >
          <div className="add-event-form">
            <form onSubmit={handleSubmit}>
            <input
              placeholder="Add title..."
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="event-title"
              required
            ></input>
            <input
              value={email}
              type="text"
              className="event-title"
              disabled
            ></input>
            <textarea
              placeholder="Add details..."
              type="text"
              value = {details}
              onChange = {(e)=>setDetails(e.target.value)}
              className="event-details"
              required
            ></textarea>
            <input
              placeholder="Add Number of members..."
              type="number"
              value = {number}
              onChange = {(e)=>setNumber(e.target.value)}
              className="numberOfMembers"
              required
            ></input>
            <button type="submit">Submit</button>
            </form>
          </div>
        </Popup>
      </div>
      <div className="cards-container">
        {data!==null && data.map((val, index)=>{
          return <Card data = {val} index = {index}/>
        })}
      </div>
    </div>
  );
}

export default Portal;
