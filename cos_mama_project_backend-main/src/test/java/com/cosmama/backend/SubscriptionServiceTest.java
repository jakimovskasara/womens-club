package com.cosmama.backend;

import com.cosmama.backend.api.model.Subscription;
import com.cosmama.backend.api.model.User;
import com.cosmama.backend.api.service.SubscriptionService;
import com.cosmama.backend.api.utils.JWUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class SubscriptionServiceTest {

    private SubscriptionService subscriptionService;

    @BeforeEach
    void setUp() {
        subscriptionService = new SubscriptionService();
    }

    @Test
    void getSubscription_ReturnsEmpty_IfNotExists() {
        // Test that no subscription is returned if it does not exist
        Long nonExistingSubscriptionId = 999L; // Arbitrary ID not in the list
        Optional<Subscription> foundSubscription = subscriptionService.getSubscription(nonExistingSubscriptionId);

        assertFalse(foundSubscription.isPresent(), "Subscription should not exist");
    }
}