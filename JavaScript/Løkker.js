/*
a = 1
b = 2
function numSwap(n1, n2) {

    let buffer = n1;
    n1 = n2;
    n2 = buffer;
    console.log(n1, n2);
}

numSwap(1, 2);



function tallG(n1, n2, n3){


    if (n3 > n2){
        if (n1 > n2 && n1 < n3){
            return true;
        }
    }

    else{
       if (n1 > n3 && n1 < n2){
            return true;
       } 
    }


    return false;
}

console.log(tallG(5, 6, 2));



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






*/
function strFlip(input){
    
    return input.split("").reverse().join("");
}
/*
const arrayOfItems = ["car", "water", "sun", "desk", "forest", "mouse"]

arrayOfItems.forEach((item) => {
    console.log(strFlip(item))
})

/*Oppgave 5*
arrayOfItems.pop([arrayOfItems.length - 1]);
console.log(arrayOfItems);


/*Oppgave 6*



let inputName = "Lucas"
function welcomeMessage(userName){
    console.log("Welcome", userName, "!");
}

welcomeMessage(inputName);


/*Oppgave 7*

console.log(arrayOfItems.length)



/*Oppgave 8*


function ifItem(array, item){
    if (array.indexOf(item) !== -1){
        return true;
    }

    return false

}

console.log(ifItem(arrayOfItems, ""));



/*Oppgave 9*

function root(num){
    const sqrtValue = Math.sqrt(num)
    if (sqrtValue === Math.floor(sqrtValue)){
        return true;
    }
    else return false;
}

console.log(root(16));



/*Oppgave 10*

const listOfNum = [1, 2, 3, 4, 5]

listOfNum.forEach(item => {
    console.log(item)
})


/*Sum av liste*

const sumList = [3, 5, 7, 3, 24, 76]

function sumArray(array){
    const totalSum = array.reduce((acc, num) => acc + num, 0)
    console.log(totalSum);
}

sumArray(sumList);


/*Lengde ord*

const wordList = ["word", "cream", "volcano", "station", "complex", "faceless"];

function longestWord(array){
    const lonWord = array.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");


    return lonWord, lonWord.length;
}

console.log(longestWord(wordList));



/*Fizz Buzz*



function fizBiz(num){

    if (num % 5 === 0){
        console.log("Fizz");
    } else if (num % 3 === 0){
        console.log("Buzz");
    } else for(i = num; i > 0; i--){
        console.log(i)
    }
}

fizBiz(24);

/*Ulike Elementer i To Lister*

const letLi = ["A", "B", "C", "D", "E"]
const numLi = [1, 2, 3, 4, 5]

function findUniqueElements(array, array2){

    
}

/*Telle Antall Forekomster */


const li = ["word", "word", "home", "table", "berry", "worker", "encouragment", "home", "worker", "guard", "boat"]
function countOccurrences(array){

    const liD = {};

    for (i = 0; i < array.length; i++){
        let word = array[i]
        if (Object.keys(liD).includes(word)){
            liD[word] += 1;
        } else{
            liD[word] = 1;
        }
    }
    return liD

}

console.log(countOccurrences(li))


/**/