import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMYDATA = [
  { id: "p1", price: 6, title: "adim", description: "the first" },
  { id: "p2", price: 4, title: "kamdk", description: "the second" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYDATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
