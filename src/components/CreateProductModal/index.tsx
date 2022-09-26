import classes from "./modal.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  closeModal: () => void;
};
const CreateProductModal = ({ closeModal }: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleCreateProduct = () => {
    if (name === "" && desc === "") return;
    const prodStr = localStorage.getItem("products") || "[]";
    const currentProducts = JSON.parse(prodStr);
    const id = currentProducts.length || 1;
    const newProduct = { id, name, description: desc, dateCreated: new Date() };
    localStorage.setItem(
      "products",
      JSON.stringify([...currentProducts, newProduct])
    );
    closeModal();
    navigate(`/products/${id}`);
  };

  return (
    <div className={classes.modalContainer} onClick={closeModal}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <h1>Add New Product</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={10}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <div className={classes.btnContainer}>
          <button onClick={closeModal}>Back</button>
          <button onClick={handleCreateProduct}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
