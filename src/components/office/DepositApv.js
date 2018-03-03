import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/deposit-office-stylesheet.css';
import '../../styles/main-stylesheet.css';



class DepositApv extends React.Component {
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
        

            <div className="box-holder">
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
      </div>
      
    );
  }
}

export default DepositApv;
