package com.cosmama.backend;

import com.cosmama.backend.api.controller.EventController;
import com.cosmama.backend.api.model.Event;
import com.cosmama.backend.api.service.EventService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@WebMvcTest(EventController.class)
class EventControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EventService eventService;

    @BeforeEach
    void setUp() {
        Event event = new Event(1L, "Tech Conference", "Annual tech conference", LocalDate.now(), "Convention Center");
        Mockito.when(eventService.getEvent(1L)).thenReturn(Optional.of(event));
        Mockito.when(eventService.getEvent(99L)).thenReturn(Optional.empty());
    }

    @Test
    void getEvent_ReturnsEvent_IfExists() throws Exception {
        mockMvc.perform(get("/event?id=1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Tech Conference"))
                .andDo(print());
    }
}