import {FC} from 'react';
import Product from '../../components/components/Product';
import ImageWidget from './components/ImageWidget';
import './styles/home.scss'
const Home :FC = () => {
    return (
        <div className='home'>
            <div className="home-container">
                <div className="widgets-container">

                    <ImageWidget
                    title='Laptop Collection'
                    imageUrl={require('../../assets/pictures/laptop.jpeg')}
                    />

                    <ImageWidget
                    title='Accessories Collection'
                    imageUrl={require('../../assets/pictures/accessories.jpeg')}
                    />

                    <ImageWidget
                    title='Camera Collection'
                    imageUrl={require('../../assets/pictures/cameras.jpeg')}
                    />
                    
                </div>

                <div className='products'>
                    <div className="products-titles">
                        <h3>New products</h3>
                    </div>

                    <div className="product-list">
                        <Product
                        id='fsdhjfksdf'
                        title='Asus computer'
                        description='sfdsdfsd'
                        category='Laptops'
                        price={4500}
                        imageUrl={require('../../assets/pictures/computer.jpg')}
                        isNew={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;