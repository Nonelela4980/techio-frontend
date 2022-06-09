import {FC} from 'react';
import '../styles/product.scss'
import {IconButton} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


interface Product{
    name:string,
    category:string,
    price:number,
    imageUrl:string,
    isNew?:boolean,
}


const Product : FC<Product> =({name,category,price,imageUrl,isNew}) => {
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
                <h3 className='name'>{name}</h3>
                <h3 className='price'>R {price}</h3>
            </div>
            
            <div className="product-bottom">
               
                <IconButton>
                    <FavoriteBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <ShoppingCartOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    );
}
export default Product;