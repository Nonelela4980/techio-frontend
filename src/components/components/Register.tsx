import { Button, Checkbox } from '@mui/material';
import {FC, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.scss'
import { z } from 'zod';
import { useForm,SubmitHandler } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const Schema=z.object({
    firstname:z.string().nonempty({message:"firstname is required"}),
    lastname:z.string().nonempty({message:"lastname is required"}),
    email:z.string().email({message:"invalid email address"}),
    password:z.string().min(8,{message:"password must have 8 characters"}),
    accept:z.literal(true,{required_error:"Accept the terms and conditions"})
})

type FormSchemaType = z.infer<typeof Schema>

const Register : FC = () =>{
    const [acceptTerms,setTerms]=useState<Boolean>(true)
    const navigate = useNavigate()

    const {register,handleSubmit,formState:{errors}}=useForm<FormSchemaType>({resolver:zodResolver(Schema)})

    const onSubmit : SubmitHandler<FormSchemaType> = (data)=>{
        console.log(data);
    }

    return (
        <div className='login-root'>
            <div className="login">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input 
                        type='text'
                        placeholder='Firstname'
                        {...register("firstname")}
                        />
                        {errors.firstname && (<p>*{errors.firstname.message}</p>)}
                    </div>
                   

                    <div className="form-group">
                        <input 
                        type='text'
                        placeholder='Lastname'
                        {...register("lastname")}
                        />
                        {errors.lastname && (<p>*{errors.lastname.message}</p>)}
                    </div>

                    <div className="form-group">
                        <input 
                        type='email'
                        placeholder='Email'
                        {...register("email")}
                        />
                        {errors.email && (<p>*{errors.email.message}</p>)}
                    </div>

                    <div className="form-group">
                        <input 
                        type='password'
                        placeholder='Password'
                        {...register("password")}
                        />
                        {errors.password && (<p>*{errors.password.message}</p>)}
                    </div>
                   
                    <div className="form-group">
                        <div className="terms-conditions">
                        <Checkbox className='checkBox' {...register("accept")}/>
                        <p>I agree to the <span>Terms</span> and <span>Privacy Policy</span></p>
                        </div>
                        {errors.accept && (<p>*{errors.accept.message}</p>)}
                    </div>
                   <div className="auth-buttons">
                    <Button className={`sign-up-button ${errors.accept && "disabled"}`} type="submit"
                     disabled={errors.accept? true:false}
                    
                    >Sign Up</Button>
                    <Button className="sign-in-button"  onClick={()=>navigate('/login')}>Sign in</Button>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default Register;