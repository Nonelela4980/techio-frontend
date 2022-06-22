import { Button, Checkbox } from '@mui/material';
import {FC} from 'react'
import '../styles/deliveryDetails.scss'
import { z } from 'zod';
import { useForm,SubmitHandler } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const formSchema = z.object({
    street:z.string().nonempty({message:"street is required"}),
    town:z.string().nonempty({message:"town is required"}),
    province:z.string().nonempty({message:"province is required"}),
    code:z.string().length(4,{message:"zipcode must have 4 numbers"}).nonempty({message:"zipcode is required"}),
    online:z.boolean()
})

type FormSchemaType = z.infer<typeof formSchema>

const DeliveryDetails : FC = () =>{
    const {register,watch,handleSubmit,formState:{errors}} =useForm<FormSchemaType>({resolver:zodResolver(formSchema),})

    const onSubmit : SubmitHandler<FormSchemaType> = (data)=>{
        console.log(data);
    }

    return (
        <div className="delivery-details-container">
            <div className="details">
                <h2>Delivery Details</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <input 
                            type='text'
                            placeholder='street name'                      
                            {...register("street")}
                        />
                        {errors.street && (<p>*{errors.street.message}</p>)}
                    </div>

                    <div className='form-group'>
                        <input 
                            type='text'
                            placeholder='town'
                            {...register("town")}
                        />
                        {errors.town && (<p>*{errors.town.message}</p>)}
                    </div>

                    <div className='form-group'>
                        <input 
                            type='text'
                            placeholder='province'
                            {...register("province")}
                        />
                        {errors.province && (<p>*{errors.province.message}</p>)}
                    </div>

                    <div className='form-group'>
                        <input 
                            type='text'
                            placeholder='zipcode'
                            {...register("code")}
                        />
                        {errors.code && (<p>*{errors.code.message}</p>)}
                    </div>
                    <div className="form-group">
                        <div className="pay-online">
                            <Checkbox className='check'
                            {...register("online")}
                            />
                            <p>online payment</p>
                        </div>
                        {errors.online && (<p>{errors.online.message}</p>)}
                    </div>
                    <Button className="continue-payment" type="submit" disabled={false}>Procceed to checkout</Button>
                </form>

            </div>
        </div>
    )
}

export default DeliveryDetails; 

