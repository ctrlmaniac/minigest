package me.ctrlmaniac.minigest.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.User;

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

    public User getByEmail(String email) {
        for (User user : users) {
            if (user.getEmail().equals(email)) {
                return user;
            }
        }

        return null;
    }

    public User createUser(User user) {
        users.add(user);

        return user;
    }

    public void deleteUser(String email) {
        Iterator<User> userIterator = users.iterator();

        while (userIterator.hasNext()) {
            User tempUser = userIterator.next();

            if (tempUser.getEmail().equals(email)) {
                userIterator.remove();
            }
        }
    }

    public User updateUser(String email, User updatedUser) {
        for (User user : users) {
            if (user.getEmail().equals(email)) {
                user.setEmail(updatedUser.getEmail());
                user.setName(updatedUser.getName());
                user.setSurname(updatedUser.getSurname());
            }
        }

        return updatedUser;
    }
}
