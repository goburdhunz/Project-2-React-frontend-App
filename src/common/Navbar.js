import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {

  render(){
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/just_listen" className="nav-item">Just Listen</Link>
          </div>
        </div>
      </nav>

    )
  }

}

export default Navbar
