import React from "react";

function Request(props) {
    const data = props.data;
    console.log(data.requests);
    return (
        data.requests.map((val, index) => {
            return(
                <>
                    <div className="request">
                <div className="request-username">{val}</div>
                <button className="request-username-button">accept</button>
                <button className="request-username-button">reject</button>
            </div>
                </>
            )
            
        })
    );
}

export default Request;