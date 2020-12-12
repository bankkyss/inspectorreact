import React,{useState} from 'react';
import './App.css';
import Axios from "axios";
//import Navbar from './components/Navbar';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UseMain from './components/UseMain'
import LoginForm from './components/LoginForm'

function App() {


  const [user, setUser] = useState({loginnName:"",password:''});
  const [error, setError] = useState('');
  const [logindetail, setlogindetail] = useState('');
  const login=details=>{
    Axios.post('https://testapibanky.glitch.me/api/login',{
      username:details.loginnName,
      password:details.password
    })
    .then(res=>{

      setlogindetail(res.data[0].dreams)
    })
    //.then(res => setlogindetail(res.statusText))
    //if (details.loginnName===adminUser.loginnName && details.password===adminUser.password){
    if (logindetail==='bankky'){
      setUser({loginnName:details.loginnName,password:details.password})
    }else{
      setError('username not match')
    }
  }
  return (
    <div className='app'>
      {(user.loginnName !== '') ? (
        <UseMain />
      )
        :(<div className='mainlogin'>
          <LoginForm Login={login} error={error} />
          </div>
          
        )
        }
     </div>);
}

export default App;




