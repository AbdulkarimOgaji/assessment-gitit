import { Link } from "react-router-dom";
import classes from "./home.module.css";
const Home = () => {
  return (
    <section className={classes.container}>
      <h1>Create and View Your Products</h1>
      <Link to="/products" className={classes.btn}>
        Get Started
      </Link>
    </section>
  );
};

export default Home;
