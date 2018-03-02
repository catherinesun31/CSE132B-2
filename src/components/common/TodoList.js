import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import '../../styles/main-stylesheet.css';



class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  componentDidMount () {
    this.populateTodoList();
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

    for(let i = 0; i < array.length; i++) {
        // Create the list item:
        let item = document.createElement('li');

        if (array[i].submitted) {
          item.className = "done";
        }

        let aItem = document.createElement('a');

        aItem.href = array[i].url;

        aItem.appendChild(document.createTextNode(array[i].taskName));

        // Set its contents:
        item.appendChild(aItem);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
  }

  render() {

    return (
      <div className="check-list">
          <h4>Apartment To Do List</h4>
          <ul id="check-list"></ul>
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
		url: "group.html",
		submitted: true,
		approved: true
	},
	{
		taskId: 1,
		taskName: "Choose Apartment",
		url: "choose-apt.html",
		submitted: true,
		approved: true
	},
	{
		taskId: 2,
		taskName: "Turn in Application",
		url: "app-turnin.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 3,
		taskName: "Make Deposit",
		url: "deposit.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 4,
		taskName: "Set Up Utilities",
		url: "utilities.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 5,
		taskName: "Get Renters Insurance",
		url: "rent-insur.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 6,
		taskName: "Turn in Identity Documents",
		url: "id-turnin.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 7,
		taskName: "Sign Lease",
		url: "sign-lease.html",
		submitted: false,
		approved: false
	}
];

let todoListOffice = [
	{
		taskId: 0,
		taskName: "Approve Apartment Application",
		url: "app-turnin.html",
		submitted: true,
		approved: true
	},
	{
		taskId: 1,
		taskName: "Approve Deposit",
		url: "deposit.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 2,
		taskName: "Approve Utilities",
		url: "utilities.html",
		submitted: false,
		approved: false
	}
];