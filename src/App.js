//import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './App.css';
import {UC,LC,NC,SC} from './data/List'

function App() {
  const [passlen,setPasslen]=useState(10);
  const[upperCase,setUpperCase]=useState(false);
  const[lowerCase,setLowerCase]=useState(false);
  const[number,setNumber]=useState(false);
  const[symbols,setSymbols]=useState(false);
  const[fpass,setFpass]=useState(' ');
  
  const generate =()=>{
    let charset='';
    let char ='';
  if(upperCase || lowerCase || number || symbols){
       if(upperCase) charset+=UC;
        if(lowerCase) charset+=LC;
       if(number) charset+=NC;
       if(symbols) charset+=SC;
      for(let i =0;i<passlen ; i++){
        char+=charset.charAt(Math.floor(Math.random()*charset.length));
      }
      setFpass(char);
  }
  else{
    alert("Please choose any of the option!!");
  }
}

   const copyPass=()=>{
    navigator.clipboard.writeText(fpass);
    toast("copied!");
   }
  return (
    <div className="App">
        
      <div className = "passin">
      <ToastContainer />
      <h2>PASSWORD GENERATOR</h2><br></br>
        <input type='text' readOnly  value={fpass}/> <button className='btn1' onClick={copyPass}>Copy</button>
        <div className='inner'>
          <table className='innertable'>
            <tr>
          <td ><b> Add The length of the password</b> </td>   <td > <input type='number' max={20} min={10} value={passlen} onChange={(event)=>setPasslen(event.target.value)}/> </td>
          </tr>
            <tr>
       <td ><b> Add UpperCase</b> </td><td > <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)} /> </td>
        </tr>
        <tr>
       <td ><b> Add LowerCase</b> </td>   <td > <input type='checkbox'  checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)} /> </td>
        </tr>
        <tr>
       <td ><b> Add Numbers</b> </td>   <td > <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} /> </td>
        </tr>
        <tr>
       <td ><b> Add Symbols</b> </td>   <td > <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)} /> </td>
        </tr>
        </table>
        </div>
        <button className='btn' onClick={generate}>GENERATE THE PASSWORD</button>
      </div>
     
    </div>
  );
}

export default App;
