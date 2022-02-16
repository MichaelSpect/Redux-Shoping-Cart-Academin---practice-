import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="pr-01"
          title="Test product 1"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="pr-02"
          title="Product 2"
          price={8}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="pr-03"
          title="This is product 3"
          price={4}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
