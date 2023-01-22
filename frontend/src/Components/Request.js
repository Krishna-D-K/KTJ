import React from "react";
import Button from "react-bootstrap/Button";

function Request(props) {
  const data = props.data;
  console.log(data.requests);
  return data.requests.map((val, index) => {
    return (
      <>
        <div className="request">
          <div className="request-username"><strong>{val} </strong> wants to join</div>
          <Button variant="primary" type="submit">
                      Accept
                    </Button>
                    <Button variant="secondary" type="submit">
                      Reject
                    </Button>
        </div>
      </>
    );
  });
}

export default Request;
