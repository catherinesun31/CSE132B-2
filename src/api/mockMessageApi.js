import delay from './delay';

let messages = [
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

class MessageApi {
    static getAllMessages() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], messages));
        }, delay);
      });
    }
    static addMessage(message) {
        message = Object.assign({}, message); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate server-side validation
            messages.push(message);
    
            resolve(message);
          }, delay);
        });
    }    
}
export default MessageApi;
