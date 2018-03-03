import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import '../../styles/main-stylesheet.css';



class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  componentDidMount () {
    //this.populateTodoList();
  }

  /**
   * Populates the todo list
   */
  populateTodoList () {

    let todoList = (this.props.userType == "renter") ?
      todoListRenter : todoListOffice;

    let checkList = document.getElementById('check-list');
    checkList.innerHTML ='';

    this.makeUL(todoList, checkList);
  }

  /**
   * Creates todo list in html
   */
  makeUL(array, list) {

    //var array = makeProfileArray(JSON.parse(sessionStorage.getItem("localUserData")));

    const children = [];

    for(let i = 0; i < array.length; i++) {

        if (array[i].submitted) {
          children.push(<li className="done"><Link to={array[i].url}>{array[i].taskName}</Link></li>);
        } else {
          children.push(<li><Link to={array[i].url}>{array[i].taskName}</Link></li>);
        }
        
    }

    // Finally, return the constructed list:
    return list;
  }

  render() {

    let todoList = (this.props.userType == "renter") ?
      todoListRenter : todoListOffice;

    const children = [];

    for(let i = 0; i < todoList.length; i++) {

        if (todoList[i].submitted) {
          children.push(<li className="done"><Link to={todoList[i].url}>{todoList[i].taskName}</Link></li>);
        } else {
          children.push(<li><Link to={todoList[i].url}>{todoList[i].taskName}</Link></li>);
        }
        
    }

    return (
      <div className="check-list">
          <h4>Apartment To Do List</h4>
          <ul id="check-list">
            {children}
          </ul>
      </div>
    );
  }
}


TodoList.propTypes = {
  userType: PropTypes.string.isRequired
};



export default TodoList;


let todoListRenter = [
	{
		taskId: 0,
		taskName: "Create Group",
		url: "group",
		submitted: true,
		approved: true
	},
	{
		taskId: 1,
		taskName: "Choose Apartment",
		url: "choose-apt",
		submitted: true,
		approved: true
	},
	{
		taskId: 2,
		taskName: "Turn in Application",
		url: "app-turnin",
		submitted: false,
		approved: false
	},
	{
		taskId: 3,
		taskName: "Make Deposit",
		url: "deposit",
		submitted: false,
		approved: false
	},
	{
		taskId: 4,
		taskName: "Set Up Utilities",
		url: "utilities",
		submitted: false,
		approved: false
	},
	{
		taskId: 5,
		taskName: "Get Renters Insurance",
		url: "rent-insur",
		submitted: false,
		approved: false
	},
	{
		taskId: 6,
		taskName: "Turn in Identity Documents",
		url: "id-turnin",
		submitted: false,
		approved: false
	},
	{
		taskId: 7,
		taskName: "Sign Lease",
		url: "sign-lease",
		submitted: false,
		approved: false
	}
];

let todoListOffice = [
	{
		taskId: 0,
		taskName: "Approve Apartment Application",
		url: "app-turnin-apv",
		submitted: true,
		approved: true
	},
	{
		taskId: 1,
		taskName: "Approve Deposit",
		url: "deposit-apv",
		submitted: false,
		approved: false
	},
	{
		taskId: 2,
		taskName: "Approve Utilities",
		url: "utilities-apv",
		submitted: false,
		approved: false
	}
];