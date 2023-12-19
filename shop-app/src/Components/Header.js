import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그아웃 함수
  const handleLogout = () => {
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    if (!isLoggedIn) {
      navigate("/");
    }
    // 추가 로그아웃 처리 로직
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>shop</h1>
        </Link>
      </div>
      <div className="icons">
        <Link to="/cart">
          <img src="/images/cart.png" alt="cart"></img>
        </Link>
        <Link to="/cart">
          <img src="/images/mypage.png" alt="mypage"></img>
        </Link>
        {isLoggedIn ? (
          <img
            src="/images/logout.png"
            alt="logout"
            onClick={handleLogout}
          ></img>
        ) : (
          <Link to="/login">
            <img src="/images/login.png" alt="login"></img>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
