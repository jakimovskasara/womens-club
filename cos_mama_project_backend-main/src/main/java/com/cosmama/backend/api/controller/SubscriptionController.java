package com.cosmama.backend.api.controller;

import com.cosmama.backend.api.model.Subscription;
import com.cosmama.backend.api.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class SubscriptionController {
    private SubscriptionService subscriptionService;

    @Autowired
    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @GetMapping("/subscription")
    public Subscription getSubscription(@RequestParam Long id) {
        Optional<Subscription> subscription = subscriptionService.getSubscription(id);
        return subscription.orElse(null);
    }
}
