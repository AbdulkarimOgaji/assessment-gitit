import { Link } from "react-router-dom";
import classes from "./product.module.css";

const ProductCard = () => {
  return (
    <div className={classes.card}>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <p>Created At something</p>
      <Link to="/products/2">See more</Link>
    </div>
  );
};

export default ProductCard;
