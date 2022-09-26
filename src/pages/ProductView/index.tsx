import classes from "./product-view.module.css";
import { useParams } from "react-router-dom";

type Props = {
  openModal: () => void;
};

const ProductView = ({ openModal }: Props) => {
  const { id } = useParams();
  return <h1 className={classes.container}>Now Showing Product {id} </h1>;
};

export default ProductView;
