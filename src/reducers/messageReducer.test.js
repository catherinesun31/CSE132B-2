import expect from 'expect';
import messageReducer from './messageReducer';
import * as actions from '../actions/messageActions';

describe('Message Reducer', () => {
  it('should add messages to chat box when passed ADD_MESSAGE_SUCCESS', () => {
    // arrange
    const initialState = [
        {type: 'text', author: "me", data: { text: "What do you think of this apartment?"} },
        {type: 'text', author: "them", data: { text: "I like it!"} },
        {type: 'text', author: "me", data: { text: "Let's split the deposit in half?"} },
        {type: 'text', author: "them", data: { text: "Sure!"} },
        {type: 'text', author: "me", data: { text: "How about I handle the renter's insurance, and you handle the utilities?"} },
        {type: 'text', author: "them", data: { text: "Yeah, I can do that!"} },
        {type: 'text', author: "me", data: { text: "Awesome, thanks!"} },
        {type: 'text', author: "them", data: { text: "How are the utilities going?"} },
        {type: 'text', author: "me", data: { text: "Great! How about for you?"} },
        {type: 'text', author: "them", data: { text: "I've got everything done!"} },
        {type: 'emoji', author: "me", data: { emoji: "😋"} }
    ];

    const newMessage = {
        type: 'text', author: "them", data: { text: "Are you there?"}
    };

    const action = actions.addMessageSuccess(newMessage);

    //act
    const newState = messageReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(12);
    expect(newState[0].author).toEqual("me");
    expect(newState[11].author).toEqual("them");
  });

  it('should update messages when passed LOAD_MESSAGES_SUCCESS', () => {
    // arrange
    const initialState = [];

    const messages = [
        {type: 'text', author: "me", data: { text: "What do you think of this apartment?"} },
        {type: 'text', author: "them", data: { text: "I like it!"} },
        {type: 'text', author: "me", data: { text: "Let's split the deposit in half?"} },
        {type: 'text', author: "them", data: { text: "Sure!"} },
        {type: 'text', author: "me", data: { text: "How about I handle the renter's insurance, and you handle the utilities?"} },
        {type: 'text', author: "them", data: { text: "Yeah, I can do that!"} },
        {type: 'text', author: "me", data: { text: "Awesome, thanks!"} },
        {type: 'text', author: "them", data: { text: "How are the utilities going?"} },
        {type: 'text', author: "me", data: { text: "Great! How about for you?"} },
        {type: 'text', author: "them", data: { text: "I've got everything done!"} },
        {type: 'emoji', author: "me", data: { emoji: "😋"} } 
    ];
    const action = actions.loadMessagesSuccess(messages);

    const newState = messageReducer(initialState, action);

    // act
    expect(newState.length).toEqual(11);
    expect(newState[0].author).toEqual('me');
    expect(newState[10].author).toEqual('me');
  });
});
