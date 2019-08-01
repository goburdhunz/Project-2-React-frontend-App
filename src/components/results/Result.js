import React from 'react'

const Result = ({image, title, description}) => {
  return (
    <div className="card cardinfo">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title}/>
        </figure>
      </div>
      <div className="card-header">
        <div className="card-header-title">{title}</div>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  )
}


export default Result
