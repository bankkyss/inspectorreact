import React,{useState} from 'react';
import './App.css';
//import Navbar from './components/Navbar';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Reports from './pages/Reports';
// import Products from './pages/Products';
import UseMain from './components/UseMain'
import LoginForm from './components/LoginForm'

function App() {
  const adminUser={
    loginnName:"1",
    password:'2'
  }

  const [user, setUser] = useState({loginnName:"",password:''});
  const [error, setError] = useState('');
  const login=details=>{
    console.log(details);
    if (details.loginnName===adminUser.loginnName && details.password===adminUser.password){
      console.log('Logged In');
      setUser({loginnName:details.loginnName,password:adminUser.password})
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




