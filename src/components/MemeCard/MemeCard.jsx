import React from 'react'
import './MemeCard.css'


const MemeCard = ({
  title,
  img,
  autor,
}) => {
  return (
    <div className='meme-card'>
      
      <h2 className='meme-card-title'>{title}</h2>
      <div className='meme-card-content'>
        <img src={img} alt="imagem" />
      </div>
      <div className='meme-card-footer'>
        <h3>{autor}</h3>

      </div>
    </div>
  )
}

export default MemeCard