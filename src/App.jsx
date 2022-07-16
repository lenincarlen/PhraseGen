
import './App.css'
import phrases from "./components/phrases.json"
import { useState } from 'react';
import Button from './components/Button';
import QuoteBox from './components/QuoteBox'



const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]


function App() {

  const random = Math.floor(Math.random()* phrases.length)

  const [index, setIndex] = useState(random)

  const changePhrase = () =>{
    const random = Math.floor(Math.random()*phrases.length)
    setIndex(random)
  }
   const randomColorIndex = Math.floor(Math.random()* colors.length)

   const color = colors [randomColorIndex]

   document.body.style = `background: ${color}`

return(
  <div className='App '>
    <div className='card2'>
    {/* <h2 style={{color: color}}>{phrases[random].quote}</h2>
    <p style={{color: color}}>{phrases[random].author}</p> */}
    <QuoteBox color={color} phrases={phrases} random={random} />
  
    {/* <button className='button__quotes' onClick={changePhrase}></button> */}
    <Button changePhrase={changePhrase}/>
  
  </div>
  </div>

  

)

 

}

export default App


