import expect from 'expect';
import accountReducer from './accountReducer';
import * as actions from '../actions/accountActions';

describe('Acccount Reducer', () => {
  it('should add course when passed CREATE_USER_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        userName: "jcruz",
        apt: "Axiom La Jolla",
        fName: "Jonah",
        lName: "Cruz",
        email: "jcruz@example.com",
        password: "12345",
        isLeasingRep: false
      }, 
      {
        userName: "leaser",
        apt: "Axiom La Jolla",
        fName: "Lisa",
        lName: "Leaser",
        email: "lisa@example.com",
        password: "54321",
        isLeasingRep: true
      }
    ];

    const newAccount = {
      userName: "philly",
      apt: "Axiom La Jolla",
      fName: "phil",
      lName: "wickam",
      email: "philly@example.com",
      password: "qwerty",
      isLeasingRep: false
    };

    const action = actions.createAccountSuccess(newAccount);

    //act
    const newState = accountReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].userName).toEqual('jcruz');
    expect(newState[1].userName).toEqual('leaser');
    expect(newState[2].userName).toEqual('philly');
  });

  it('should update course when passed LOAD_USERS_SUCCESS', () => {
    // arrange
    const initialState = [];

    const accounts = [
      {
        userName: "jcruz",
        apt: "Axiom La Jolla",
        fName: "Jonah",
        lName: "Cruz",
        email: "jcruz@example.com",
        password: "12345",
        isLeasingRep: false
      }, 
      {
        userName: "leaser",
        apt: "Axiom La Jolla",
        fName: "Lisa",
        lName: "Leaser",
        email: "lisa@example.com",
        password: "54321",
        isLeasingRep: true
      }
    ];

    const action = actions.loadAccountsSuccess(accounts);

    const newState = accountReducer(initialState, action);

    // act
    expect(newState.length).toEqual(2);
    expect(newState[0].userName).toEqual('jcruz');
    expect(newState[1].userName).toEqual('leaser');
  });
});
