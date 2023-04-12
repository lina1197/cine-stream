import "../../src/styles/home.css";
import React, { useState } from 'react';

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { author, comment };
    setComments([...comments, newComment]);
    setAuthor('');
    setComment('');
  };

  const commentsTitle = comments.length === 0 ? 'No comments yet' : comments.length === 1 ? '1 comment' : `${comments.length} comments`;

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <button className="toggle-comments" onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <div className="comment-list">
          <h3 className="comment-count">{commentsTitle}</h3>
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <p className="comment-author">{comment.author}</p>
              <p className="comment-text">{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Name</label>
          <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" value={comment} onChange={(event) => setComment(event.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentBox;