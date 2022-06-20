import { Button, Checkbox } from '@mui/material';
import {FC, useState} from 'react';
import '../styles/login.scss'

interface Props{
    type:string,
    label:string,
}

export const AuthTextField = ({type,label}:Props) =>(
    <>
         <input type={type} placeholder={label}/>
    </>
)

const Login : FC = () =>{
    const [acceptTerms,setTerms]=useState<Boolean>(true)
    return (
        <div className='login-root'>
            <div className="login">
                <h2>Create Account</h2>
                <form>
                   <AuthTextField 
                    type='text'
                    label='Firstname'
                   />
                   <AuthTextField 
                    type='text'
                    label='Lastname'
                   />
                    <AuthTextField 
                    type='email'
                    label='Email'
                   />
                    <AuthTextField 
                    type='password'
                    label='Password'
                   />
                   <div className="terms-conditions">
                    <Checkbox className='checkBox' selected={acceptTerms} />
                    <p>I agree to the <span>Terms</span> and <span>Privacy Policy</span></p>
                   </div>
                   <div className="auth-buttons">
                    <Button className="sign-up-button">Sign Up</Button>
                    <Button className="sign-in-button">Sign Up</Button>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default Login;