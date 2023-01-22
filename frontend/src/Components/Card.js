import axios from "axios";
import React from "react";
import Apiservice from "../Apiservice";
import { getAuth } from "firebase/auth";
import Request from "./Request";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";

function Card(props) {
  const auth = getAuth();
  const user = auth.currentUser;
  var email;
  if (user) {
    email = user.email;
    // console.log(email);
  }
  const data = props.data;
  // console.log(data._id);
  const createRequest = (_id) => {
    // console.log(_id);
    try {
      axios.patch(Apiservice + "/user/" + _id, {
        requests: email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <div className="card-title">{data.title}</div>
      <hr></hr>
      <div className="card-description">{data.details}</div>
      <div className="card-description">Made by: {data.authorMail}</div>
      <div className="card-description">
        Total Members Needed: {data.membersNeeded}
      </div>

      {email !== data.authorMail && (
        <Button
          variant="primary"
          className="card-request-button"
          onClick={() => {
            createRequest(data._id);
          }}
        >
          Request
        </Button>
      )}
      {email === data.authorMail && (
        <Popup modal trigger={<Button>View requests</Button>}>
          <div className="requests-popup">
            <h2>Your requests</h2>
          <Request data={data}/>
          </div>
          
        </Popup>
      )}
    </div>
  );
}

export default Card;
