package com.cosmama.backend.api.model;

import java.time.LocalDate;

public class Blog {
    private long id;
    private LocalDate dateOfCreation;
    private String author;
    private String title;
    private String content;

    public Blog(long id, String author, String title, String content) {
        this.id = id;
        this.dateOfCreation = LocalDate.now();
        this.author = author;
        this.title = title;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
