import {FC} from 'react';
import '../styles/headerTop.scss'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const HeaderTop : FC = () => {
    return (
        
        <div className='header-top-section'>
            <div className='header-top'>
               <div className="header-top-left">
                    <div>
                        <LocalPhoneOutlinedIcon/>
                        <p>+27815197998</p>
                    </div>
                    <div>
                        <EmailOutlinedIcon/>
                        <p>techiosales@techio.com</p>
                    </div>
                    <div>
                        <LocationOnOutlinedIcon/>
                        <p>88 Govan Mbeki</p>
                    </div>
               </div>
               <div className="header-top-right">
                   <PersonOutlineOutlinedIcon/>
                   <p>My Account</p>
               </div>
            </div>
        </div>
    );
}

export default HeaderTop;