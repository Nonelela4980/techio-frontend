import {FC} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss'
const Navigation : FC = () => {
    return (
        <nav>
        <ul>
            <li>
                <NavLink
                to={'/'}
                className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
                >
                   Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/deals'}
                className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
                >
                   Hot Deals
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/categories'}
                className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
                >
                   Categories
                </NavLink>
            </li>

            <li>
                <NavLink
                to={'/payment_methods'}
                className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
                >
                   Payment Methods
                </NavLink>
            </li>

            <li>
                <NavLink
                to={'/about_us'}
                className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
                >
                   About Us
                </NavLink>
            </li>

            <li>
                <NavLink
                to={'/contact'}
                className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
                >
                   Contact Us
                </NavLink>
            </li>

        </ul>
    </nav>
    );
}

export default Navigation;