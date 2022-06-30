import {FC} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../styles/product.scss'
import {IconButton} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {addToCart} from '../../redux/slices/cartSlice'
import { Item } from '../../helpers/stateInterfaces';

interface Product{
    id:string,
    title:string,
    description:string
    category:string,
    price:number,
    imageUrl:string,
    isNew?:boolean,
}


const Product : FC<Product> =({id,title,description,category,price,imageUrl,isNew}) => {
    const dispatch=useDispatch()
    
    const addItem=()=>{
        const cartItem : Item={
            id:id,
            title:title,
            description:description,
            category:category,
            price:price,
            imageUrl:imageUrl,
            quantity:1,
        }
        dispatch(addToCart({...cartItem}))
    }

    return (
        <div className='product'>
            {isNew?
            <div className="new-tag">
                <p>NEW</p>
            </div>
            :''
            }
            <div className="image-container">
                <img src={imageUrl} />
            </div>
            <div className="details">
                <h3 className='category'>{category}</h3>
                <h3 className='name'>{title}</h3>
                <h3 className='price'>R {price}</h3>
            </div>
            
            <div className="product-bottom">
               
                <div>
                    <IconButton>
                        <FavoriteBorderOutlinedIcon/>
                    </IconButton>
                </div>
                <div onClick={()=>addItem()}>
                    <IconButton>
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
export default Product;