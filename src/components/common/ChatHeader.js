import React, {PropTypes, Component} from 'react';
import closeIcon from './../assets/close-icon.png';


class ChatHeader extends Component {
  render() {
    return (
      <div className="sc-header">
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div className="sc-header--close-button" onClick={this.props.onClose}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    );
  }
}

ChatHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

export default ChatHeader;
