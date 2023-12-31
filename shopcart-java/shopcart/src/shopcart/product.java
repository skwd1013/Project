package shopcart;

import java.util.Objects;
public class product {
    String key;
    String name;
    int price;

    //Product 생성자
    public product(String key, String name, int price) {
        this.key = key;
        this.name = name;
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        product product = (product) o;
        return key.equals(product.key);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}