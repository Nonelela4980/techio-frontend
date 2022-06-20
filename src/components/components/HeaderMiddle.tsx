import { Button } from '@mui/material';
import {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/headerMiddle.scss';
import categories from '../../constants/searchCategories';
import {Category} from '../../constants/searchCategories';
import Badge from '@mui/material/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const HeaderMiddle : FC = () => {
    const navigate=useNavigate()

    return (
        <div className='header-middle-section'>
            <div className="middle-section">
                <h1>Tech<span>IO</span></h1>

                <div className="seacrh-area">
                    <select>
                       {
                           categories.map((cat : Category)=>(
                               <option key={cat.id} value={cat.name}>
                                {cat.name}
                               </option>
                           ))
                       }
                    </select>

                    <input type='text' placeholder='search'/>
                       
                    <Button className='search-btn'>Search</Button>
                </div>
                <div className="middle-section-left">
                    <div>
                    <Badge badgeContent={2} color="primary">
                        <FavoriteBorderOutlinedIcon className='middle-icons'/>
                    </Badge>
                       
                        <p>Your Wishlist</p>
                    </div>
                    <div onClick={()=>navigate('/cart')}>
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartIcon className='middle-icons'/>
                    </Badge>
                        <p>Your Cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMiddle;