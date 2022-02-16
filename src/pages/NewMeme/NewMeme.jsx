import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./NewMeme.css"

const NewMeme = () => {

  const [form, setForm] = useState({

    id: 0,
    titulo: "",
    imagem: "",
    autor: ""

  })




  return (
    <div>
      <Header />
      <div>
        <h1>Poste  seu MEME</h1>

        <form className="form-container" onSubmit={() => console.log("hello world")}>
          <div>
            <label htmlFor="titulo">isira o titulo do meme</label>
            <input type="text" id="titulo" />
          </div>
          <div>
            <label htmlFor="link">insira o link do meme</label>
            <input type="text" id="link" />
          </div>
          <div>
            <label htmlFor="autor">insira seu nome</label>
            <input type="text" id="autor" />
          </div>
          <button type='submit'>submit</button>

        </form>

      </div>
      <Footer />
    </div>
  )
}

export default NewMeme