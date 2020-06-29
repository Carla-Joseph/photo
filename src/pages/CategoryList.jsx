import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <section className="body ">
        <section className="pandas">
          <h2 class="text ml-4 mt-4">
            <Link to="/pandas">Panda Bears</Link>
          </h2>
          <p class="text-left m-4">
            Pandas are bears native to south-central China, and are objectively
            the cutest animals on earth.
          </p>
          <figure className="pandaImage mb-0">
            <img src="/images/baby_panda.jpg" width="100%" height="100%" />
          </figure>
        </section>

        <section className="paintings">
          <h2 class="text ml-4 mt-4 mb-0">
            <Link to="/paintings">Miniature paintings</Link>
          </h2>
          <p class="text-left m-4">
            I enjoy painting miniatures from board games. I've been painting
            since early 2018, here's some of my work.
          </p>
          <figure className="paintingImage mb-0">
            <img src="/images/city_of_kings.jpg" width="100%" />
          </figure>
        </section>
      </section>
    )
  }
}

export default HomePage
