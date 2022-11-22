import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css'
import videoBg from '../assets/videos/drone-footage.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className='content'>
        <h1> WebGIS. Pengasih. </h1>
        <p> Sistem Informasi Geospasial Desa Pengasih</p>

        <div className='button'>
          <Link to='/map' className='btn'>Peta</Link>
          <Link to='/dashboard' className='btn btn-light'>Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default Video