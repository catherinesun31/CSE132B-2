import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/deposit-stylesheet.css';
import '../../styles/main-stylesheet.css';
import '../../styles/chat-stylesheet.css';



class Deposit extends React.Component {
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
        <div className="messages" id = "messages">Apartment Chat</div>
        <form className="message-form" >
        <input className="message-form__input" placeholder="Type a message.." type="text" id="message-id" />
        <input className="message-form__button" value="Send" type="button" onClick="sendMessage();" />
        </form>
      </div>
      
    );
  }
}

export default Deposit;
