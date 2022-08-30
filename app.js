// let $username = "MANIK";
// console.log($username);

// let num = 9;
// console.log(num);

//  num = 5;
// console.log(num);

// console.log(num+1); 

// const r=5;
// r=4;
// console.log(r); 

// 20 String Methods:

// var stringOne = "Manik is a Web Developer";
// var stringTwo = "Dhruva is a Full stack Developer";

// console.log(stringOne.charAt(2));
// console.log(stringOne.charCodeAt(2));
// console.log(stringOne.concat(stringTwo));
// console.log(stringOne.endsWith("e"));
// console.log(String.fromCharCode(110));
// console.log(stringTwo.includes("Full"));
// console.log(stringTwo.indexOf("Full"));
// console.log(stringTwo.lastIndexOf("r"));
// console.log(stringTwo.match(/per/g));
// console.log(stringOne.repeat(2));
// console.log(stringOne.replace(/per/g,"PER"));
// console.log(stringOne.search("per"));
// console.log(stringOne.slice(1,4));
// console.log(stringOne.split(" "));
// console.log(stringOne.startsWith("Manik"));
// console.log(stringOne.substring(2,4));
// console.log(stringOne.toLocaleLowerCase());
// console.log(stringOne.toLocaleUpperCase());

// var stringThree = "   thankyou   ";
// console.log(stringThree.trim());



// // Numbers methods in JS:-

// let number = 2.7976931348623157e+308;

// let finalNumber=number.toFixed(3); //toFixed();

// finalNumber=number.toPrecision(4); //toPrecision();

// console.log(finalNumber);

// let mill=1000;
// number=mill.toExponential();    //toExponential();
// console.log(number);

// console.log(isFinite(1));       //isFinite();

// let numb =1.7976931348623157e+308;
// console.log(Number.isInteger(5)); //Number.isInteger();

// console.log(isNaN("manik"));     //isNan();

// console.log(Number.isSafeInteger(numb));  //Number.isSafeInteger();
// console.log(numb.valueOf());  //.valueOf();
// console.log(Number.MAX_VALUE);  
// console.log(Number.MIN_VALUE);

// let  dif = "10"-"2" // strings as numbers
// console.log(dif);

// let vinod=parseInt("25")+2;  // strings to integers .parseInt
// console.log(vinod);   

// let Dp=parseFloat("25.02")+2; // strings to float using .parseFloat
// console.log(Dp);

// let badam = (21.0468).toFixed(2); // .toFixed 
// console.log(badam);

// let kumar = (20).toString();
// console.log(typeof(kumar));


//array and its methods in JS:

let arr = ["a","b","c"];

arr.push("d");
console.log(arr);

console.log(arr.pop());
console.log(arr);

let arr2 = ["e","f"];
console.log(arr.concat(arr2));
console.log(arr2);

console.log(arr.join("!"));
console.log(arr.reverse());

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("p"));
console.log(arr);

console.log(arr.slice(1,2));
console.log(arr);

arr.push("k");
arr.push("n");

console.log(arr);

arr.sort();
console.log(arr);
console.log(arr.splice(2,2,"1","2"));
console.log(arr);




