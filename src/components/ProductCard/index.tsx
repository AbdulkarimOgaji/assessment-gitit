import { Link } from "react-router-dom";
import { Product } from "../../pages/ProductList";
import classes from "./product.module.css";

const ProductCard = ({ data }: { data: Product }) => {
  console.log(data);
  return (
    <div className={classes.card}>
      <h1>{data.name}</h1>
      <p>{new Date(data.dateCreated).toDateString()}</p>
      <Link to={`/products/${data.id}`}>See more</Link>
    </div>
  );
};

export default ProductCard;
