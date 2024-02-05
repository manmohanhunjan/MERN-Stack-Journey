import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Navbar</h1>
      <div style={{
        padding: '10px'
      }}>
        <button onClick={() => {navigate('/')}}>Landing Page</button>
        <button onClick={() => {navigate('/dashboard')}}>Dashboard Page</button>
        {/* <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/dashboard'}>Dashboard</Link> */}
      </div>
    </div>
  )
}

export default Navbar