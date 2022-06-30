import { Button } from '@mui/material'
import {FC} from 'react'
import '../styles/cart.scss'
import CartItem from './CartItem'

const Cart : FC = () =>{
    return (
        <div className='cart-container'>
           <div className="cart">
            <div className="cart-top">
                <h2><span>Nonelela</span>, Welcome To Your Shopping Cart</h2>
            </div>

            <div className="cart-list">
                <CartItem/>
                <CartItem/>
            </div>

            <div className="total-section">
                <div></div>
                <h2>Total : R7 5800.00</h2>
            </div>

            <div className="cart-buttons">
                <Button className="shop-button">Continue shopping</Button>
                <Button className="ship-button">Check Out</Button>
            </div>
           </div>
        </div>
    )
}

export default Cart;