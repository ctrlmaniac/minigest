package me.ctrlmaniac.minigest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.models.User;

@Service
public class UserService {
    List<User> users;

    public UserService() {
        users = new ArrayList<>();

        users.add(new User("davide.dicriscito@gmail.com", "Davide", "Di Criscito"));
    }

    public List<User> getAll() {
        return users;
    }
}
