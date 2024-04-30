package com.cosmama.backend;

import com.cosmama.backend.api.model.Blog;
import com.cosmama.backend.api.controller.BlogController;
import com.cosmama.backend.api.service.BlogService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@WebMvcTest(BlogController.class)
class BlogControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BlogService blogService;

    @BeforeEach
    void setUp() {
        Blog blog = new Blog(1L, "Author1", "Title1", "Content1");
        Mockito.when(blogService.getBlog(1L)).thenReturn(Optional.of(blog));
        Mockito.when(blogService.getBlog(99L)).thenReturn(Optional.empty());
    }

    @Test
    void getBlog_ReturnsBlog_IfExists() throws Exception {
        mockMvc.perform(get("/blog?id=1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.title").value("Title1"))
                .andExpect(jsonPath("$.author").value("Author1"))
                .andExpect(jsonPath("$.content").value("Content1"))
                .andDo(print());
    }
}