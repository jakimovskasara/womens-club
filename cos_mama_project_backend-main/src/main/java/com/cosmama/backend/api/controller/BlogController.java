package com.cosmama.backend.api.controller;

import com.cosmama.backend.api.model.Blog;
import com.cosmama.backend.api.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class BlogController {
    private BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping("/blog")
    public Blog getBlog(@RequestParam Long id) {
        Optional<Blog> blog = blogService.getBlog(id);
        return blog.orElse(null);
    }

}
