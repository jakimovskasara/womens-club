package com.cosmama.backend;
import com.cosmama.backend.api.model.Blog;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.time.LocalDate;

public class BlogTest {
    private Blog blog;
    private final long id = 1L;
    private final String author = "John Doe";
    private final String title = "Effective Testing";
    private final String content = "Unit testing is essential for quality software.";

    @BeforeEach
    public void setUp() {
        blog = new Blog(id, author, title, content);
    }

    @Test
    public void testBlogConstructor() {
        assertEquals(id, blog.getId());
        assertEquals(author, blog.getAuthor());
        assertEquals(title, blog.getTitle());
        assertEquals(content, blog.getContent());
    }

    @Test
    public void testSetters() {
        long newId = 2L;
        String newAuthor = "Jane Smith";
        String newTitle = "The Art of Unit Testing";
        String newContent = "Writing tests can significantly improve code quality.";

        blog.setId(newId);
        blog.setAuthor(newAuthor);
        blog.setTitle(newTitle);
        blog.setContent(newContent);

        assertEquals(newId, blog.getId());
        assertEquals(newAuthor, blog.getAuthor());
        assertEquals(newTitle, blog.getTitle());
        assertEquals(newContent, blog.getContent());
    }
}