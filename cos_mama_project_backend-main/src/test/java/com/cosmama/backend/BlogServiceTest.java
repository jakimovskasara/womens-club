package com.cosmama.backend;

import com.cosmama.backend.api.model.Blog;
import com.cosmama.backend.api.service.BlogService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class BlogServiceTest {

    private BlogService blogService;

    @BeforeEach
    void setUp() {
        blogService = new BlogService();
    }

    @Test
    void getBlog_ReturnsBlog_IfExists() {
        // Test that the blog is returned if it exists
        Long existingBlogId = 1L;
        Optional<Blog> foundBlog = blogService.getBlog(existingBlogId);

        assertTrue(foundBlog.isPresent(), "Blog should exist");
        assertEquals(existingBlogId, foundBlog.get().getId(), "Blog ID should match");
    }

    @Test
    void getBlog_ReturnsEmpty_IfNotExists() {
        // Test that no blog is returned if it does not exist
        Long nonExistingBlogId = 99L;
        Optional<Blog> foundBlog = blogService.getBlog(nonExistingBlogId);

        assertFalse(foundBlog.isPresent(), "Blog should not exist");
    }
}