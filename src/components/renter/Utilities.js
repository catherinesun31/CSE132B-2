import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import Launcher from '../common/Launcher';
import '../../styles/utilities-stylesheet.css';
import '../../styles/main-stylesheet.css';
import '../../styles';



class Utilities extends React.Component {
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
      </div>
      
    );
  }
}

export default Utilities;
