import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {

  render(){
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="nav-item"><img className="image micro"  src="https://thumbs.gfycat.com/GregariousRegalAsianpiedstarling-size_restricted.gif"/></Link>
          </div>
          <div className="listenrandom navbar-end is-size-5">
            <Link to="/just_listen" className="nav-item has-text-white">Pick Random Podcast</Link>
          </div>
        </div>
      </nav>

    )
  }

}

export default Navbar
