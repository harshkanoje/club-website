import React from 'react';
import './App.css';
// import Gif from './components/Gif';
import Gif from './components/Gif';
import Navbar from './components/Navbar';
import Cards from './components/cards';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div>
     <Navbar/> 
   <Gif/>
   <Cards/>

   <Team/>
   <Contact/>
   </div>
  );
}

export default App;
