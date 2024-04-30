package com.cosmama.backend;
import com.cosmama.backend.api.model.Event;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EventTest {
    private Event event;
    private final long id = 1L;
    private final String name = "Annual Conference";
    private final String description = "This is a description of the event.";
    private final LocalDate endDate = LocalDate.now().plusDays(5);
    private final String location = "Conference Hall, Springfield";

    @BeforeEach
    void setUp() {
        event = new Event(id, name, description, endDate, location);
    }

    @Test
    void testEventConstructorAndGetterMethods() {
        assertEquals(id, event.getId());
        assertEquals(name, event.getName());
        assertEquals(description, event.getDescription());
        assertEquals(endDate, event.getEndDate());
        assertEquals(location, event.getLocation());
    }

    @Test
    void testSetterMethods() {
        long newId = 2L;
        String newName = "Workshop";
        String newDescription = "A description for a different event.";
        LocalDate newEndDate = LocalDate.now().plusDays(10);
        String newLocation = "Downtown Center";

        event.setId(newId);
        event.setName(newName);
        event.setDescription(newDescription);
        event.setEndDate(newEndDate);
        event.setLocation(newLocation);

        assertEquals(newId, event.getId());
        assertEquals(newName, event.getName());
        assertEquals(newDescription, event.getDescription());
        assertEquals(newEndDate, event.getEndDate());
        assertEquals(newLocation, event.getLocation());
    }
}
