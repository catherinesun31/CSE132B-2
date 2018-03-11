import React, {Component} from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import Launcher from '../common/Launcher';
import messageHistory from '../common/messageHistory';
import '../../styles/deposit-stylesheet.css';
import '../../styles/main-stylesheet.css';
import '../../styles';



class Deposit extends React.Component {
    constructor() {
        super();
        this.state = {
            messageList: messageHistory,
            newMessagesCount: 0,
            isOpen: false
          };
          this._onMessageWasSent=this._onMessageWasSent.bind(this);
      }
     
      _onMessageWasSent(message) {
        this.setState({
          messageList: [...this.state.messageList, message]
        });
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
                <h2>Pay Deposit</h2>
            </div>
            <div className="body">
                <ol>
                    <li>
                        <div className="member">
                            <div className="member-info">
                                <a>Amount Due: $500</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="member">
                            <div className="member-info">
                                <a>Credit: $0</a>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        
        <div className="box-holder">
            <div className="box-container">
                <div className="box-header">
                    <h3>Payment Information</h3>
                </div>
                <div className="box-body">
                    <form className="input-form">
                        <div className="input-title">Name on Card:</div>
                        <input type="text" name="nameC" className="input-box"/>
                        <div className="input-title">Credit Card Number:</div>
                        <input type="text" name="cardN" className="input-box"/>
                        <div className="input-title">Expiration Date:</div>
                        <input type="text" name="expD" className="input-box"/>
                        <div className="input-title">Security Code:</div>
                        <input type="text" name="secC" className="input-box"/>
                        <div className="input-title">Zip Code</div>
                        <input type="text" name="zipC" className="input-box" />
                        <br/>
                        <br/>
                        <input type="button" onClick="" value="Submit Payment" name="submit" className="button"/>
                    </form>
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

export default Deposit;
