function firstReccuringCharacter(inputArray){
  for (let i = 1; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      
      if (input[i] === input[j]) {
        console.log('i = '+ i + ' j ='+j)
        return input[i];
      }
    }
  }
  return undefined
}

const input = [2,4,3,5,1,5,2,3];

firstReccuringCharacter(input);
