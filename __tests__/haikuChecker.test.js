import Haiku from './../src/haikuChecker.js';

describe('Haiku', () => {

  let haikuRedux;
  let haikuReal;

  beforeEach(() => {
    haikuReal = new Haiku("an old silent pond a frog jumps into the pond splash silence again");
    haikuRedux = new Haiku("this is my string");
  });

  test('should correctly create a haiku object with user generated string', () => {
    expect(haikuRedux.string).toEqual("this is my string");
    expect(haikuRedux.words).toEqual(["this","is","my","string"]);
  });

  test('should correctly return an object with a string value', () => {
    expect(haikuRedux.getHaiku()).toEqual("this is my string");
  });

  test('should correctly return the word count of a given string', () => {
    expect(haikuRedux.wordCount()).toEqual(4);
  });

  test('should correctly return an array of syllables per word of haiku', () => {
    expect(haikuRedux.sylCount()).toEqual([1,1,1,1]);
    expect(haikuReal.sylCount()).toEqual([1,1,2,1,1,1,1,2,1,1,1,2,2]);
  }); 
});

//class with empty array [3 array - split(" ")]
//take a string in { }`


// "An old silent pond A frog jumps into the pond splash! Silence again."

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

//count how many syl per word then add those and push those out