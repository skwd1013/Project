class CartSingleton {
  static instance = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new CartSingleton();
    }
    return this.instance;
  }

  getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(productToAdd) {
    const cart = this.getCart();
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex >= 0) {
      // 상품이 이미 존재할 경우 수량만 증가
      cart[existingProductIndex].quantity += 1;
    } else {
      // 새 상품 추가
      cart.push({ ...productToAdd, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  removeFromCart(id) {
    let cart = this.getCart();
    const existingProductIndex = cart.findIndex((item) => item.id === id);

    if (existingProductIndex >= 0 && cart[existingProductIndex].quantity > 1) {
      // 수량이 1보다 많을 경우 수량 감소
      cart[existingProductIndex].quantity -= 1;
    } else {
      // 수량이 1이거나 해당 상품이 없는 경우 상품 제거
      cart = cart.filter((item) => item.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem("cart");
  }
}

export default CartSingleton;
