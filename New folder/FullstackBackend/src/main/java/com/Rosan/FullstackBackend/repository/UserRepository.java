package com.Rosan.FullstackBackend.repository;

import com.Rosan.FullstackBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
