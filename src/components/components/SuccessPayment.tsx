import {FC} from 'react'
import '../styles/successPayment.scss'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { IconButton } from '@mui/material';
const SuccessPayment : FC = () =>{
    return (
        <div className='success-payment-container'>
             <div className="text">             
                    <DoneAllIcon className="done-icon"/>
                    <h3>Nonelela your payment has been successful</h3>
                    <div>
                        <IconButton>
                            <DoubleArrowIcon/>
                        </IconButton>
                    </div>
            </div>   
        </div>
    )
}

export default SuccessPayment;