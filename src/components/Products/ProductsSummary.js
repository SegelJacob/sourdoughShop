import classes from './ProductsSummary.module.css';

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Bread, Delivered To You</h2>
      <p>
        Choose your favorite sourdough from our broad selection of available
        loaves and enjoy a delicious breakfast, lunch or dinner at home.
      </p>
      <p>
        All our dough is made with high-quality ingredients, just-in-time and of
        course by experienced bread makers!
      </p>
    </section>
  );
};

export default ProductsSummary;
