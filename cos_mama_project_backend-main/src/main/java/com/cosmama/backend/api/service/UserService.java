package com.cosmama.backend.api.service;

import com.cosmama.backend.api.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private List<User> userList;

    public UserService() {
        userList = new ArrayList<>();

        User user = new User(0, "Test", "Testov", "test.testov@gmail.com");
        User user1 = new User(1, "Test1", "Testov1", "1test.testov@gmail.com");
        User user2 = new User(2, "Test2", "Testov2", "2test.testov@gmail.com");
        User user3 = new User(3, "Test3", "Testov3", "3test.testov@gmail.com");
        User user4 = new User(4, "Test4", "Testov4", "4test.testov@gmail.com");

        userList.addAll(Arrays.asList(user, user1, user2, user3, user4));
    }

    public Optional<User> getUser(Long id) {
        Optional optional = Optional.empty();
        for(User user : userList) {
            if (id == user.getId()) return Optional.of(user);
        }

        return optional;
    }

    public void createUser(User user) {
        userList.add(user);
    }
}
