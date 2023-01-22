import React, { useEffect, useState } from "react";
import auth from "../firebase-config.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Card from "../Components/Card.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Apiservice from "../Apiservice.js";
// import Navbar from "../Components/Navbar.js"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Portal() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState(null);
  const [details, setDetails] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  let count = 0;

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = async () => {
    // console.log("CKICKC");
    try{
      await axios.get(Apiservice + "/competetions").then((res)=>{
        setData(res.data);
      }).then((resData)=>{
      })
    }catch(err){
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, email, details, number);
    try{
      axios.post(Apiservice + "/user",{
        title: title,
        details: details,
        authorMail: email,
        membersNeeded: number
      }).then((res)=>{

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
  };

  useEffect(() => {
    getData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setEmail(user.email);

        // ...
      } else {
        // User is signed out
        // ...
        navigate("/signin");
      }
    });
  }, [, count]);

  return (
    <div className="portal">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/portal"}>Portal</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/profile"}>Profile</Link>
              </Nav.Link>
              <Popup
                modal
                trigger={<Nav.Link>Add event</Nav.Link>}
                position="right center"
              >
                <div className="add-event-form">
                  <h2>Add event</h2>

                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        value={email}
                        placeholder="Disabled input"
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Enter details"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter number of members"
                      />
                    </Form.Group>

                    <Button variant="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Form>
                </div>
              </Popup>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 style={{"textAlign": "center"}}>All Events</h1>
      <div className="cards-container">
        {data !== null &&
          data.map((val, index) => {
            return <Card data={val} index={index} refresh = {()=>{count = count+1; console.log("refreshed", count)}}/>;
          })}
      </div>
    </div>
  );
}

export default Portal;
