import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';
import { Fragment } from 'react';

const Products = () => {
  return (
    <Fragment>
      <ProductsSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
