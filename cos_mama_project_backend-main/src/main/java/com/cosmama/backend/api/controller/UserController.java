package com.cosmama.backend.api.controller;

import com.cosmama.backend.api.model.User;
import com.cosmama.backend.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public User getUser(@RequestParam Long id) {
        Optional<User> user = userService.getUser(id);
        return (User) user.orElse(null);
    }

    @PostMapping("/user")
    public void createUser(@RequestParam User user) {
        userService.createUser(user);
    }
}
