reverseInt = (int) => {
   const reverse = int.toString().split('').reverse().join('')
   return Math.sign(int) * parseInt(reverse)
}

console.log(reverseInt(51))

maxChar = (str) => {
    let max = 0,
    finalChar = '';

    str.split('').forEach(
        function(char){
        if(str.split(char).length > max) {
           max = str.split(char).length;
           finalChar = char;
        }
    });

    return finalChar;
};

console.log(maxChar("abcccccccd"))