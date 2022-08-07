import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import { ProductDetails } from "./pages/ProductDetails";

export type StoreItemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  categoryId: number;
  inBasket: number;
};
export type StoreType = StoreItemType[];

function App() {
  const [products, setProducts] = useState<StoreType>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:4006/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  function increaseProductQuantity(product: StoreItemType) {
    const productCopy: StoreType = structuredClone(products);

    const match = productCopy.find((target) => target.id === product.id)!;
    match.inBasket++;

    setProducts(productCopy);
  }
  function decreaseProductQuantity(product: StoreItemType) {
    const productCopy: StoreType = structuredClone(products);
    ``;
    const match = productCopy.find((target) => target.id === product.id)!;
    match.inBasket--;

    setProducts(productCopy);
  }

  return (
    <>
      <Header />
      <main>
        <div className="products-container">
          <Routes>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home search={search} />} />

            <Route path="*" element={<Error404 />} />
            <Route
              path="/productDetails:id"
              element={
                <ProductDetails
                  increaseProductQuantity={increaseProductQuantity}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
