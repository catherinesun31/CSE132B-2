import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/application-stylesheet.css';
import '../../styles/main-stylesheet.css';



class AppTurninApv extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="office" />
        <ProfileModal />

        <div className="app-section content-section">
              <div className="header">
                  <h2>Apartment Application</h2>
              </div>
              <br></br>
              <div>
                  <div className="app-body">
                      <div className="upload-form">
                          <embed src="https://www.nobelprize.org/nobel_prizes/economic-sciences/laureates/2011/sargent-lecture_slides.pdf" width="500" height="150" type="application/pdf"/>
                          <div className="upload-form">
                              <form>
                                  <div>
                                      <button className="button">Approve</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

         
          <div className="progress-bar">
              <div className="header">
                  <h5> Apartment Group Lease Progress </h5>
              </div>
              <ol>
                  <li>
                      <a>Andrew</a>
                  </li>
                  <li className="done">
                      <a>Pete</a>
                  </li>
                  <li>
                      <a>Vac</a>
                  </li>
                  <li className="done">
                      <a>Tommy</a>
                  </li>
              </ol>
          </div>
      </div>
      
    );
  }
}

export default AppTurninApv;
