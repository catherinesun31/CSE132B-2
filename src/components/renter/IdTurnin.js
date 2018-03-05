import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/application-stylesheet.css';
import '../../styles/main-stylesheet.css';


class IdTurnin extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />

        <div className="app-section">
              <div className="header">
                  <h2>Submit Identification Documents</h2>

              </div>
              <h4> Please upload a copy of a U.S. Driver's License or Passport</h4>
              <br></br>
              <div className="body">
                  <div className="upload-form">
                      <form>
                          <div>
                              <label htmlFor="file">Choose file to upload</label>
                              <input type="file" id="file" name="file" multiple/>
                          </div>
                          <div>
                              <button>Submit</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      
    );
  }
}

export default IdTurnin;
