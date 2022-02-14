import React from 'react'
import './Header.css'
import imagem from '../../assets/97461953.jpg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (

    <header className='header' id='headerPage'>
      <div className='header-profile-container'>
        <img className='profile-image' src={imagem} alt="" />
        <div>MEMES.COM</div>
      </div>

      <div className='header-buttons'>
        <Link to={"/"}>
          <button className='header-buttons header-button'>INICIO</button>
        </Link>
        <Link to={"/NewMeme"}>
          <button className='header-buttons header-button'>POSTE SEU MEME</button>
        </Link>
        <Link to={"/NewMeme"}>
        <button className='header-buttons header-button'>QUEM É MILTON?</button>
        </Link>
        <Link to={"/NewMeme"}>
        <button className='header-buttons header-button'>LINKS</button>
        </Link>
      </div>
    </header>
  )
}

export default Header