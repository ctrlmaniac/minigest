package me.ctrlmaniac.minigest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.User;
import me.ctrlmaniac.minigest.repositories.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User saveUser(User u) {
        return userRepo.save(u);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
