import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Apiservice from "../Apiservice.js";
import { getAuth } from "firebase/auth";
import axios from "axios";

function Profile() {
  const [data, setData] = useState(null);
  var user, email;
  const auth = getAuth();
  user = auth.currentUser;
  if(user){
    email = user.email;
    // console.log(email);
  }
  const getData = async () => {
    try {
      const fetched = await axios
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
      <div className="username">{email}</div>
      <div className="cards-container">
        {data !== null && user!==null &&
          data.map((val, index) => {
            if(val.authorMail===email){
              return <Card data={val} index={index} />
            }
            else{
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default Profile;
