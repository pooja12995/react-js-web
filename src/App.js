import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {  BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
function App() {
  const [mode ,setMode] = useState("light");
  const [alert ,setAlert] = useState(null);
  const  showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title = "Pooja kamble -Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "Pooja kamble - Light Mode";

    }
  }
  return (
    <Router>
      <Navbar title="Pooja Kamble" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
         <div className="container my-3">
         <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} toggleMode={toggleMode}/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            </Switch>
            </div>
      </Router>
  );
}

export default App;
