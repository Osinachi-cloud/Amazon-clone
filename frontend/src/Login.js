import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const signIn = e=>{
        e.preventDefault();
    }
    const register =e=>{
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/"> 
            
            <img className="login_logo" src="image/amazon-logo.jpeg"/>
            
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange ={e => setPassword(e.target.value)} />
                   
                    <button onClick={signIn} type='submit' className="login_signInButton">
                        Sign In
                    </button>

                </form>
                <p>
                Note that the development build is not optimized.
                To create a production build, use npm run build. 
                To create a production build, use npm run build. 


                </p>
                <button onClick={register} className="login_registerButton">
                    Create Your Amazon Account
                </button>
            </div>

            
        </div>
    )
}

export default Login
