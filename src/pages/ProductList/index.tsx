import ProductCard from "../../components/ProductCard";
import classes from "./product-list.module.css";
const ProductList = () => {
  return (
    <section className={classes.container}>
      <div className={classes.featured}>
        <img src="/featured.jfif" />
        <div>
          <h1>Featured Product</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            ducimus iure tenetur quas voluptate placeat reprehenderit commodi
            repudiandae! Aliquam cupiditate vitae, id, facere, repellat
            voluptatibus reiciendis ipsam soluta voluptas blanditiis quisquam.
            Odio temporibus qui praesentium omnis tempore fugit sed non?
          </p>
          <button>Create a New Product</button>
        </div>
      </div>
      <section className={classes.productsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </section>
  );
};

export default ProductList;
