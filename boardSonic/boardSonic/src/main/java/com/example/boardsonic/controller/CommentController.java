package com.example.boardsonic.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.boardsonic.model.request.CommentPostRequest;
import com.example.boardsonic.model.response.BoardResponse;
import com.example.boardsonic.service.CommentService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CommentController {
  private final CommentService commentService;

  //댓글 등록
  @PostMapping("comment")
  public BoardResponse writeComment(
    @RequestBody CommentPostRequest commentPostRequest
  ) {
    return commentService.writeComment(commentPostRequest);
  }

}
