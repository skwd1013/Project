package Linked;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.*;
import java.net.InetSocketAddress;
import Linked.MyLinkedList;

public class API {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/api/linkedlist", new LinkedListHandler());
        server.setExecutor(null);
        server.start();
    }

    static class LinkedListHandler implements HttpHandler {
        private MyLinkedList<Integer> list = new MyLinkedList<>();

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();
            String response = "";

            if (method.equalsIgnoreCase("POST")) {
                list.add(42); // 예시로 고정된 값 추가
                response = "Value added to the list";
            } else if (method.equalsIgnoreCase("GET")) {
                response = list.isEmpty() ? "List is empty" : "List is not empty";
            }

            exchange.sendResponseHeaders(200, response.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}