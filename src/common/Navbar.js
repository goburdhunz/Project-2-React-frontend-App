import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {

  render(){
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="nav-item"><img className="image micro"  src="https://data.whicdn.com/images/45904796/original.gif"/></Link>
          </div>

          <div className="listenrandom popular navbar-end is-size-5">
            <Link to="/popular_podcasts" className="nav-item has-text-white">Trending podcasts</Link>
          </div>

          <div className="listenrandom navbar-end is-size-5">
            <Link to="/just_listen" className="nav-item has-text-white">Discover random podcast</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
