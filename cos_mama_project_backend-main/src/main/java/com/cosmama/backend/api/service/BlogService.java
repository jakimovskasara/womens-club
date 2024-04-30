package com.cosmama.backend.api.service;

import com.cosmama.backend.api.model.Blog;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class BlogService {
    private List<Blog> blogList;

    public BlogService() {
        blogList = new ArrayList<>();

        Blog blog = new Blog(0, "Az", "Testing blogs", "This is a test blog blah blah");
        Blog blog1 = new Blog(1,"Author1", "Title1", "Content1");
        Blog blog2 = new Blog(2,"Author2", "Title2", "Content2");
        Blog blog3 = new Blog(3,"Author3", "Title3", "Content3");
        Blog blog4 = new Blog(4,"Author4", "Title4", "Content4");

        blogList.addAll(Arrays.asList(blog, blog1, blog2, blog3, blog4));
    }

    public Optional<Blog> getBlog(Long id) {
        Optional<Blog> optional = Optional.empty();
        for(Blog blog : blogList) {
            if (id == blog.getId()) return Optional.of(blog);
        }

        return optional;
    }
}
