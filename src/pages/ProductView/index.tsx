import classes from "./product-view.module.css";
import { useParams } from "react-router-dom";

type Props = {
  openModal: () => void;
};

type Product = {
  id: number;
  name: string;
  description: string;
  dateCreated: Date;
};

function fetchProductById(id: string) {
  const prodStr = localStorage.getItem("products") || "[]";
  const products: Product[] = JSON.parse(prodStr);
  return products.find((p) => p.id == parseInt(id));
}

const ProductView = ({ openModal }: Props) => {
  const { id } = useParams();
  const prod = fetchProductById(id || "");
  return (
    <section className={classes.container}>
      <h1>Now Showing Product {prod?.id} </h1>
      <p>{prod?.description}</p>
    </section>
  );
};

export default ProductView;
