import React,{useState} from 'react'
import * as BsIcons from 'react-icons/bs';
function LoginForm({Login,error}) {
    const [details,setDetails]=useState({loginnName:"",password:''});
    const submitHandler= e=>{
        e.preventDefault();
        Login(details);
    }


    return (
        <form  onSubmit={submitHandler}>
            <div className='from-inner'>
                <dev className='headerLogin'>
                <h2><BsIcons.BsPeopleCircle/></h2>
                <h2>Login</h2>
                </dev>
                {(error!=="")?(<div className="errorLogin">username or password is incorrect</div>):(<div></div>)}
                <div className='from-group'>
                    <label htmlFor="name" >Username : </label>
                    <input type='text' name="name" id="name" onChange={e=>setDetails({...details,loginnName:e.target.value})} value={details.loginnName} />
                </div>
                <div className='from-group'>
                    <label htmlFor="password">Password : </label>
                    <input type='password' name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
                <div className='bottoms'>
                <input  type='submit' value='  sign in  '/>
                </div>
                
            </div>
        </form>
    )
}

export default LoginForm;
