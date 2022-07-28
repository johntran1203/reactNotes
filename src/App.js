import logo from './logo.svg';
import { useState, useRef } from 'react';
import './App.css';
import Login from './components/Login';
import Name from './components/Name';
import Count from './components/Count';
import Planet from './components/Planet';
import Todo from './components/Todo';
import Cat from './components/Cat';

function App() {
  const [showHeader, setShowHeader] = useState(false)
  const [showText, setShowText] = useState(true)
  const input = useRef(null)
  const planets = [{name: 'MArs', isGasPlanet: false},
  {name: 'MArs', isGasPlanet: false},
  {name: 'Earth', isGasPlanet: false},
  {name: 'Jupiter', isGasPlanet: true},
  {name: 'Venus', isGasPlanet: false},
  {name: 'Neptune', isGasPlanet: true},
  {name: 'Uranus', isGasPlanet: true}]

  return (
    <div className="App">
      <button onClick={()=>setShowHeader(true)}>show header</button>
      {showHeader ? <h2>Hello</h2> : <h2>Nope not today</h2>}
      <Login />
      <Name />
      <Count />
      {planets.map((planet, key)=> {
        return  <Planet planet={planet}  key={key} />
      })}
      
      {showText && <h1>HI MY NAME IS CORNDOG</h1>}
      <button onClick={()=>{setShowText(!showText)}}>Show/Hide</button>
      <Todo />
      <Cat />
    </div>
  );
}

export default App;
