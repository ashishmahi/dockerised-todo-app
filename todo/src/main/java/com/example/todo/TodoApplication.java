package com.example.todo;

import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONArray;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

@SpringBootApplication
@RestController
public class TodoApplication {

    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }

    @RequestMapping("/todos")
    public String getTodo() {
        try {
            String cwd = System.getProperty("user.dir");
            System.out.println("Current working directory : " + cwd);
            byte[] contents = Files.readAllBytes(Paths.get("todos.json"));
            return new String(contents, "UTF-8");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    @RequestMapping(value = "/todos", method = RequestMethod.POST)
    public void postTodo(@RequestBody Todo todo) {
    }


    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
    }

}

