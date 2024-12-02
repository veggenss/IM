const inputWord = "Palin";

function ifPalin(str1){
    for (let i = 0; i < str1.length; i++){
        let lastIndex = str1.length - 1 - i;
        if(str1[i] != str1[lastIndex]){
            return false;
        }
    } 
    return true;
    
    
}

if (ifPalin(inputWord) === true){
    console.log(inputWord, "is true")
} else {
    console.log(inputWord, "is false")
} 
