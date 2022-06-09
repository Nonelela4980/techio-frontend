import { Button,IconButton} from '@mui/material';
import {FC,useState} from 'react';
import '../styles/productInfo.scss';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { getNumbers } from '../../constants/helper';
import testP from '../../assets/pictures/computer.jpg'


const ProductInfo : FC = () => {
    const [quantity,SetQuantity] =useState<string | number>(1);
    const [quanties,setQuantities]=useState<number[]>(getNumbers());

    return (
        <div className='product-info-root'>

            <div className='product-info'>
                <div className="image-carousel">
                    <img src={testP}/>
                </div>

                <div className="product-info-right">
                    <h1>Asus Xamen X3</h1>
                    <p>Laptops</p>
                    <div className="price-container">
                        <h2>R 3 500</h2>
                    </div>

                    <div className="info-controls">
                        <div className="select-quantities">
                            <h4>QUANTITY</h4>
                            <select>
                                {quanties?quanties.map((element)=>(
                                    <option key={element} value={element}>{element}</option>
                                )):""
                                }
                            </select>
                        </div>
                        <Button startIcon={<AddShoppingCartOutlinedIcon/>} className='add-info-button'>Add to cart</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo;