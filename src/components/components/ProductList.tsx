import {FC} from 'react'
import '../styles/productList.scss'
import Product from './Product'
import { sortCategories,Category } from '../../constants/searchCategories';

const ProductList : FC = () =>{
    return (
    <div className='list-container'>

        <div className='product-list'>
            <h2>Laptops</h2>

            <div className='list-bottom'>
                <div className="filter-section">
                    <h3>28 Products</h3>
                    <div></div>
                    <h3>Sort by</h3>
                    <select>
                    {sortCategories?

                    sortCategories.map((cat : Category)=>(
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                    )):""
                    }
                    </select>
                </div>

                <div className="products">
                <Product
                        name='Asus computer'
                        category='Laptops'
                        price={4500}
                        imageUrl={require('../../assets/pictures/computer.jpg')}
                        isNew={false}
                />

                <Product
                        name='Asus computer'
                        category='Laptops'
                        price={4500}
                        imageUrl={require('../../assets/pictures/computer.jpg')}
                        isNew={false}
                />

                <Product
                        name='Asus computer'
                        category='Laptops'
                        price={4500}
                        imageUrl={require('../../assets/pictures/computer.jpg')}
                        isNew={false}
                />
                </div>

            </div>
        </div>

    </div>
    )
};

export default ProductList;