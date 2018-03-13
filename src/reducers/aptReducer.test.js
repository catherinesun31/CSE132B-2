import expect from 'expect';
import aptReducer from './aptReducer';
import * as actions from '../actions/aptActions';

describe('Apt Reducer', () => {
  

  it('should load apts when passed LOAD_APTS_SUCCESS', () => {
    // arrange
    const initialState = [];

    const apts = ["Axiom La Jolla", "Casa Mira View", "Costa Verde", 
    "Regents La Jolla", "Renaissance Apartments"];
;
    const action = actions.loadAptsSuccess(apts);

    const newState = aptReducer(initialState, action);

    // act
    expect(newState.length).toEqual(5);
    expect(newState[0]).toEqual('Axiom La Jolla');
    expect(newState[1]).toEqual('Casa Mira View');
  });
});
