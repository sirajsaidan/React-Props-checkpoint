import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import siraj from "./siraj.jpg"

let info={FirstName:"Siraj Eddine",LastName:"Saidane",Bio:"Student in go my code",Proffission:"full satck"}
  


function App() {
  return (
    <Profile info={info}>
      <img  style={{
            resizeMode: "cover",
            height: 100,
            width: 100
          }} src={siraj}/>
    </Profile>
  );
}

export default App;
