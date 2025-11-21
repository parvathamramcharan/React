import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='card'>
      
      <Link to="/About">Go to About</Link>
      <br />
      <Link to="/Contact"> Go to Contact</Link>
    </div>
  )
}

export default Home





