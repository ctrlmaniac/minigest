package me.ctrlmaniac.minigest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.User;
import me.ctrlmaniac.minigest.repositories.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User getUser(long id) {
        Optional<User> userOpt = userRepo.findById(id);

        if (userOpt.isPresent()) {
            User user = userOpt.get();

            return user;
        }

        return null;
    }

    public User saveUser(User u) {
        return userRepo.save(u);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public void deleteUserById(long id) {
        userRepo.deleteById(id);
    }

    public User updateUser(long id, User newUser) {
        Optional<User> oldUserOpt = userRepo.findById(newUser.getId());

        if (oldUserOpt.isPresent()) {
            User oldUser = oldUserOpt.get();

            oldUser.setEmail(newUser.getEmail());
            oldUser.setName(newUser.getName());
            oldUser.setSurname(newUser.getSurname());

            return userRepo.save(oldUser);
        }

        return null;
    }
}
