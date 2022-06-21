import { Button, Checkbox } from '@mui/material';
import {FC} from 'react'
import '../styles/deliveryDetails.scss'
import { AuthTextField } from './Register';

const DeliveryDetails : FC = () =>{
    return (
        <div className="delivery-details-container">
            <div className="details">
                <h2>Delivery Details</h2>
                <form>
                    <AuthTextField 
                        type='text'
                        label='street name'
                    />

                    <AuthTextField 
                        type='text'
                        label='town'
                    />

                    <AuthTextField 
                        type='text'
                        label='province'
                    />

                    <AuthTextField 
                        type='text'
                        label='zipcode'
                    />
                    <div className="pay-online">
                        <Checkbox className='check'/>
                        <p>online payment</p>
                    </div>
                    <Button className="continue-payment">Procceed to checkout</Button>
                </form>
            </div>
        </div>
    )
}

export default DeliveryDetails; 

