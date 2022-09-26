import classes from "./modal.module.css";

const CreateProductModal = () => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modal}>
        <h1>Add New Product</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={10}></textarea>
        <div className={classes.btnContainer}>
          <button>Back</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
