import classes from "./modal.module.css";

type Props = {
  closeModal: () => void;
};
const CreateProductModal = ({ closeModal }: Props) => {
  return (
    <div className={classes.modalContainer} onClick={closeModal}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <h1>Add New Product</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={10}></textarea>
        <div className={classes.btnContainer}>
          <button onClick={closeModal}>Back</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
