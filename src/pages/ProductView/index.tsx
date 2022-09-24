import classes from "./product-view.module.css";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  return <h1 className={classes.container}>Now Showing Product {id} </h1>;
};

export default ProductView;
