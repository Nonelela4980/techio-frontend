import { Button,IconButton } from '@mui/material';
import {FC,useState} from 'react';
import '../styles/register.scss';
import {AuthTextField} from './Register';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Login : FC = () =>{

    const[isPassword,setFieldType]=useState<Boolean>(true)


    return (
        <div className='register-root'>
            <div className='register'>
                <h2>Sign in</h2>
                <form>
                <AuthTextField 
                type='text'
                label='email address'
               />

                <div className="password-container">
                    <input type={isPassword?'password':'text'}  placeholder="password"/>
                    <div onClick={()=> setFieldType(!isPassword)}>
                        <IconButton>
                            {isPassword? <VisibilityIcon/> :<VisibilityOffIcon/>}
                        </IconButton>
                    </div>
                </div>     
                <div>
                <Button className="sign-in-btn">Sign in</Button>
                <Button className="sign-up-btn">Sign up</Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;