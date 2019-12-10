import React, { Component } from 'react';

import comment from './comImage/comment.png';

class Comment extends Component {
  state = {
    commentSelected: false
  };

  changeIcon = () =>
    this.setState(({ commentSelected }) => ({
      commentSelected: !commentSelected
    }));

  render() {
    const { commentSelected } = this.state;
    const { i1, i2 } = this.props;
    return (
      <div className="comment">
        <div>
          <img
            src={comment}
            alt=""
            onClick={() => this.changeIcon(commentSelected)}
          />
          {/* <i
            class="far fa-comment"
            onClick={() => this.changeIcon(commentSelected)}
          ></i> */}
        </div>
        {commentSelected ? i2 : i1}
      </div>
    );
  }
}

export default Comment;