import React from 'react'
import logo from "./images/logo.png"
import { Link } from 'react-router-dom'
import Educational from './pages/Educational'
import currentLocation from './currentLocation'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* <!-- <a class="navbar-brand" href="#">Weather App</a> --> */}
          <img src={logo} width="90" height="50" loading="lazy"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link to="/" className='nav-link active' aria-current='page'>Home</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href='#'>About Disaster</a> */}
                <Link to="/Educational" className='nav-link active' aria-current='page'>About Disaster</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link">Quiz</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Usage Guide</a>
              </li>
            </ul>
            <form class="d-flex form-container" role="search" data-searchForm>
              <input id="city" class="form-control me-2" type="search" placeholder="Search for City..." aria-label="Search" data-searchInput/>
              <button class="btn btn-outline-success" type="submit" id="Submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
