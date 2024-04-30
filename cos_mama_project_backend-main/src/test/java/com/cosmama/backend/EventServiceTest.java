package com.cosmama.backend;

import com.cosmama.backend.api.model.Event;
import com.cosmama.backend.api.service.EventService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.Month;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class EventServiceTest {

    private EventService eventService;

    @BeforeEach
    void setUp() {
        eventService = new EventService();
    }

    @Test
    void getEvent_ReturnsEvent_IfExists() {
        // Test that the event is returned if it exists
        Long existingEventId = 1L;
        Optional<Event> foundEvent = eventService.getEvent(existingEventId);

        assertTrue(foundEvent.isPresent(), "Event should exist");
        assertEquals(existingEventId, foundEvent.get().getId(), "Event ID should match");
    }

    @Test
    void getEvent_ReturnsEmpty_IfNotExists() {
        // Test that no event is returned if it does not exist
        Long nonExistingEventId = 99L;
        Optional<Event> foundEvent = eventService.getEvent(nonExistingEventId);

        assertFalse(foundEvent.isPresent(), "Event should not exist");
    }

    @Test
    void postEvent_AddsEventSuccessfully() {
        Event newEvent = new Event(5, "New Event", "A brand new event", LocalDate.now(), "New Location");
        eventService.postEvent(newEvent);

        Optional<Event> addedEvent = eventService.getEvent(5L);
        assertTrue(addedEvent.isPresent(), "New event should be added");
        assertEquals("New Event", addedEvent.get().getName(), "Event name should match");
    }
}