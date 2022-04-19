import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const NavigationBar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div className=''>
                        <CrwnLogo className='logo' />
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nva-link' to='/shop'>
                        Shop
                    </Link>
                    <Link className='nva-link' to='/signIn'>    
                        SignIn
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};
export default NavigationBar;