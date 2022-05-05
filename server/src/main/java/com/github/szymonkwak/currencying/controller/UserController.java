package com.github.szymonkwak.currencying.controller;

import com.github.szymonkwak.currencying.entity.User;
import com.github.szymonkwak.currencying.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/user")
    public User fetchUserByName(@RequestParam("name") String name) {
        return userService.fetchUserByName(name);
    }

    @DeleteMapping("/user")
    public String deleteUserById(@RequestParam("id") Long userId) {
        userService.deleteUserById(userId);
        return "Deleted Successfully";
    }
}
