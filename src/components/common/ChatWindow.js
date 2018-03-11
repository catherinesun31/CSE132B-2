import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import ChatHeader from './ChatHeader';


class ChatWindow extends Component {
    constructor(props) {
      super(props);
      this.onUserInputSubmit = this.onUserInputSubmit.bind(this);
    }

    onUserInputSubmit(message) {
      this.props.onUserInputSubmit(message);
    }

    onMessageReceived(message) {
      this.setState({ messages: [...this.state.messages, message] });
    }

    render() {
      let messageList = this.props.messageList || [];
      let classList = [
        "sc-chat-window",
        (this.props.isOpen ? "opened" : "closed")
      ];
      return (
        <div className={classList.join(' ')}>
          <ChatHeader
            teamName={this.props.agentProfile.teamName}
            imageUrl={this.props.agentProfile.imageUrl}
            onClose={this.props.onClose}
          />
          <MessageList
            messages={messageList}
            imageUrl={this.props.agentProfile.imageUrl}
          />
          <UserInput showEmoji={this.props.showEmoji} onSubmit={this.onUserInputSubmit}/>
        </div>
      );
    }
}

ChatWindow.propTypes = {
  showEmoji: PropTypes.bool,
  onUserInputSubmit: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.func,
  agentProfile: PropTypes.object,
  teamName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

export default ChatWindow;
