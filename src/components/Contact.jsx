import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate();
  return (
    <>
    <h2>Contact page</h2>
    <Link to='product'>Product</Link>
    <Link to='newProduct'>New Product</Link>
    <button onClick={()=> navigate('/',{ replace: true })}>Back to home</button>
    <Outlet/>
    </>
  )
}

export default Contact
