import React from 'react'

function Card(props) {
  const data =props.data;
  console.log(data);
  return (
    <div className='card'>
        <div className='card-title'>{data.title}</div>
        <div className='card-description'>{data.details}</div>
        <div className='card-description'>{data.needed}</div>
    <button className='card-request-button'>Request</button>
    </div>
  )
}

export default Card