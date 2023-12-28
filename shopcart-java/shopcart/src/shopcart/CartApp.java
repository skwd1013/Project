package shopcart;

import java.util.*;

public class CartApp {
    public static void main(String[] args) {
        //상품 목록 생성
        Set<product> productSet = new HashSet<>();
        //TODO: 상품 클래스를 생성하여 상품 목록에 넣는다.
        productSet.add(new product("key1", "우유", 1000));
        productSet.add(new product("key2", "라면", 2000));
        productSet.add(new product("key3", "냉면", 5000));
        productSet.add(new product("key4", "김밥", 3000));
        //상품 목록 확인
        System.out.println("고유한 상품 목록:");
        for(shopcart.product product : productSet){
            System.out.println(product.getName() +":"+ product.getPrice());
        }

//        장바구니 생성
        Cart myCart = new Cart();

        //TODO:상품을 장바구니에 추가

        myCart.addProduct("우유", 2); // Example quantity
        myCart.addProduct("라면", 5); // Example quantity
        myCart.addProduct("냉면", 5); // Example quantity
        myCart.addProduct("냉면", 5); // Example quantity

        System.out.println("추가 후 :");
        myCart.showItems();
        //TODO:상품을 장바구니에 제거
        myCart.removeProduct("냉면", 2);
        myCart.removeProduct("우유", 1);
        myCart.removeProduct("치킨", 1);

        //TODO:상품을 장바구니에 현재 담긴 상품들을 출력 (상품이름,각 상품의 갯수)
        System.out.println("삭제 후 :");
        myCart.showItems();
    }
}
