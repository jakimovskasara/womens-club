package com.cosmama.backend;

import com.cosmama.backend.api.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserTest {
    private User user;
    private final long id = 1L;
    private final String firstName = "John";
    private final String lastName = "Doe";
    private final String email = "john.doe@example.com";

    @BeforeEach
    void setUp() {
        user = new User(id, firstName, lastName, email);
    }

    @Test
    void testUserConstructor() {
        assertEquals(id, user.getId());
        assertEquals(firstName, user.getFirstName());
        assertEquals(lastName, user.getLastName());
        assertEquals(email, user.getEmail());
    }

    @Test
    void testSetters() {
        long newId = 2L;
        String newFirstName = "Jane";
        String newLastName = "Smith";
        String newEmail = "jane.smith@example.com";

        user.setId(newId);
        user.setFirstName(newFirstName);
        user.setLastName(newLastName);
        user.setEmail(newEmail);

        assertEquals(newId, user.getId());
        assertEquals(newFirstName, user.getFirstName());
        assertEquals(newLastName, user.getLastName());
        assertEquals(newEmail, user.getEmail());
    }
}

