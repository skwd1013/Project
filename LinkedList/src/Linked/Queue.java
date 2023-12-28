package Linked;

class Queue<T> {
    private MyLinkedList<T> list = new MyLinkedList<>();
    public T peek() {
        return list.getFirst();
    }
    public void enqueue(T value) {
        list.add(value);
    }
    public void printQueue() {
        list.printList();
    }
    public void dequeue() {
        T value = list.getFirst();
        list.remove(0);
    }



    public boolean isEmpty() {
        return list.isEmpty();
    }
}