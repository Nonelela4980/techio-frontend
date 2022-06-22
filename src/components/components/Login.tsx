import { Button,IconButton } from '@mui/material';
import {FC,useState} from 'react';
import '../styles/login.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { z } from 'zod';
import { useForm,SubmitHandler } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom';

const Schema=z.object({
    email:z.string().email({message:"invalid email format"}).nonempty({message:"email required"}),
    password:z.string().nonempty({message:"password required"}),
})

type FormSchemaType = z.infer<typeof Schema>


const Login : FC = () =>{
    const[isPassword,setFieldType]=useState<Boolean>(true)
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors}} =useForm<FormSchemaType>({resolver:zodResolver(Schema)})

    const onSubmit: SubmitHandler<FormSchemaType> = (data)=>{

    }
    return (
        <div className='register-root'>
            <div className='register'>
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input 
                    type='text'
                    placeholder='email address'
                    {...register("email")}
                    />
                    {errors.email && (<p>*{errors.email.message}</p>)}
                </div>

                <div className="password-container form-group">
                    <input type={isPassword?'password':'text'}  placeholder="password" {...register("password")}/>
                    <div onClick={()=> setFieldType(!isPassword)}>
                        <IconButton>
                            {isPassword? <VisibilityIcon/> :<VisibilityOffIcon/>}
                        </IconButton>
                    </div>
                    {errors.password && (<p>*{errors.password.message}</p>)}
                </div>     
                <div>
                <Button className="sign-in-btn" type="submit">Sign in</Button>
                <Button className="sign-up-btn" onClick={()=>navigate('/register')}>Sign up</Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;