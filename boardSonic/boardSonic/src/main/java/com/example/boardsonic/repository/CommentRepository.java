package com.example.boardsonic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boardsonic.model.entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
