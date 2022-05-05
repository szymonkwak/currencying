package com.github.szymonkwak.currencying.service;

import com.github.szymonkwak.currencying.entity.User;

public interface UserService {

    User saveUser(User user);

    User fetchUserByName(String name);

    void deleteUserById(Long userId);
}
