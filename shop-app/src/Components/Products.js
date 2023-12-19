import React, { useState } from "react";
import ProductList from "./ProductList";
import "./Products.css";

const Products = () => {
  const [category, setCategory] = useState("all");
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="buttons-container">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <ProductList category={category} />
    </div>
  );
};

export default Products;
