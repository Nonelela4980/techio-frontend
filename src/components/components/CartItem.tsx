import {FC} from 'react'
import '../styles/cartItem.scss'
import item from '../../assets/pictures/computer.jpg'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
const CartItem : FC = () =>{
    return (
        <div className='cart-item'>
            <div className="image-container">
                <img src={item} />
            </div>
            <h3>dell X2 74</h3>
            <div className="change-quantity">
                <IconButton>
                    <RemoveIcon/>
                </IconButton>
                <p>1</p>
                <IconButton>
                    <AddIcon/>
                </IconButton>
            </div>
            <h3>R 5 682.88</h3>
            <div className="remove-item">
                <IconButton className="remove">
                    <DeleteSharpIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem;