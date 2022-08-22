import logo from './logo.svg';
import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Name from './components/Name';
import Count from './components/Count';
import Planet from './components/Planet';
import Todo from './components/Todo';
import Cat from './components/Cat';
import Navbar from './components/Navbar';
import Contact from './components/contact';
import Home from './components/Home';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  const [userName, setUserName] = useState("john")
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
      <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home  userName={userName} />} />
          <Route path='/contact' element={<Contact userName={userName}  />} />
        </Routes>
      </Router>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
