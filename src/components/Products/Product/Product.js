import { useContext } from 'react';

import ProductForm from './ProductForm';
import classes from './Product.module.css';
import cartContext from '../../../store/cart-context';

const Product = ({ name, description, price, id }) => {
  const cartCtx = useContext(cartContext);

  const productPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{productPrice}</div>
      </div>

      <div>
        <ProductForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Product;
