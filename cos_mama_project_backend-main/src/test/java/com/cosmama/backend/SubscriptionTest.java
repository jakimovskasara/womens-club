package com.cosmama.backend;

import com.cosmama.backend.api.model.Subscription;
import com.cosmama.backend.api.model.User;
import com.cosmama.backend.api.utils.JWUtils;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SubscriptionTest {

    @Test
    void testSubscriptionConstructor() {
        User user = new User(200, "Bruce", "Wayne", "brwayne@gmail.com");
        JWUtils.Plan plan = JWUtils.Plan.BASIC;

        Subscription subscription = new Subscription(user, plan);
    }
}
