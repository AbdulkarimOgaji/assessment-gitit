import { Link } from "react-router-dom";
import classes from "./page-not-found.module.css";

const PageNotFound = () => {
  return (
    <section className={classes.container}>
      <h1>Page Not Found</h1>
      <Link to="/" className={classes.btn}>
        Go Back
      </Link>
    </section>
  );
};

export default PageNotFound;
