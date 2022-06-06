import {FC} from 'react';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

const Header : FC = () => {
    return (
        <div className='header'>
             <HeaderTop/>
             <HeaderMiddle/>
             <nav>
                 <ul>
                     <li>
                         
                     </li>
                 </ul>
             </nav>
        </div>
    );
}

export default Header;