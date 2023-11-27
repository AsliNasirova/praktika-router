import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="navbar" style={{backgroundColor:"grey"}}>
      <Link to='/'>Home</Link> <br />
      <Link to='contact'>Contact</Link> <br />
      <Link to='about'>About</Link> <br />
      </div>
      <Outlet/>

      <div className="footer" style={{backgroundColor:"grey"}}>
        <h1>Footer</h1> 
      </div>
    </>
  )
}

export default Layout
