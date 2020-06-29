import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const { heading, photoData, subHeading, linkPath } = this.props

    return (
      <div>
        <div>
          <Link to="/">Home</Link> / <span>{heading}</span>
        </div>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
        <div className="allPhotos">
          {photoData &&
            photoData.photos &&
            photoData.photos.map((photo, index) => {
              return (
                <div className="photo">
                  <a href={`/${linkPath}/${index}`}>
                    <img width="100%" src={photo.imageURL} />
                  </a>
                  <p>
                    <Link to={`/${linkPath}/${index}`}>{photo.title}</Link>
                  </p>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default PhotoList
