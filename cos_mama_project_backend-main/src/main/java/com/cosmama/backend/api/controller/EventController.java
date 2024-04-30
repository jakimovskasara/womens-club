package com.cosmama.backend.api.controller;

import com.cosmama.backend.api.model.Event;
import com.cosmama.backend.api.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/event")
    public Event getEvent(@RequestParam Long id) {
        Optional<Event> event = eventService.getEvent(id);
        return event.orElse(null);
    }

    @PostMapping("/event")
    public void postEvent(@RequestParam Event event) {
        eventService.postEvent(event);
    }
}
