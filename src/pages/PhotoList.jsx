import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const { heading, photoData, subHeading, linkPath } = this.props

    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          &gt;
          <span>{heading}</span>
        </div>
        <h1>{heading}</h1>
        <p>{subHeading} hey </p>
        {photoData &&
          photoData.photos &&
          photoData.photos.map((photo, index) => {
            return (
              <div>
                <h5>
                  <Link to={`/${linkPath}/${index}`}>{photo.title}</Link>
                </h5>
                <a href={`/${linkPath}/${index}`}>
                  <img width="200" src={photo.imageURL} />
                </a>
              </div>
            )
          })}
      </div>
    )
  }
}

export default PhotoList
