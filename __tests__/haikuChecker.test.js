import Haiku from './../src/haikuChecker.js';

describe('Haiku', () => {

  test('should correctly create a haiku object with user generated string', () => {
    const haikuRedux = new Haiku("this is my string");
    expect(haikuRedux.string).toEqual("this is my string");
  });
});

//class with empty array [3 array - split(" ")]
//take a string in { }`


// An old silent pond...
// A frog jumps into the pond,
// splash! Silence again.

// let array = [1 1 2 1 1 1 1 2 1 1 1 2 2]

// 5
// 7
// 5

// counter = 0
// for (i = 0;  i < array; i++)
//  counter += array[i]
//  if counter = 5 {
   
//    return true
//  } else if counter > 5 {
//     return false
//  }

// function haikuChecker(userString) {
//   this.firstString = userString
// }

// haikuChecker.prototype.blah()