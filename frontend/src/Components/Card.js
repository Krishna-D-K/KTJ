import axios from "axios";
import React, { useState } from "react";
import Apiservice from "../Apiservice";
import { getAuth } from "firebase/auth";
import Request from "./Request";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import DeleteIcon from '@mui/icons-material/Delete';

function Card(props) {
  const data = props.data;
  const [button, setbutton] = useState('Request');
  const deleteEvent = async(_id) =>{
    try{
      await axios.delete(Apiservice+"/user/"+ _id ).then((res)=>{
        window.location.reload();
      })
    }catch(err){
      console.log(err);
    }
  }
  const auth = getAuth();
  const user = auth.currentUser;
  let state= true; 
  var email;
  if (user) {
    email = user.email;
    // console.log(email);
  }

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
  if(email !== data.authorMail){
    return (
      <div className="card">
        <div className="card-title">{data.title}</div>
        <hr></hr>
        <div className="card-description">{data.details}</div>
        <div className="card-description">Made by: {data.authorMail}</div>
        <div className="card-description">
          Total Members Needed: {data.membersNeeded - data.members.length }
        </div>
  
        
          <Button
            variant="primary"
            className="card-request-button"
            onClick={() => {
              createRequest(data._id);
              setbutton("Requested");
              
            }}
            disabled={(button==="Requested")}
          >
            {button}
          </Button>
      </div>
    );
  }
  else{
    return (
      <div className="card">
        <div style={{"display": "flex", "alignItems": "center"}}>
        <div className="card-title">{data.title}</div> <DeleteIcon style={{"marginLeft": "auto", "cursor": "pointer", "fontSize": "1.6rem"}} onClick={()=>{
          deleteEvent(data._id);
        }} />
        </div>
        <hr></hr>
        <div className="card-description">{data.details}</div>
        <div className="card-description">Made by: {data.authorMail}</div>
        <div className="card-description">
          Total Members Needed: {data.membersNeeded - data.members.length }
        </div>

          <Popup modal trigger={<Button>View details</Button>}>
            <div className="requests-popup">
              <h2>Details</h2> <hr />
              <h4 style={{"textAlign": "center"}}><strong>Requests</strong></h4>
            <Request data={data}/>
              <h4 style={{"textAlign": "center"}}><strong>Current Members</strong></h4>
              <div>
              {data.members.map((val, key)=>{
                return <ul style={{"textAlign": "center"}}><strong>{val}</strong></ul>
              })}
              </div>
            </div>
            
          </Popup>

      </div>
    );
  }
  
}

export default Card;
