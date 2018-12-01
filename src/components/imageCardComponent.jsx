/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/ImageCardComponent.scss';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import CommentCard from './comment-card';

class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      fields: {
        _id: this.props.image._id,
        caption: this.props.image.caption,
        tags: this.props.image.tags,
        comments: this.props.image.comments,
        likes: this.props.image.likes,
        src: this.props.image.src,
        isLiked: this.props.image.isLiked,
      },
    };
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleOnClick = (event) => {
    axios.patch(`/${this.state.fields._id}/likes`, null, {
      headers: {
        Authorization: TokenManager.getToken(),
      },

    })
      .then((response) => {
        this.setState({
          fields: response.data,
        });
      });

    event.preventDefault();
  };

  render() {
    return (
      <div className="imageCard">
        <div className="imageCardLogo">
          <i className="fas fa-image" />
        </div>
        <div className="theImage">
          <img src={this.state.fields.src} />
        </div>
        <div className="interaction-div">
          <div className="caption">
            <i className="fas fa-comment" />
            {this.state.fields.caption}
          </div>
          <div className="tagProp">
            <i className="fas fa-hashtag" />
            {this.state.fields.tags}
          </div>
          <div className="commentProp">
            <i className="far fa-comments" />
            {this.state.fields.comments.map((comment) => {
              return (
                <CommentCard
                  key={comment._id}
                  author={comment.author}
                  message={comment.content}
                />
              );
            })}
          </div>
          <div className="likesProp">
            <i className="fas fa-thumbs-up" />
            {this.state.fields.likes}
          </div>
          <div>
            <label> Add a comment  </label>
            <input
              type="text"
              name="comment"
              className="input-comments"
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
            <button
              className="commentsButton"
              type="submit"
              onClick={this.handleComment}
            >
              Comment
            </button>
            <button className="likesButton" type="submit" onClick={this.handleLike}><i className="fas fa-heart" />Like</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCardComponent;
