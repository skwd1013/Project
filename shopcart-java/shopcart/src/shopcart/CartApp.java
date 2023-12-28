package shopcart;

import java.util.*;
import java.io.*;
public class CartApp {
    public static void main(String[] args) {
        //상품 목록 생성
        Set<product> productSet = new HashSet<>();

        try (BufferedReader br = new BufferedReader(new FileReader("D:\\GIT\\Project-november\\shopcart-java\\shopcart\\src\\shopcart\\products.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                if(values.length == 3) {
                    productSet.add(new product(values[0], values[1], Integer.parseInt(values[2])));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Rest of your CartApp code...
        // Example: Print out the products
        for (product p : productSet) {
            System.out.println(p.getName() + " : " + p.getPrice());
        }
        System.out.println();

//        장바구니 생성
        Cart myCart = new Cart();

        //TODO:장바구니 출력
        System.out.println("장바구니 목록");
        myCart.showItems();
        System.out.println();
        //TODO:상품을 장바구니에 추가
        System.out.println("장바구니 추가");
        myCart.addProduct("우유", 2); // Example quantity
        myCart.addProduct("라면", 5); // Example quantity
        myCart.addProduct("냉면", 5); // Example quantity
        myCart.addProduct("냉면", 5); // Example quantity
        System.out.println();
        System.out.println("장바구니 목록");
        myCart.showItems();
        System.out.println();
        //TODO:상품을 장바구니에 제거
        System.out.println("장바구니 삭제");
        myCart.removeProduct("냉면", 5);

        myCart.removeProduct("우유", 2);

        myCart.removeProduct("치킨", 1);
        System.out.println();
        //TODO:상품을 장바구니에 현재 담긴 상품들을 출력 (상품이름,각 상품의 갯수)
        System.out.println("장바구니 목록");

        myCart.showItems();
    }
}
