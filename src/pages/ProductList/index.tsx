import ProductCard from "../../components/ProductCard";
import classes from "./product-list.module.css";

type Props = {
  openModal: () => void;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  dateCreated: Date;
};

function fetchProducts() {
  const prodStr = localStorage.getItem("products") || "[]";
  const products: Product[] = JSON.parse(prodStr);
  return products;
}

const ProductList = ({ openModal }: Props) => {
  const products = fetchProducts();
  return (
    <section className={classes.container}>
      <div className={classes.featured}>
        <img src="/featured.jfif" alt="featured img" />
        <div>
          <h1>Featured Product</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            ducimus iure tenetur quas voluptate placeat reprehenderit commodi
            repudiandae! Aliquam cupiditate vitae, id, facere, repellat
            voluptatibus reiciendis ipsam soluta voluptas blanditiis quisquam.
            Odio temporibus qui praesentium omnis tempore fugit sed non?
          </p>
          <button onClick={openModal}>Create a New Product</button>
        </div>
      </div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
        Available Products
      </h1>
      <section className={classes.productsContainer}>
        {products.map((p) => (
          <ProductCard key={p.id} data={p} />
        ))}
      </section>
    </section>
  );
};

export default ProductList;
