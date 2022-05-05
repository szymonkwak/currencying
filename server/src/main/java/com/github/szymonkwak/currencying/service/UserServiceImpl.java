package com.github.szymonkwak.currencying.service;

import com.github.szymonkwak.currencying.entity.User;
import com.github.szymonkwak.currencying.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User fetchUserByName(String name) {
        return userRepository.findByName(name);
    }

    @Override
    public void deleteUserById(Long userId) {
        userRepository.deleteById(userId);
    }
}
