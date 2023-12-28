package Linked;

class Stack<T> {
    private final MyLinkedList<T> list = new MyLinkedList<>();

    public void push(T value) {
        list.add(value);
    }

    public T pop() {
        T value = list.getLast();
        list.remove(list.size() - 1);
        return value;
    }

    public T peek() {
        return list.getLast();
    }
    public void printStack() {
        list.printList();
    }
    public boolean isEmpty() {
        return list.isEmpty();
    }
}