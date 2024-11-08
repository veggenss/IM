/* oppgave 1 */

a = 1
b = 2
function numSwap(n1, n2) {

    let buffer = n1;
    n1 = n2;
    n2 = buffer;
    console.log(n1, n2);
}

numSwap(1, 2);


/*Oppgave 2*/


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


function ifPalin(str1){
    for (let i = 0; i < str1.length; i++){
        let lastIndex = str1.length - 1 - i;
        if(str1[i] != str1[lastIndex]){
            return false;
        }
    }
    return true;
}

console.log(ifPalin("folof"));


/**/

function strFlip(input){
    
    return input.split("").reverse().join("");
}
