import Card from '../UI/Card';
import Product from './Product/Product';
import classes from './AvailableProducts.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    name: 'Plain',
    description: 'Plain rye and whole wheat sourdough',
    price: 11.99,
  },
  {
    id: 'p2',
    name: '12-grain',
    description: 'A german specialty!',
    price: 13.99,
  },
  {
    id: 'p3',
    name: 'Cheddar Jalapeno',
    description: 'Slight spice, packed with flavour',
    price: 15.99,
  },
  {
    id: 'p4',
    name: 'Cherry & Chocolate',
    description: 'Makes excellent french toast!',
    price: 15.99,
  },
];

const AvailableProducts = () => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
