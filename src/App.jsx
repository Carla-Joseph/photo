import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/CategoryList'
import PhotoList from './pages/PhotoList'
import PhotoDetail from './pages/PhotoDetail'
import PhotoGallery from './PhotoGallery.json'

class App extends Component {
  state = {
    data: PhotoGallery,
  }

  render() {
    return (
      <Router>
        <main>
          <section className="header">
            <div className="title">
              <h1>
                <a href="http://localhost:3000/">Photo Gallery</a>
              </h1>
              <h3 className="subheader pb-2">
                A Photo Gallery by Carla Joseph
              </h3>
            </div>
          </section>
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route
              exact
              path="/pandas"
              render={props => (
                <PhotoList
                  photoData={this.state.data && this.state.data.pandas}
                  heading="Panda Bears"
                  subHeading="Pandas are bears native to south-central China, and are objectively the cutest animals on earth."
                  linkPath="pandas"
                />
              )}
            />
            <Route
              path="/pandas/:id"
              render={props => (
                <PhotoDetail
                  photoData={this.state.data && this.state.data.pandas}
                  listBreadCrumbText="Panda Bears"
                  listBreadCrumbLink="pandas"
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/paintings"
              render={props => (
                <PhotoList
                  photoData={this.state.data && this.state.data.miniatures}
                  heading="Miniature Painting"
                  subHeading="I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work."
                  linkPath="paintings"
                />
              )}
            />
            <Route
              path="/paintings/:id"
              render={props => (
                <PhotoDetail
                  photoData={this.state.data && this.state.data.miniatures}
                  listBreadCrumbText="Miniature Painting"
                  listBreadCrumbLink="paintings"
                  {...props}
                />
              )}
            />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App
