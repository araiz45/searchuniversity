import React from 'react'

function Card(props) {
   const { country, name, province, url } = props
  return (
    <><div className="card col-3" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">State: {country}</h6>
      <a href={url} className="card-link btn btn-success text-white" target='_blank'>Visit Website</a>
    </div>
  </div></>
  )
}

export default Card