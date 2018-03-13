import expect from 'expect';
import loginReducer from './loginReducer';
import * as actions from '../actions/accountActions';

describe('Login Reducer', () => {
  it('should set login when passed CREATE_USER_SUCCESS', () => {
    // arrange
    const initialState = {};

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
    const newState = loginReducer(initialState, action);

    //assert
    expect(newState.userName).toEqual('philly');
    expect(newState.apt).toEqual('Axiom La Jolla');
    expect(newState.fName).toEqual('phil');
    expect(newState.lName).toEqual('wickam');
    expect(newState.email).toEqual('philly@example.com');
    expect(newState.password).toEqual('qwerty');
    expect(newState.isLeasingRep).toEqual(false);
  });

  it('should set login when passed SIGN_IN_USER_SUCCESS', () => {
    // arrange
    const initialState = {};

    const newAccount = {
      userName: "philly",
      apt: "Axiom La Jolla",
      fName: "phil",
      lName: "wickam",
      email: "philly@example.com",
      password: "qwerty",
      isLeasingRep: false
    };

    const action = actions.signInAccountSuccess(newAccount);

    //act
    const newState = loginReducer(initialState, action);

    //assert
    expect(newState.userName).toEqual('philly');
    expect(newState.apt).toEqual('Axiom La Jolla');
    expect(newState.fName).toEqual('phil');
    expect(newState.lName).toEqual('wickam');
    expect(newState.email).toEqual('philly@example.com');
    expect(newState.password).toEqual('qwerty');
    expect(newState.isLeasingRep).toEqual(false);
  });

  it('should clear login when passed SIGN_OUT_USER_SUCCESS', () => {
    // arrange
    const initialState = {
      userName: "philly",
      apt: "Axiom La Jolla",
      fName: "phil",
      lName: "wickam",
      email: "philly@example.com",
      password: "qwerty",
      isLeasingRep: false
    };

    const newAccount = {};

    const action = actions.signOutAccountSuccess(newAccount);

    //act
    const newState = loginReducer(initialState, action);

    //assert
    expect(newState.userName).toEqual(undefined);
    expect(newState.apt).toEqual(undefined);
    expect(newState.fName).toEqual(undefined);
    expect(newState.lName).toEqual(undefined);
    expect(newState.email).toEqual(undefined);
    expect(newState.password).toEqual(undefined);
    expect(newState.isLeasingRep).toEqual(undefined);
  });
});
