import { Fragment } from 'react';

import HeaderCart from './HeaderCart';
import classes from './Header.module.css';
import mealsImage from '../../assets/sushi2.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactSushi</h1>
                <HeaderCart onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A tray of sushi!'/>
            </div>
        </Fragment>
    );
};

export default Header;