import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import { BrowserRouter, Routes, Route } from "react-router";



function App() {
  const[mode,setmode]=useState('')

  const[alert,setalert]=useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }

  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light-mode has been enabled.','success')
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='#1f253f'
      showAlert('Dark-mode has been enabled.','success')

    }
  }


  return (
    <>
    <BrowserRouter>

      <Navbar title='TextUtils' aboutText='About' mode={mode} togglemode={togglemode}/>
          {/* <Navbar /> */}

      <Alert alert={alert}/>

      <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading='Try TextUtils -word counter, character counter, remove extra spaces' mode={mode} showAlert={showAlert}/>} />
        
          </Routes> 

      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
