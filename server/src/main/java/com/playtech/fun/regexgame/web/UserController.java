package com.playtech.fun.regexgame.web;

import com.playtech.fun.regexgame.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/users/{user}", method = RequestMethod.PUT)
    String register(@PathVariable String user) {
        if (userService.register(user)) {
            return null; // OK
        }
        return "This username is already taken, please choose another one.";
    }

}
