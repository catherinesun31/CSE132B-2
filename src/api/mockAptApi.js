import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let apartments = ["Axiom La Jolla", "Casa Mira View", "Costa Verde", 
    "Regents La Jolla", "Renaissance Apartments"];



class AptApi {
  static getAllApts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], apartments));
      }, delay);
    });
  }

}

export default AptApi;
