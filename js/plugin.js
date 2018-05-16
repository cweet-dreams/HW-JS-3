//Задачи на циклы.
//1
let str = "I am in the easycode";
let newStr = ' ';

for (let i = 0; i < str.length; i++) {
    if (str[i] === ' '){
        newStr +=' ' + str[i+1].toUpperCase();
        i++;
    } else {
        newStr +=str[i];
    }
}
console.log(newStr);

//2
let str2 = 'tseb eht ma i';
let newStr2 = ' ';

for (let n = str2.length-1; n >= 0; n--) {
    newStr2 += str2[n];
}
console.log(newStr2);

//3
let factorial = 1 ;

for (let f = 10; f > 0; f--) {
    factorial = factorial * f;
}
console.log(factorial);

//4

let strCount = 'Cчитаем до 10и: '

for (let y = 1; y <= 10; y++) {
    strCount += y === 10 ? y : y + ', ';
}
console.log(strCount);

// //5
let str5 = 'JavaScript is a pretty good language';
let newStr5 = '';

for (let k=0; k < str5.length; k++) {
    if (str5[k] === " "){
        newStr5 += str5[k+1].toUpperCase();
        k++;
    }   else {
         newStr5 += str5[k];
    }
}
console.log(newStr5);

//6
let list = '';
 for (let j=0; j <= 15; j++){
     if (j%2==1) {
       list = list + j + ' ';
     }
 }
console.log(list);

