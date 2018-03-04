import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import apt1 from '../../img/axiom-apt1.jpg';
import apt2 from '../../img/int-apt1.jpg';
import apt3 from '../../img/int-apt2.jpg';
import apt4 from '../../img/int-apt3.jpg';
import options from '../../img/options.png';
import '../../styles/apt-stylesheet.css';
import '../../styles/main-stylesheet.css';
import '../../styles/chat-stylesheet.css';



class Apt extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />

        <div className="app-section content-section">
            <div className="header">
                <h2>Sea Model Unit 2436</h2>
            </div>

            <div className="apt-pics">
                <ol>
                    <li>
                        <img src={apt1} className="apt-pic"/>
                    </li>
                    <li>
                        <img src={apt2} className="apt-pic"/>
                    </li>
                    <li>
                        <img src={apt3} className="apt-pic"/>
                    </li>
                    <li>
                        <img src={apt4} className="apt-pic"/>
                    </li>
                </ol>
            </div>

            <div className="clearer"></div>

            <div className="body">
                <div className="desc-section">
                    <h2>Description</h2>
                    <p>
                        Price: $2330<br/>
                        2 Bed, 2 Bath<br/>
                        Washing machine and dryer<br/>
                        964 square feet<br/>
                        3rd floor<br/>
                        Balcony access<br/>
                    </p>
                </div>

                <div className="upload-form">
                    <form>
                        <div>
                            <button className="button">Choose Apartment</button>
                        </div>
                    </form>
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

export default Apt;
