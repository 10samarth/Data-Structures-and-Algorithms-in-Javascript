//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstReccuringCharacter(inputArray){
  for (let i = 1; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}

const input = [2,4,3,5,1,5,2,3];

firstReccuringCharacter(input);
