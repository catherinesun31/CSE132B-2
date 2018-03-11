import React, {PropTypes, Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.png';

const TextMessage = (props) => {
  return <div className="sc-message--text">{props.data.text}</div>;
};

TextMessage.propTypes = {
  data: PropTypes.object,
  text: PropTypes.string.isRequired
};

export default TextMessage;