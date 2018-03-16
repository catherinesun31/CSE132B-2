import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/deposit-office-stylesheet.css';
import '../../styles/main-stylesheet.css';
import '../../styles';
import Launcher from '../common/Launcher';
import messageHistory from '../common/messageHistory';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';


class DepositApv extends React.Component {
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
        <TodoList userType="office" />
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
        

            <div className="deposit-box-holder">
                <div className="box-container">
                    <div className="box-header">
                        <h3>Approval</h3>
                    </div>
                    <div className="box-body">
                        <form className="input-form">
                            <div className="input-title">Signature of Approval:</div>
                            <input type="text" name="sig" className="input-box"/>
                            <br/>
                            <br/>
                            <input type="button" onClick="" value="Approve" name="approve" className="button"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Launcher
            agentProfile={{
                teamName: 'Apartment #253 Chat',
                imageURL: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
            }}
            //onMessageWasSent={this._onMessageWasSent.bind(this)}
            onMessageWasSent={this._onMessageWasSent}
            messageList={this.state.messageList}
            showEmoji
                />
      </div>
    );
  }
}

DepositApv.propTypes = {
    messages: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
  
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(DepositApv);