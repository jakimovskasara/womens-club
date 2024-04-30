package com.cosmama.backend.api.service;

import com.cosmama.backend.api.model.Event;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    private List<Event> eventList;

    public EventService() {
        eventList = new ArrayList<>();

        Event event = new Event(0, "Event", "Testing events", LocalDate.of(2024, Month.JUNE, 24), "Location");
        Event event1 = new Event(1,"Event1", "Testing events1", LocalDate.of(2024, Month.AUGUST, 12), "Location1");
        Event event2 = new Event(2,"Event2", "Testing events2", LocalDate.of(2024, Month.SEPTEMBER, 7), "Location2");
        Event event3 = new Event(3,"Event3", "Testing events3", LocalDate.of(2024, Month.OCTOBER, 16), "Location3");
        Event event4 = new Event(4,"Event4", "Testing events4", LocalDate.of(2024, Month.OCTOBER, 28), "Location4");

        eventList.addAll(Arrays.asList(event, event1, event2, event3, event4));
    }

    public Optional<Event> getEvent(Long id) {
        Optional<Event> optional = Optional.empty();
        for(Event event : eventList) {
            if (id == event.getId()) return Optional.of(event);
        }

        return optional;
    }

    public void postEvent(Event event) {
        eventList.add(event);
    }
}
