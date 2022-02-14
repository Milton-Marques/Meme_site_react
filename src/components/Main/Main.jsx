import React from 'react'
import './Main.css'
import MemeCard from '../MemeCard/MemeCard'
import Propaganda from '../Propaganda/Propaganda'
import {useState, useEffect}  from 'react'


const Main = () => {

const [memeList, setMemeList] = useState([])

useEffect(() => {

  getMemes()

}, [])
let getMemes = async () => {
  let params = {
    method: "GET"
  }
  let dbLink = "http://localhost:3001/memes"
  let list = await fetch(dbLink, params)
  .then((response) => response.json())
  .then((response) => setMemeList(response))
  
}
console.log(memeList)

  return (
    <main className='main'>
      <div className='memes-cards-list'>
        {
          memeList.map(objeto => (
            <MemeCard key={objeto.id} title={objeto.titulo} autor={objeto.autor} img={objeto.imagem}/>
          ))
        }
      </div>


      <div className='ad'>
        <Propaganda img='https://images.uncyc.org/pt/e/e7/Tadelinha.gif'/>
        <Propaganda img='https://images.uncyc.org/pt/e/e7/Tadelinha.gif'/>
        <Propaganda img='https://tm.ibxk.com.br/2019/01/15/15160827013207.jpg?ims=1200x675'/>

      </div>


    </main>
  )
}

export default Main