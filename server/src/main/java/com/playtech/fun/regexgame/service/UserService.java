package com.playtech.fun.regexgame.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private Set<String> users = new HashSet<String>();

    public boolean register(String user) {
        if (users.contains(user)) {
            return false;
        }

        logger.info("Registering new user {}", user);
        users.add(user);
        return true;
    }
}
