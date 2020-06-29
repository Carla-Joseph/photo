import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PhotoDetail extends Component {
  render() {
    const {
      photoData,
      listBreadCrumbText,
      listBreadCrumbLink,
      match,
    } = this.props

    if (!this.props.photoData) {
      return null
    }

    const photo = photoData.photos[match.params.id]

    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          &gt;
          <Link to={`/${listBreadCrumbLink}`}>{listBreadCrumbText}</Link>
          &gt;
          <span>{photo.title}</span>
        </div>
        <h1>{photo.title}</h1>
        <img src={photo.imageURL} width="400" />
      </div>
    )
  }
}
