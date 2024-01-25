package com.example.boardsonic.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.boardsonic.model.entity.Board;
import com.example.boardsonic.model.request.CommentPostRequest;
import com.example.boardsonic.model.response.BoardResponse;
import com.example.boardsonic.repository.BoardRepository;
import com.example.boardsonic.repository.CommentRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentService {
  private final CommentRepository commentRepository;
  private final BoardRepository boardRepository;

  @Transactional
  public BoardResponse writeComment(CommentPostRequest request) {
    Optional<Board> boardOptional = boardRepository.findBoardWithCommentsByBoardNo(request.getBoardNo());
    Board board = boardOptional.orElseThrow(() -> new RuntimeException("존재하지 않는 게시글입니다!"));

    //board에 댓글 추가
    board.addComment(request.getCommentBody());
    boardRepository.save(board);

    return BoardResponse.from(board);
  }
}
