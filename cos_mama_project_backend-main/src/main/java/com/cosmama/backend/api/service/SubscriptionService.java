package com.cosmama.backend.api.service;

import com.cosmama.backend.api.model.Subscription;
import com.cosmama.backend.api.model.User;
import com.cosmama.backend.api.utils.JWUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {
    private List<Subscription> subscriptionList;

    public SubscriptionService() {
        subscriptionList = new ArrayList<>();

        Subscription subscription= new Subscription(new User(256, "Radko", "Mishev", "rm.mishev@gmail.com"), JWUtils.Plan.PREMIUM);
        Subscription subscription1 = new Subscription(new User(155, "Mariela", "Nikolova", "marielka@gmail.com"), JWUtils.Plan.PREMIUM);
        Subscription subscription2 = new Subscription(new User(112, "Bozhidara", "Rusenova", "darirusenova@gmail.com"), JWUtils.Plan.PREMIUM);
        Subscription subscription3 = new Subscription(new User(26, "Sara", "Jakimovska", "sjakimovska@gmail.com"), JWUtils.Plan.BASIC);
        Subscription subscription4 = new Subscription(new User(124, "Petya", "Dimkina", "pdim@gmail.com"), JWUtils.Plan.FREE);

        subscriptionList.addAll(Arrays.asList(subscription, subscription1, subscription2, subscription3, subscription4));
    }

    public Optional<Subscription> getSubscription(Long id) {
        Optional<Subscription> optional = Optional.empty();
        for(Subscription subscription : subscriptionList) {
            if (id == subscription.getId()) return Optional.of(subscription);
        }

        return optional;
    }
}
