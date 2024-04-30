package com.cosmama.backend.api.model;

import com.cosmama.backend.api.utils.JWUtils;

public class Subscription {
    private long id;
    private User user;
    private JWUtils.Plan plan;

    public Subscription(User user, JWUtils.Plan plan) {
        this.user = user;
        this.plan = plan;
    }

    public long getId() {
        return this.id;
    }
}
