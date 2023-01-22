import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Apiservice from "../Apiservice";
import { useNavigate } from "react-router";
import Popup from "reactjs-popup";

function Request(props) {
    const navigate = useNavigate()
    const [message, setMessage] = useState(null);
  const data = props.data;
  // console.log(data);
  const acceptRequest = async (val) => {
    try {
      const member = await axios
        .post(Apiservice + "/user/" + data._id, {
          members: val,
        })
        .then((res) => {
            setMessage("Request Accepted Successfully!!")
            navigate("/portal");
        })
        .then((resData) => {});
      console.log(member);
    } catch (err) {
      console.log(err);
    }
  };

  const rejectRequest = async (val) => {
    try {
      const member = await axios
        .delete(Apiservice + "/user/" + data._id, {
          members: val,
        })
        .then((res) => {
            setMessage("Request Rejected Successfully!!")
            navigate("/portal")})
        .then((resData) => {});
      console.log(member);
    } catch (err) {
      console.log(err);
    }
  };
  return data.requests.map((val, index) => {
    return (
      <>
        <div className="request">
          <div className="request-username"><strong>{val} </strong> wants to join</div>
          <Button variant="primary" type="submit" onClick={()=>acceptRequest(val)}>
                      Accept
                    </Button>
                    
                    <Button variant="secondary" type="submit" onClick={()=>rejectRequest(val)}>
                      Reject
                    </Button>
        </div>
      </>
    );
  });
}

export default Request;
