import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./NewMeme.css"
import {useNavigate} from "react-router-dom"
const NewMeme = () => {

  const [form, setForm] = useState({

    titulo: "",
    imagem: "",
    autor: ""

  })
  const navigateTo = useNavigate();
  const enviar = async (e) => {
    e.preventDefault();
    let dbLink = "https://miltonmemesite.herokuapp.com/api/memes"
    let params = {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    }
    await fetch(dbLink, params)
      .then(response => {
        console.log(response)
        navigateTo("/");
      })
    }

  const onChangeForm = (element) => {
    const { name, value} = element.target;
    setForm({ ...form, [name]:value })

  }

  return (
    <div>
      <Header />
      <div>
        <h1>Poste  seu MEME</h1>

        <form className="form-container" onSubmit={(e) => enviar(e)}>
          <div>
            <label htmlFor="titulo">isira o titulo do meme</label>
            <input onChange={(element) => onChangeForm(element)} name="titulo" type="text" id="titulo" />
          </div>
          <div>
            <label htmlFor="link">insira o link do meme</label>
            <input onChange={(element) => onChangeForm(element)} name="imagem" type="text" id="link" />
          </div>
          <div>
            <label htmlFor="autor">insira seu nome</label>
            <input onChange={(element) => onChangeForm(element)} name="autor" type="text" id="autor" />
          </div>
          <button type='submit'>submit</button>

        </form>

      </div>
      <Footer />
    </div>
  )
}

export default NewMeme