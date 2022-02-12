import React from 'react'
import './Header.css'
import imagem from '../../assets/97461953.jpg'

const Header = () => {
  return (

    <header className='header' id='headerPage'>
      <div className='header-profile-container'>
        <img className='profile-image' src={imagem} alt="" />
        <div>MEMES.COM</div>
      </div>

      <div className='header-buttons'>
        <button className='header-button'>INICIO</button>
        <button className='header-button'>POSTE SEU MEME</button>
        <button className='header-button'>QUEM É MILTON?</button>
        <button className='header-button'>LINKS</button>
      </div>
    </header>
  )
}

export default Header