import React from 'react';
import homePageImage from '../assets/images/homePageImage.png'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className='home-container'>
        <div className='text-container'>
          <h2>Task Mangement App</h2>
          <p>Organize your task efficiently and boost your productivity with our intuitive App</p>
          <button type='button' onClick={()=> navigate('/about')}>Get Started</button>
        </div>
        <div className='image-container'>
          <img src={homePageImage} alt='home page image'/>
        </div>
      </div>
    </>
  )
}

export default Home;
