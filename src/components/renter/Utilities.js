import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import Launcher from '../common/Launcher';
import '../../styles/utilities-stylesheet.css';
import '../../styles/main-stylesheet.css';
import '../../styles';
import messageHistory from '../common/messageHistory';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';




class Utilities extends React.Component {
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
                <h2>Set Up Utilities</h2>

            </div>
        
            <div className="main-body">
                <div className="box-holder">
                    <div className="box-container">
                        <div className="box-header">
                            <h3>Utilities Information</h3>
                        </div>
                        <div className="box-body">
                            <form className="input-form">
                                <div className="input-title">SDG&E Account Number:</div>
                                <input type="text" name="sdge" className="input-box"/>
                                <div className="input-title">Water and Sewage Account Number:</div>
                                <input type="text" name="water" className="input-box"/>
                                <div className="input-title">Interet Provider Account Number:</div>
                                <input type="text" name="internet" className="input-box"/>
                                <br/>
                                <br/>
                                <input type="button" onClick="" value="Submit" name="submit" className="button"/>
                            </form>
                        </div>
                    </div>
                </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Utilities);
