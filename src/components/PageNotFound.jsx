import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Page not found</h2>
      <button type='button' onClick={()=> navigate('/')}>Go Home</button>
    </div>
  )
}

export default PageNotFound
