import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import CartSingleton from "../CartSingleton";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch products based on the category
    const apiUrl =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    axios
      .get(apiUrl)
      .then((response) => setProducts(response.data.slice(0, 20)))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("상품을 불러오는데 실패했습니다."); // 에러 메시지 설정
      });
  }, [category]);

  // Function to handle adding to cart
  const handleAddToCart = (product) => {
    CartSingleton.getInstance().addToCart(product);
    alert(`${product.title}가 장바구니에 추가되었습니다.`);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>{category} Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <p>{product.title}</p>
              <div className="product-details">
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
