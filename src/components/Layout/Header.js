import { Fragment } from 'react';

import headerImage from '../../assets/header_img.jpg';
import calsses from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={calsses.header}>
        <h1>Sourdough Chronicles</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={calsses['main-image']}>
        <img src={headerImage} alt="display of sourdough bread" />
      </div>
    </Fragment>
  );
};

export default Header;
