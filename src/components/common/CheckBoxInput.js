import React, {PropTypes} from 'react';
import '../../styles/account-stylesheet.css';
let checker = false;
class CheckBoxInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isChecked: false 
    };

    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange () {

    let handleCheckboxChange = this.props.handleCheckboxChange;

    this.setState((prevState) => {
      return {isChecked: !prevState};
    });
checker = !checker;
    handleCheckboxChange(!this.state.isChecked);
  }

  render() {
    let label = this.props.label;
    let isChecked  = this.state.isChecked;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={checker}
            onChange={this.toggleCheckboxChange}
          />

          {label}
        </label>
      </div>
    );
  }
}

CheckBoxInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default CheckBoxInput;