package shopcart;

import java.util.*;


public class Cart {
    private Set<product> productSet;
    HashMap<String, Integer> map = new HashMap<>();

    public Cart() {

    }

    public void addProduct(String name, int count) {
        if (map.containsKey(name)) {
            // If the product already exists, add to the current count
            int currentCount = map.get(name);
            map.put(name, currentCount + count);
        } else {
            // If it's a new product, add it with the given count
            map.put(name, count);
        }
    }

    public void removeProduct(String name, int count) {
        if (map.containsKey(name)) {
            int currentCount = map.get(name);
            int newCount = currentCount - count;

            if (newCount <= 0) {
                map.remove(name);
            } else {
                map.put(name, newCount);
            }
        } else {
            System.out.println("Product not found: " + name);
        }
    }
    public void showItems() {
        for(Map.Entry<String, Integer> entry : map.entrySet()){
            System.out.println(entry.getKey()+":"+entry.getValue()+"개");
        }
    }


}
