import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {HashRouter, Route, Routes} from "react-router-dom";


function App() {
  const [mode, setMode]= useState("light");
  const [alert, setAlert]= useState(null);

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },2000);
  }

  const toggleMode = () =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#283747"; 
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"; 
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
      <HashRouter>
        <Navbar title ="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />  
        <div className="container" >
              <Routes>
                <Route exact path="/" element={<Textform heading = "Enter The Text To Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}/>
                    
                <Route exact path="/about" element={<About mode={mode}/>}/>
              </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
