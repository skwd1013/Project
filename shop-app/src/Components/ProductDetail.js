import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import CartSingleton from "../CartSingleton";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);
  const handleAddToCart = () => {
    CartSingleton.getInstance().addToCart({ ...product, quantity: 1 });
    alert(`${product.title}가 장바구니에 추가되었습니다.`);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-info-container">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">가격: ${product.price}</p>
        <button onClick={handleAddToCart} className="product-button">
          장바구니에 담기
        </button>
        <button onClick={navigateToCart} className="product-button">
          장바구니로 이동
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
