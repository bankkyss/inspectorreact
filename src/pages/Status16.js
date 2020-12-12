import React ,{useState,useEffect} from 'react';
//const fetch = require('node-fetch');
import './status.css'
import Axios from "axios";
function Status16() {

  const[namelist,setnamelist]=useState([])
  useEffect(()=>{
    Axios.post('https://testapibanky.glitch.me/api/get',{sheetname:16})
    .then(res=>{
      setnamelist(res.data)
    })



  })

  
  return (
    <div className="App">
    
    {namelist.map((val)=>displaydata(val))}
    </div>
  );
}

function displaydata(val) {
  if(val.สถานะ === 'ไม่พร้อม'){
    return(
    <template>
      <div>
      <h3>รายชื่อเครื่อง : {val.รายชื่อเครื่อง} </h3>
      <p>สถานะ : {val.สถานะ}</p>
      <p>ผู้ตรวจ : {val.ผู้ตรวจ}</p>
      <p>รายการเข้าซ่อม: {val.รายการเข้าซ่อม}</p>
      <p>วันเข้ารับการซ่อม : {val.วันเข้ารับการซ่อม}</p>
      <p>เวลาเข้ารับการซ่อม : {val.เวลาเข้ารับการซ่อม}</p>
      </div>
    </template>)

  }
  else{
    return(
      <div className='card'>
      <h3>รายชื่อเครื่อง : {val.รายชื่อเครื่อง} </h3>
      <p>สถานะ :{val.สถานะ}</p>
      <p>ผู้ตรวจ :{val.ผู้ตรวจ}</p>
      </div>)
  }
  
}



export default Status16;

