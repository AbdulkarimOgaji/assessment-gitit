import { Route, Routes } from "react-router-dom";
import CreateProductModal from "./components/CreateProductModal";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="App">
      <NavBar openModal={openModal} />
      {modalOpen && <CreateProductModal closeModal={closeModal} />}

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<ProductList openModal={openModal} />}
          />
          <Route
            path="products/:id"
            element={<ProductView openModal={openModal} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
