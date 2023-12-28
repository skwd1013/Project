package shopcart;

import java.util.*;


public class Cart {
    HashMap<String, Integer> items = new HashMap<>();

    public Cart() {

    }

    public void addProduct(String name, int count) {
        if (items.containsKey(name)) {
            // If the product already exists, add to the current count

            items.put(name,  items.getOrDefault(name, 0) + count);
            System.out.println("장바구니에 "+name+"의 숫자가 "+count+"개에서"+items.getOrDefault(name, 0)+"개로 변경되었습니다.");
        } else {
            // If it's a new product, add it with the given count
            items.put(name, count);
            System.out.println("장바구니에 "+name+"이 "+count+"개 추가되었습니다.");
        }
    }

    public void removeProduct(String name, int count) {
        if (items.containsKey(name)) {
            int currentCount = items.get(name);
            int newCount = currentCount - count;

            if (newCount <= 0) {
                items.remove(name);
                System.out.println(name+"아이템을 전부 삭제했습니다.");
            } else {
                items.put(name, newCount);
                System.out.println(name+"아이템을 "+count+"개 삭제했습니다.");
            }
        } else {
            System.out.println("Product not found: " + name);

        }
    }
    public void showItems() {
        for(Map.Entry<String, Integer> entry : items.entrySet()){
            System.out.println(entry.getKey()+":"+entry.getValue()+"개");
        }
    }


}
