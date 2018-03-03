import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/application-stylesheet.css';
import '../../styles/main-stylesheet.css';



class SignLease extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />

        <div className="app-section">
              <div className="header">
                  <h2>Sign Lease Agreement</h2>
              </div>
              <br></br>

              <div className="body">
                  <a href="https://www.nobelprize.org/nobel_prizes/economic-sciences/laureates/2011/sargent-lecture_slides.pdf" download>Download Lease Agreement</a> <br></br>
                  
                  <div className="upload-form">
                      <form>
                          <div>
                              <label htmlFor="file">Upload Completed Lease Agreement</label>
                              <input type="file" id="file" name="file" multiple/>
                          </div>
                          <br/><br/>
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

export default SignLease;
