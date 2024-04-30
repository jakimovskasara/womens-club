package com.cosmama.backend;

import com.cosmama.backend.api.model.User;
import com.cosmama.backend.api.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {

    private UserService userService;

    @BeforeEach
    void setUp() {
        userService = new UserService();
    }

    @Test
    void getUser_ReturnsUser_IfExists() {
        // Test that the user is returned if it exists
        Long existingUserId = 1L;
        Optional<User> foundUser = userService.getUser(existingUserId);

        assertTrue(foundUser.isPresent(), "User should exist");
        assertEquals(existingUserId, foundUser.get().getId(), "User ID should match");
    }

    @Test
    void getUser_ReturnsEmpty_IfNotExists() {
        // Test that no user is returned if it does not exist
        Long nonExistingUserId = 99L;
        Optional<User> foundUser = userService.getUser(nonExistingUserId);

        assertFalse(foundUser.isPresent(), "User should not exist");
    }

    @Test
    void createUser_AddsUserSuccessfully() {
        User newUser = new User(5, "New User", "NewUserLastName", "newuser@example.com");
        userService.createUser(newUser);

        Optional<User> addedUser = userService.getUser(5L);
        assertTrue(addedUser.isPresent(), "New user should be added");
        assertEquals("New User", addedUser.get().getFirstName(), "User first name should match");
    }
}