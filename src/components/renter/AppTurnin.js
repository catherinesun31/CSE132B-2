import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/application-stylesheet.css';
import '../../styles/main-stylesheet.css';
import '../../styles';
import Launcher from '../common/Launcher';
import messageHistory from '../common/messageHistory';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';


class AppTurnin extends React.Component {
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
            <div className="header">
                <h2>Apartment Application</h2>
            </div>
            <div className="app-body">
                <a href="https://www.nobelprize.org/nobel_prizes/economic-sciences/laureates/2011/sargent-lecture_slides.pdf" download>Download application</a>

                <div className="upload-form">
                    <form>
                        <div>
                            <label htmlFor="file">Upload Application</label>
                            <input type="file" id="file" name="file" multiple/>
                        </div>
                        <div>
                            <button className="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Launcher
            agentProfile={{
                teamName: 'Apartment Chat',
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

AppTurnin.propTypes = {
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(AppTurnin);