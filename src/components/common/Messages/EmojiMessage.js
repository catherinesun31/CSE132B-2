import React, {PropTypes, Component } from 'react';


const EmojiMessage = (props) => {
  return <div className="sc-message--emoji">{props.data.emoji}</div>;
};

EmojiMessage.propTypes = {
  data: PropTypes.object,
  emoji: PropTypes.string
};


export default EmojiMessage;