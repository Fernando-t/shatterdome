import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Description = ({text}) =>{
  return <p>{text}</p>
}

const Title = ({ text, color}) =>{
  return <h1 style={{color}}>{text}</h1>
}




const Card = () => {

  const onHandlerClick = (name) =>{
    console.log('click' , name)
  }

  return (
  <div>
  <Title text='Bienvenidos' color="pink"/>
  <Description text='Esta es una descripcion'/>
  <Button onHandlerClick={onHandlerClick} color='pink' name='Clickeame'/>
  </div>
  )
}

const Button = ({onHandlerClick, name , color}) =>{
  return (
  <button type = 'button' onClick={() => onHandlerClick(name)} style={{background: color}}>{name}</button>
    )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Card/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      </>
  )
}

export default App
