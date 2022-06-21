import {FC} from 'react';
import '../styles/header.scss'
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';
import Navigation from './Navigation';

const Header : FC = () => {
    return (
        <div className='header'>
             <HeaderTop/>
             <HeaderMiddle/>
            <div className="nav-container">
                <div>
                    <Navigation/>
                </div>   
            </div>  
        </div>
    );
}

export default Header;