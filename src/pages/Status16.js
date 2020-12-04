import React ,{useState,useEffect} from 'react';
const fetch = require('node-fetch');
function Status16() {

  const[namelist,setnamelist]=useState([])
  useEffect(()=>{
    fetch('https://apiserer-bankky.glitch.me/api/get',
    {sheetname:16})
    .then(res => res.json())
    .then(text => setnamelist(text))
  })

  
  return (
    <div className="App">
    
    {namelist.map((val)=>{
      return (
      <div className='card'>
        <h1>{val.รายชื่อเครื่อง} </h1>
        <p>{val.สถานะ}</p>

        </div>)
    })}
    </div>
  );
}

export default Status16;

