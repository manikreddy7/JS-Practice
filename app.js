// // let $username = "MANIK";
// // console.log($username);

// // let num = 9;
// // console.log(num);

// //  num = 5;
// // console.log(num);

// // console.log(num+1); 

// // const r=5;
// // r=4;
// // console.log(r); 

// // 20 String Methods:

// // var stringOne = "Manik is a Web Developer";
// // var stringTwo = "Dhruva is a Full stack Developer";

// // console.log(stringOne.charAt(2));
// // console.log(stringOne.charCodeAt(2));
// // console.log(stringOne.concat(stringTwo));
// // console.log(stringOne.endsWith("e"));
// // console.log(String.fromCharCode(110));
// // console.log(stringTwo.includes("Full"));
// // console.log(stringTwo.indexOf("Full"));
// // console.log(stringTwo.lastIndexOf("r"));
// // console.log(stringTwo.match(/per/g));
// // console.log(stringOne.repeat(2));
// // console.log(stringOne.replace(/per/g,"PER"));
// // console.log(stringOne.search("per"));
// // console.log(stringOne.slice(1,4));
// // console.log(stringOne.split(" "));
// // console.log(stringOne.startsWith("Manik"));
// // console.log(stringOne.substring(2,4));
// // console.log(stringOne.toLocaleLowerCase());
// // console.log(stringOne.toLocaleUpperCase());

// // var stringThree = "   thankyou   ";
// // console.log(stringThree.trim());



// // // Numbers methods in JS:-

// // let number = 2.7976931348623157e+308;

// // let finalNumber=number.toFixed(3); //toFixed();

// // finalNumber=number.toPrecision(4); //toPrecision();

// // console.log(finalNumber);

// // let mill=1000;
// // number=mill.toExponential();    //toExponential();
// // console.log(number);

// // console.log(isFinite(1));       //isFinite();

// // let numb =1.7976931348623157e+308;
// // console.log(Number.isInteger(5)); //Number.isInteger();

// // console.log(isNaN("manik"));     //isNan();

// // console.log(Number.isSafeInteger(numb));  //Number.isSafeInteger();
// // console.log(numb.valueOf());  //.valueOf();
// // console.log(Number.MAX_VALUE);  
// // console.log(Number.MIN_VALUE);

// // let  dif = "10"-"2" // strings as numbers
// // console.log(dif);

// // let vinod=parseInt("25")+2;  // strings to integers .parseInt
// // console.log(vinod);   

// // let Dp=parseFloat("25.02")+2; // strings to float using .parseFloat
// // console.log(Dp);

// // let badam = (21.0468).toFixed(2); // .toFixed 
// // console.log(badam);

// // let kumar = (20).toString();
// // console.log(typeof(kumar));


// //array and its methods in JS:

// let arr = ["a","b","c"];

// arr.push("d");
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// let arr2 = ["e","f"];
// console.log(arr.concat(arr2));
// console.log(arr2);

// console.log(arr.join("!"));
// console.log(arr.reverse());

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.unshift("p"));
// console.log(arr);

// console.log(arr.slice(1,2));
// console.log(arr);

// arr.push("k");
// arr.push("n");

// console.log(arr);

// arr.sort();
// console.log(arr);
// console.log(arr.splice(2,2,"1","2"));
// console.log(arr);

// let kiran = arr.length; // for getting the length of the array or no.of elements in the array.
// console.log(kiran);

// let a = arr[3]; // forgetting the exact element using the index number;
// console.log(a);

// let lastElement = arr[arr.length-1]; // to find the last element of the array;
// console.log(lastElement);

// let fruits = ["mango","apple","banana","orange"]; // to make given array elemnts into the strings;
// console.log(fruits.toString());

// fruits = ["mango","apple","banana","orange"]; // to make given array elemnts into the strings with separator;
// console.log(fruits.join("*"));

// fruits = ["mango","apple","banana","orange"]; // to delete given array elemnts with index number;
// console.log(delete fruits[0]);

// console.log(fruits);

// let sortNumbers = [1,10,24,5,3,12];

// sortNumbers.sort(function(a,b){return a-b}); // sorting of numbers using compare function in assending order;
// console.log(sortNumbers);

// sortNumbers.sort(function(a,b){return b-a}); // sorting of numbers using compare function in decending order;
// console.log(sortNumbers);

// sortNumbers.sort(function(){return 0.5 - Math.random()}); // sorting of numbers using compare function in random order;
// console.log(sortNumbers);


// const array1 = [1, 3, 2];
// console.log(Math.max(8,9,10));//for findig the maximum number of given array or numbers
// console.log(Math.max(...array1)); // for finding max by array

// let array2 = [1, 3, 2];
// console.log(Math.min(8,9,10));//for findig the minimum number of given array or numbers
// console.log(Math.min(...array2)); // for finding min by array


// let arrayMap = [1,8,9,24,11];
// let map1 = arrayMap.map(x=>x*3); //for modifying the array elements with map;
// console.log(map1);

// let companies =[
//     {name: "company one",catagory : "auto", start: 1987,end :2022},
//     {name: "company two",catagory : "auto", start: 1977,end :2022},
//     {name: "company three",catagory : "auto", start: 1967,end :2022},
//     {name: "company four",catagory : "auto", start: 1957,end :2022},
//     {name: "company five",catagory : "auto", start: 1957,end :2022}
// ];

// const ages = [21,31,32,33,11]

// // companies.forEach(function(factory){
// //     console.log(factory.catagory);      // using forEach();
// // });

// // ages.filter(function(age){
// //     if(age>21) {
        
// //         console.log(age);          // for filtring the array elements
// //     }
// // }
// // );

// // const eigtiesCompanies = companies.filter(company=>(company.start>=1980 && company.start<1990)); // filtering the companies which are started 1980's.
// // console.log(eigtiesCompanies);

// const companyNames=companies.map(function(company){
// console.log(company.name);
// }); 

// const testMap = companies.map(function(company){
// return `$(company.name) [$(company.start)-$(company.end)]`;
// });
// console.log(company);

// objects in JS:

// let input = 'name';

// let alien = {
//     name: "manik",
//     age: 25,
//     color: "black",
//     'work experience': 4,
// }
// // console.log(typeof(alien));
// // console.log(alien['work experience']);
// // console.log(alien[input]);
// console.log(JSON.stringify(alien));
// alien.height= 6;
// var Car = {
//     model: 'BMW',
//     color: 'red'
// }
// var ElectricCar = Object.create(Car, {
//     type: {
//         value: 'Electric',
//         writable: true,
//         configurable: false,
//         enumerable: true
//     }
// });
// console.log(ElectricCar.type); 

// let arrFive = {
//     Month:"September",
//     year: 2022,
//     day:["mon","tue","wed","thur","fri","sat"]
// }
// console.log(arrFive.day[3]);


//FOR LOOP :-

// var ourArray = [];
// for(var i=0;i<5;i++){
// if(i>2) break;
// ourArray.push(i);
// }
// console.log(ourArray);

// var arr =[10,9,8,7,6];
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// var arr2 = [
//     [1,2],[3,4],[5,6]
// ];

// for(var i=0;i<arr2.length;i++){
//     for(var j=0;j<arr2[i].length;j++){
// console.log(arr2[i][j]);
//     }
// }


// if Condition:

let vegetable = {
    mango: 10,
    banana:15,
    orange:25,
    apple:20.
}
if(vegetable.apple<10){
    console.log("cheap");
}else{
    console.log("costly");
}

//

















