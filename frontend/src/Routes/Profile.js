import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Apiservice from "../Apiservice.js";
import { getAuth } from "firebase/auth";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import auth from "../firebase-config.js";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Profile() {
  const navigate = useNavigate();


  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [data, setData] = useState(null);
  var user, email;
  const auth = getAuth();
  user = auth.currentUser;
  if(user){
    email = user.email;
    console.log(email);
  }
  const getData = async () => {
    try {
      await axios
        .get(Apiservice + "/competetions")
        .then((res) => {
          setData(res.data);
        })
        .then((resData) => {});
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    
    getData();
  }, []);

  return (
    <div className="profile">
      <div className="profile-flex">
        <div className="username">
          <strong>Current user:</strong> {email}
        </div>
        <Button variant="secondary" onClick={logout}>
          Logout
        </Button>
      </div>

      <div className="cards-container">
        {data !== null &&
          user !== null &&
          data.map((val, index) => {
            if (val.authorMail === email) {
              return <Card data={val} index={index} />;
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default Profile;
