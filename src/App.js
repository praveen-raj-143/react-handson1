import './App.css'
import Buttonone from './components/Buttonone';
import Buttontwo from './components/Buttontwo';
import { useState } from "react"


function App(){
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);

  const list = () => {
    setshow(!show);
  }
  const lists=()=>{
    setshow2(!show2);
  }
  return (
  <div><h1 className="head">Styling using Functinal and Class Component</h1>
  <div className="buttons">
  <button className="btn" onClick={list}>To style in Functional component </button>
  <button className="btn" onClick={lists}>To style in Class component</button>
  </div>
  <h2>{show}</h2>
  <div className="component">
  {show ? <Buttonone/>:<div></div>}
  {show2 ? <Buttontwo/>:<div></div>}
  </div>
  </div>
  )
}

export default App;