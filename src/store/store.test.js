import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';
import * as accountActions from '../actions/accountActions';
import * as aptActions from '../actions/aptActions';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    };


    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });

  it('Should handle loading accounts', function() {
    // arrange
    const store = createStore(rootReducer, initialState);

    const accounts = [{
      userName: "jcruz",
      apt: "Axiom La Jolla",
      fName: "Jonah",
      lName: "Cruz",
      email: "jcruz@example.com",
      password: "12345",
      isLeasingRep: false
    }];

    // act
    const action = accountActions.loadAccountsSuccess(accounts);
    store.dispatch(action);

    // assert
    const actual = store.getState().accounts[0];
    const expected = {
      userName: "jcruz",
      apt: "Axiom La Jolla",
      fName: "Jonah",
      lName: "Cruz",
      email: "jcruz@example.com",
      password: "12345",
      isLeasingRep: false
    };

    expect(actual).toEqual(expected);
  });

  it('Should handle loading apts', function() {
    // arrange
    const store = createStore(rootReducer, initialState);

    const apts = ["Axiom La Jolla", "Casa Mira View", "Costa Verde", 
    "Regents La Jolla", "Renaissance Apartments"];

    // act
    const action = aptActions.loadAptsSuccess(apts);
    store.dispatch(action);

    // assert
    const actual = store.getState().apts[0];
    const expected = "Axiom La Jolla";

    expect(actual).toEqual(expected);
  });

  it('Should handle loading apts', function() {
    // arrange
    const store = createStore(rootReducer, initialState);

    const account = {
      userName: "jcruz",
      apt: "Axiom La Jolla",
      fName: "Jonah",
      lName: "Cruz",
      email: "jcruz@example.com",
      password: "12345",
      isLeasingRep: false
    };

    // act
    const action = accountActions.signInAccountSuccess(account);
    store.dispatch(action);

    // assert
    const actual = store.getState().login;
    const expected = {
      userName: "jcruz",
      apt: "Axiom La Jolla",
      fName: "Jonah",
      lName: "Cruz",
      email: "jcruz@example.com",
      password: "12345",
      isLeasingRep: false
    };

    expect(actual).toEqual(expected);
  });
});
