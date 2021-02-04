export default class Haiku {
  constructor(userString) {
    this.string = userString;
    this.words = userString.split(" "); 
    
  }

  getHaiku()  {
    return this.string;
  }

  wordCount()  {
    return this.words.length; 
  }
  
  // sylCount() {
  //   const vowels =["a", "e", "i", "o","u", "y"];
  //   let vAmount = [];
  //   let letters = [];
  //   let counter = 0;

  //   this.words.forEach((word) => { 
  //     letters = word.split("")  
      
  //     letters.forEach((letter) => {
  //       if(vowels.includes(letter)) {
  //         counter++
  //       }
  //     });  
  //     vAmount.push(counter);
  //     counter = 0;
  //   });
  //   // letters.forEach((letter) => {
  //   //   if(vowels.includes(letter)) {
  //   //     vAmount.push(letter);
  //   //   }
  //   // })
  //   return vAmount;
  // }

  sylCount() {
    output = this.words.map(word => {
      let counter = 0;
      let permute = word;

      let dipthongs = ["oo","ou","ue","oy","oi","oa","ey","ay","ee","ie","ea","ye","ai"];
      let vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
      
      //remove special cases
      if (/le$/.test(permute)) counter ++;
      
      if (/e$/.test(permute) || /es$/.test(permute)) {
        permute = permute.replace(/e$/,"");
        permute = permute.replace(/es$/,"");

        let newletter = permute.split("");
        let check = true;
        newletter.forEach(current => {
          if (vowels.includes(current)) check = false;
        });
        if (check) counter++;
      }

      permute = permute.replace(/ed$/,"");
      
      //remove dipthongs
      dipthongs.forEach(dip => {
        if (permute.includes(dip)) {
          counter ++;
          permute = permute.replace(dip, "x");
        }
      });
      
      //look
      let letters = permute.split("");
    
      letters.forEach(letter => {
        if (vowels.includes(letter)) {
          counter ++;
        }
      });
        console.log(permute)
      return counter;
    });
  return output;
  }
}


//count how many syl per word then add those and push those out

//this.words.forEach((word) => { //silent
  //letters = word.split("")  // s i l e n t
  //letters.forEach((letter) => {
    //if(vowels.includes(letter)) {
     // vAmount.push(letter);
//     }
//   }
// }