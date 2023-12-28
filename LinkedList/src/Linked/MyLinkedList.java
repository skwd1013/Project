package Linked;
import java.util.*;
class MyLinkedList<T> {
    private Node<T> head;
    private int size;

    public MyLinkedList() {
        this.head = null;
        this.size = 0;  // 초기 크기는 0
    }

    public Iterator<T> iterator() {
        return new MyLinkedListIterator();
    }

    private class MyLinkedListIterator implements Iterator<T> {
        private Node<T> current = head;

        @Override
        public boolean hasNext() {
            return current != null;
        }

        @Override
        public T next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            T data = current.data;
            current = current.next;
            return data;
        }
    }
    // 리스트에 새 노드 추가
    public void add(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
        } else {
            Node<T> current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }

    // i번째 노드 삭제
    public void remove(int index) {
        if (head == null) return;

        if (index == 0) {
            head = head.next;
            return;
        }

        Node<T> current = head;
        for (int i = 0; current != null && i < index - 1; i++) {
            current = current.next;
        }

        if (current == null || current.next == null) return;

        current.next = current.next.next;
        size--;
    }

    // 리스트 출력
    public void printList() {
        Node<T> current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

    public T getFirst() {
        if (head == null) {
            throw new NoSuchElementException("List is empty");
        }
        return head.data;
    }


    public T getLast() {
        if (head == null) {
            throw new NoSuchElementException("List is empty");
        }

        Node<T> current = head;
        while (current.next != null) {
            current = current.next;
        }
        return current.data;
    }


    public boolean isEmpty() {
        return head == null;
    }


    public int size() {
        return size;
    }

}
