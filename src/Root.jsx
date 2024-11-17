import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      Welcome to Home
      <br />
      <NavLink to={"/about"} >About</NavLink>
      <br />
      <Link to="contacts" >Contact</Link>
      <br />
      <Link to="/my">My</Link>
      <Outlet/>
    </>
  )
}

export default Root