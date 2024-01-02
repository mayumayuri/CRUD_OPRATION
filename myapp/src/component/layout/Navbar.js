import React from "react";
import {Link} from "react-router-dom"

const Navbar=()=>{
    return(
       <>
       
       <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Curd
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page"   to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page"   to="/contact">
            Contact
          </Link>
        </li>
       
       
        
      </ul>
      
    </div>
    <Link className="btn btn-outline-light w-25" to="/user/add">Add User</Link>
  </div>
</nav>
</>

      
    )
}

export default Navbar