import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import profile from '../../img/profile.png';
import options from '../../img/options.png';
import '../../styles/group-stylesheet.css';
import '../../styles';
import Launcher from '../common/Launcher';
import messageHistory from '../common/messageHistory';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';



class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        messageList: this.props.messages,
        newMessagesCount: 0,
        isOpen: false
      };
      this._onMessageWasSent=this._onMessageWasSent.bind(this);
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
    this.props.actions.addMessage(message);
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      });
    }
  }
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />

        <div className="app-section content-section">
        <div className="header group-header">
          <h2>Apartment Group</h2>
          <img src={options} alt="Image not shown" className="gear" />
        </div>
        <div className="body">
          <ol>
            <li>
              <div className="member">
                <div className="member-info">
                  <img src={profile} alt="Image not shown" className="profile-pic" />
                  <a>Andrew (You)</a>
                </div>
              </div>
            </li>
            <li>
              <div className="member">
                <div className="member-info">
                  <img src={profile} alt="Image not shown" className="profile-pic" />
                  <a>Pete</a>
                </div>
              </div>
            </li>
            <li>
              <div className="member">
                <div className="member-info">
                  <img src={profile} className="profile-pic" />
                  <a>Vac</a>
                </div>
              </div>
            </li>
            </ol>
          </div>
          </div>
          <Launcher
            agentProfile={{
                teamName: 'Apartment Chat',
                imageURL: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
            }}
            onMessageWasSent={this._onMessageWasSent}
            messageList={this.state.messageList}
            showEmoji
                />
      </div>
      
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);
