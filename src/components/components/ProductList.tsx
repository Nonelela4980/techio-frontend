import {FC, useEffect, useState} from 'react'
import '../styles/productList.scss'
import Product from './Product'
import { sortCategories,Category } from '../../constants/searchCategories'
import { ProductContainer } from '../../helpers/stateInterfaces'
import axios from 'axios'

const ProductList : FC = () =>{
    const [products,setProducts] = useState<ProductContainer[]>([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts= async ()=>{
        await axios.get('http://localhost:8080/products/all')
            .then(res=>{
                const data = res.data
                setProducts(data)
                console.log('products=>',res.data)
                console.log("------------------")
                console.log('setProduct',data)
                console.log("------------------")
            }).catch(err=>console.error(err))
    }

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
                        id={'sdjfnskd'}
                        title='Asus computer'
                        description='fdsklihskfhgsdfsdf'
                        category='Laptops'
                        price={4500}
                        imageUrl={require('../../assets/pictures/computer.jpg')}
                        isNew={false}
                />

                {products && products.map((product : ProductContainer)=>(
                        <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                        imageUrl={`http://localhost:8080/public/images/${product.imageUrl}`}
                        isNew={false}
                        />
                ))
                }


                </div>

            </div>
        </div>

    </div>
    )
};

export default ProductList;