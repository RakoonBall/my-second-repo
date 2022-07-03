


// let age= 15;

// if(age>=18){
//     console.log("user can play mario");
// }else{
//     console.log("User can not play mario");
// }

// let num = 14;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }
// let first_name= 4;

// if(first_name){
//     console.log(first_name);
// }else{
//     console.log("first_name is kinda empty");
// }
// let age1 =15;
// let drink;

// if (age1>=5){
//     drink = "milk";
// }else{
//     drink = "coffee";
// }
// console.log(drink);
//ternary operrators could be used in this cases

// // let age2 = 8;
// let drink1 = age >=5 ? "coffee" : "milk";
// console.log(drink1);//if equal or greater than 5 store coffee else store milk


// and or operator
// let man = "mehemud";
// let age = 22;

// if(man[0]==="m"){
//     console.log('ur name starts with m');
// }
// if (age> 18){
//     console.log("ur age is above 18");


//if (man[0]==="m"&& age>18){
//     console.log('name starts with m and above 18');
// }else{
//     console.log('inside else');
// }
// //or
// if(man[1]==='e'||age>18){
//     console.log('iside if');

// }else{
//     console.log('inside else');
//
//nested if else
// winning number 19
// 19 ur guess is right17 to low
// 20 too highff
// 

// let temp_in_degree = 16;

// if(temp_in_degree<0){
//     console.log('extremely cold outside');
// }else if(temp_in_degree< 16){
//     console.log('it is cold outside');
// }else if(temp_in_degree<25){
//     console.log("weather is okay");
// }else if(temp_in_degree< 35){
//     console.log("lets go for a swim")
// }else if(temp_in_degree<45){
//     console.log("turn on the AC");
// }else{
//     console.log("too hot outside");
// }
// console.log("hello world");
  

//switch 
// let day = 5;
// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

// //while loop
// //dry = dont repeat ur self
// // let i=0;
// // while(i<=3){
// //     console.log(i);
// //     i++;
// // }
// // // console.log(`current value of i is ${i}`)

// //booeans \, true, false
// // let num1 = '7';
// // let num2 = "7";
// // console.log(num1===num2);

// let num = 10;
// let total= 0;

// total=total+1;
// total=total+2;
// total=total+3;
// total=total+4;
// total=total+5;
// total=total+6;
// total=total+7;
// total=total+8;
// total=total+9;
// total=total+10;

// console.log(total);

// let num = 100;
// let total = 0;
// let i= 0;

// while(i<=100){
//     total= total+i;
//     i++;
// }
// console.log(total);











//let total = (num*(num+1))/2;

//console.log(total);
//for loop
// for(let i = 0;i<=9;i++){
//     console.log(i);
// }

// let total = 0;
// let num =100;
// for(let i=1; i<=num; i++){
//     total= total +i;
// }console.log(total)



//break and continue

// for(let i=1; i<10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// for(let i=1;i<=11; i++){
//     if(i===7){
//         break;
//     }
//     console.log(i);
// }
//if first statement is wrong then we apply do while loop 
//let i =10;
// while(i<=9){
//     console.log(i);
//     i++;
// }

//let fruits = ["apple","mango","grapes"];
// console.log(fruits[0]);
// fruits[1] = "banana";
// console.log(fruits)
// //ARRAY IS REFERENCE type we call them object
// console.log(typeof fruits)
// //push will help u add elements t0the array 
// fruits.push("banana");
// console.log(fruits)
// //remove elements??
// fruits.pop();//will remove fro mthe last pop
// console.log(fruits);
// //but it also gives
// console.log(fruits.pop());
// //to add eleemnts to the strrting
// fruits.unshift("grapes")
// console.log(fruits)

// //shift eliminate elemnts from starting

// fruits.shift();
// console.log(fruits);
// let removedfruit =fruits.shift();
// console.log('removed fruit is',removedfruit)

// // to ad element in similar arrays
// let array1 = ["item1", "item2", "item3"];
// let array2 = [...array1];
// console.log(array1===array2);
// let array3 = array1.slice(0).concat(["item4","item5"]);
// console.log(array3);

// console.log(array2)
// when it comes to array it is a referece data type so similar locations are allocated in memory
// but for primitive data types like numbers different locations are allocated.
// if we want our similar arrays to look different the nwe need to write then separately but will we wright them separately nope. for that we have 3 methods

// let array4 = [...array1,"item5","item5"];

// let one_more_array =['item5','item6'];
// let array5 = [...array1,...array4];

// console.log(array5);
//for loop in array


// let fruits = ["apple","mango","grapes","guava"];

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);//to access last eliment

// for(let i=0; i<=fruits.length-1;i++){
//     console.log(fruits[i].toUpperCase());
// }

// const pi = 3.14;
// pi = 12;
// console.log(pi);

//for of loop i array
// const fruits =["mango","apple","grapes","fruit4","fruit5"];

// for(let fruit of fruits ){
//     console.log(fruit.toUpperCase());
// }
// const fruits = ["apples",'mango','grapes',"fruit4"];
// const fruits2= [];

// for(let fruit of fruits){
//        fruits2.push(fruit.toUpperCase());
//       console.log(fruits2);
// }
//
// for(let i= 0; i<fruits.length;i++){
//     console.log(fruits[i]);
        
//     }

//array destructuring
// const myArray =["value1","value2"];
// let myvar1 = myArray[0];
// let myva2

// object reference type
//arrrayss are good b;ut not sufficient
//
// const person = {
//     name: "mehemud",
//     age:20,
//     hobbies:['guitar','sleeping','listening music']
// }
// console.log(person);//when yo uwant to another key pair
// person.gender ="male";
// console.log(person);

//how to acces a property
// console.log(person.age)
// console.log(person.hobbies);
// console.log(person["age"]);
// console.log(person["name"]);//name er ashee pashe string lagate hobe


//
// const key ='email';
// const person = {
//     name:"mehemud",//name and age are keys i this 
//     age:22,
//     "person hobbies":["guitar","sleeping","listening","shoping"],
// }
// //person[key] = "mehemudazad.km@gmail.com";
// console.log(person);
//tihs was the difference between dot notstion and bracket notaion

//

// for(let key in person){
//     console.log(person[key]);//dont use 

// }
// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }
// for(let key in person){
//     console.log(key,person[key]);
// }
// console.log(typeof(object.keys(person)) );
// const val = Array.isArray((object.keys(person)));


// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// // const obj = {
// //     objkey1 :"myvalue1";
// //     objkey2 :"myvalue2";
// // }
//  const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj)

// //spread operator\
// const array1 =[1,2,3];
// const array2=[5,6,7];

// const newArray = [...array1,...array2];
// console.log(newArray);

// const match =[..."123456789"];//it will get spread
// console.log(match)

// //spread operator in object
// const obj1 ={
//     key1: "value1",
//     key2:"value2",
// }
// const newObject ={ ...obj1,key69: "mehemud",..."678"};
// console.log(obj1);
// console.log(newObject);

//object destructuring
// const band={
//     bandName:"led zepplin",
//     famousSong:"stairway to heven",
// };
// const bandName= band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong);
// console.log(bandName)

//function
// function singHappyBirthday(){
//     console.log("sing HAPPY birthday with me");
// }

// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// //
// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2+number3;
// }

// const returnedValue = sumThreeNumbers(12,38,23);
// console.log(returnedValue);
// //
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//         return false;
    
    
// }
     
//   console.log(isEven(232));

//   //
// console.log(13%2===0);
// function Even(num){
//     return num % 2 ===0;
// }
// console.log(Even(4));

// // //
//  function firstChar(anystring){
//     return anystring[1];
// }
//  console.log(firstChar("abcdef"))
// // //
// function findTarget(array,target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 8);
// console.log(ans);
// //funstion expresion= signing function in variable we can also do it with let but generally it is done with const


// sing();
// //arrow functions= important
// // const singHappyBirthday=function(){
// //     console.log("sing HAPPY birthday with me");
// // }
// const singHappyBirthday=()=>{//arrow function
//    console.log("sing HAPPY birthday with me");
//  }
//  singHappyBirthday()

//  //
//  const isEven =Number=>{
//     return Number %2 ===0;
//  }
//  const ans =isEven(13);
//  console.log(ans);

 //in array function when you havw only one parameters you can remove the brackets

// const firstChar1 = anyString => anyString[0];

// console.log("mehemud")
//  console.log(firstChar1("mehemud"))  




//hosting
// 


// function app(){
//     const myFunc = ()=>{
//         console.log("hello from myFunc")
//     }
//     const addTwo = (num1,num2)=>{
//         return num1 +num2;
//     }
//     const mul =(num1, num2) => num1*num2;
//     console.log("inside app");
//     myFunc()
//     console.log(addTwo(5,4))
// }
// app()

// // lexical function
// function myApp(){
//     const myVar = "value1";
//     function myFunc(){
//         //const myVar = "value59";
//         console.log("inside the pens  ",myVar);
//     }
//     const myFunc2 = function(){

//     }
//     const myFunc3 = ()=>{}
//     console.log(myVar);
//     myFunc();
// }
// myApp();

//block scope vs function scope

//let and const are block scope 
//var is functio scope 

// if(true){
//     var firstName = "HArshit";
//     console.log(firstName);
// }
// //bahire access kora jabe na but if i use var i can call it outside the carly braces 
// console.log(firstName)

// 

//rest parameters
//  

//parameter destructuring

// const person ={
//     firstName : "harshit ",
//     gender : "male",
// }
// function printDetail({firstName,gender}){
//     console.log(firstName);
//     console.log(gender);
// }

// printDetail(person)

//callback function
// 


// function myFunc2(name){
//     console.log("inside my func 2");
//     console.log(`your name is ${name}`);

//     }
// function myFunc(CALLBACK){//ekhane call back na lekehe ja cha itai lekha jabe
//     console.log("hello there I am a func and i can ....");
//     CALLBACK("mehemud");
// }
// myFunc(myFunc2);

//function returniing function
// function myFunc(){
//     return {name:"mehemud", age: 22};

// }

// const ans = myFunc();
// console.log(ans)
// console.log(myFunc());
// //

// function myFunc(){
//     function hello(){
//         console.log('HELLO WORLD')
//     }
//     return hello;
// }

// const ans= myFunc();//ans has become like a function
// // ans();
// function myFunc(){
//     function hello(){
//        return 'hello world'
//     }
//     return hello;
// }

// const ans= myFunc();//ans has become like a function
// ans();


//important array methods
//forEach 
//map
//filter
//reduce
// const numbers = [12,3,4,5,6,7,8];

// function myFunc(number , index){
//     console.log('INDEX IS ',index);
//     console.log(`${number}*2= ${number*2}`);

// }
// multiply_by_2(numbers[2],2);
// multiply_by_2(numbers[1],1);
// multiply_by_2(numbers[3],3);
// multiply_by_2(numbers[0],0);

// for(let i=0; i<numbers.length; i++){
//     // console.log(i);
//     multiply_by_2(numbers[i],i);
// }

// numbers.forEach(myFunc);//will produce the same result as the for loop does

// numbers.forEach(function(number,index){  //you can even make functions inside forEach
//     console.log(`index is ${index} number is ${number}`)
// })

// numbers.forEach(function(number){
//     console.log(number*2);
// })

// const users= [//it is an object in javascript

//     {firstName: "mehemud", age:23},
//     {firstName:'zahin', age:21},
//     {firstName: 'goblin', age:2},
//     {firstName: 'goblin2', age:24}
    
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// })

// for(let user of users){
//     console.log(user.firstName);
// }

// users.forEach((user,index)=>{
//     console.log(user.firstName, index);
// })





// //map method
//  const square =function(number){
//     return number * number;
// }

// const squareNumber = numbers.map(square);// whatever is returned will be stored in squarenummber array
// console.log(squareNumber);


//
// const squareNumber = numbers.map(function(number, index){
//     return `index: ${index},${number*number}`;
// });
// console.log(squareNumber)




//filter method

// const numbers = [1,2,4,3,5,8,13,12]

// const isEven= function(number){
//     return number%2===0;
// }




// numbers.filter(isEven);
// console.log(numbers.filter(isEven))


// const numbers = [1,2,4,3,5,8,13,12]

// const isOdd= function(number){
//     return number%2!==0;
// }




// const Odd=numbers.filter(isOdd);
// console.log(Odd)

//reduce method

// const numbers =[1,2,3,4,5,6,7,8,9];//aim: sum of all the numbers in array

// const sum =numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// });

// console.log(sum);

// const userCart = [
//     {producId:1, productName: "mobile", price: 12000},
//     {producId:1, productName: "mobile", price: 14000},
//     {producId:1, productName: "mobile", price: 11000},

// ]

// const totalAmount=userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice +currentProduct.price;
// },0)

// console.log(totalAmount);

//sort method
//5,9,1200,400,300
//5,9,300,400,1200

// const numbers =[5,9,1200,400,300]
// numbers.sort();
// console.log(numbers);//javascript will treat it as string and sort it according to ascii key


// const number1 = [3,4,5,79,3,55,12]//it will give proper order
// number1.sort((a,b)=>{
//     return a-b;//b-a for decsending order
// });
// console.log(number1)

//5,9

// const products =[
//     {productId:1, productName:"p1",price:1200},
//     {productId:2, productName:"p2",price:1100},
//     {productId:3, productName:"p3",price:1700},
//     {productId:4, productName:"p4",price:1400},
//     {productId:5, productName:"p5",price:1000},

// ]

//lowtohigh
// products.sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(products);

//find method
// const myArray = ["hello","cat","dog","lion"];

// function isLength(string){
//     return string.length === 3;

// }
// myArray.find();

// const ans= isLength("dog");
// console.log(ans);

// const users = [
//     {userId: 1 , userName : "harshit"},
//     {userId: 2 , userName : "mehemud"},
//     {userId: 3, userName : "google"},
//     {userId: 4 , userName : "milk"},
//     {userId: 5, userName : "cow"},    
// ];

// const myUser = users.find((users)=>{
//      return users.userId===3;
// });

// // users.find((user)=>user.userId===3);
// console.log(myUser);

//every method

// const numbers = [3,6,4,8,10];

// const ans =numbers.every((number)=>{//wil test every elemenet
//     return number%2===0;
// });
// //callback function is retirnung true or false
// console.log(ans)//it will only give true when all the elements in this will be true 

//check every product < 30000
// const userChart 
// =[
//     {productId: 1 , productName :"mobile", price:12000},
//     {productId: 1 , productName :"mobile", price:12000},
//     {productId: 1 , productName :"mobile", price:12000},
//     {productId: 1 , productName :"mobile", price:12000},
//     {productId: 1 , productName :"mobile", price:12000}
// ]

// const ans =userChart.every((cartItem)=>cartItem.price<30000);//no need to write return
//console.log(ans)


//some metohd 

// const numbers = [3,4,5,6,7,8];
// //is there any number which is true the  it will print true

// const ans=numbers.some((kk)=>kk%2===0);
// console.log(ans);

// const userCart = [

// {productId:1 , productName:"mobile", price :12000},
// {productId:1 , productName:"mobile", price :12000},
// {productId:1 , productName:"mobile", price :12000},
// {productId:1 , productName:"mobile", price :12000},
// {productId:2, productName:"mobile", price :100000},

// ]

// const ans1=userCart.some((cartItem)=>cartItem.price>500000);
// console.log(ans1)
//result:false because there isnt any product which  exceeds 500000

//fill method
//value, start ,end

// const myArray = new Array(10).fill(-1);//make an arrway with 10 -1's
// console.log(myArray);


// const myArray = [1,2,3,4,5,6,7];
// myArray.fill(0,2,5);
// console.log(myArray)//1,2,0,0,0,6,7



//splice method to delete something from array 
//start, delete , insert


 // const myArray = ['item1','item2','item3'];
// // //dlelte

// // myArray.splice(1,1);
// // consoålea.log(myArray);


// //insert



// myArray.splice(2,0,'inserted item ');
// console.log(myArray);


//how ot insert and delete

// const deletedItem =myArray.splice(1,2,"inserted item1","inserted item2");
// console.log("deleted item ",deletedItem);
// console.log(myArray);

//iterables
//on which we can use our for of loop

  //const firstName = 'hARSHIT ';
// for(let char of firstName ){
//     console.log(char);
// }

// const items = ['item1','item2','item3'];
// for(let item of items){
//     console.log(item)
// }

// const users = {'key1': 'value1','key2':'value2'}
// for(let item of users){
//     console.log(users)
// }////obje r is not iterable

//string, number array liek objr\etc \


//set is also an iterable

//what are the differednces between array and sets

// const numbers1 = new Set(
// [1,2,3]
// );
// console.log(numbers1);
//duplicaess will nit be added 

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(['items1','items2']);
// // if(numbers.has (1)){
// //     console.log("1 is present")
// // }else{
// //     console.log("1 is not presnet")
// // 
// // console.log(numbers);

// for(let number of numbers){
//     console.log(number);//so it is iterable
// }

// const myArray =[1,2,3,3,4,4,5,6,7,7]
// const uniqueEliments =new Set(myArray);
// console.log(uniqueEliments);
// let length = 0;
// for(let elements of uniqueEliments){
//     length++;
// }

// console.log(length //t print uniwue elements
// )

// //map
// const person ={
//     firstName: 'mehemud',
//     age: 20,
//}
// console.log(person.firstName)//object has keys

// console.log(person['firstName']);
// 

//ma also stores key value pair

// const person = new Map();
//             //key      //value
// person.set('firstName', 'mehemud');
// person.set('age',20);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// console.log(person);
// console.log(person.get('age'));
// console.log(person.keys());//key can be any data type plus it is also iterable

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let key of person ){
//     console.log(Array.isArray(key));
// }
// for(let [key, value]of person){//[]= is for destructuring
//     //console.log(Array.isArray(key));
//     console.log(key, value);
// }

// const person1 = {
//     id:1,
//     firstName:"Harshit"

// }
// const person2 = {
//     id:2,
//     firstName:"mehemud"

// // }

// const extraInfo = new Map();
// //userInfo.set(person1, {age:8 , gender: 'male'});
// extraInfo.set(person1, {age:8, gender:'male'});
// extraInfo.set(person2, {age:10, gender:'male'});
// console.log(person1.id);

// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);

// const obj ={
//     key1:"value1",
//     key2:"value2"
// }

// const obj2 = {...obj}//spreading//cloning
// //const obj2 = Object.assign({},obj);//spreading used back in the days 

// obj.key3 ="value3";

// console.log(obj)
// console.log(obj2)
// //we need to clone it to avoid this 



// //optional chaining
// const users = {
//     firstName:"harshit",
//     //address:{houseNumber: '1234'}//address is a object itself within an object
// }

// console.log(users.firstName);
// console.log(users.address?.houseNumber);//?.//it will give undefined it won' \t say it as an eror we may add these thing later on 




// //methods//this
// const person = {
//     firstName :"mehemud ",
//     age:20,
//     about1: function( ){ 
//     console.log(`person name is ${this.firstName}and person age is ${this.age}}`)
//     //this is that object which is calling the function it is being called by person


//     console.log( this.firstName,this.age)}// other way of doing this is like this

// }
// person.about1();

// function personInfo(){
//      console.log(`person name is ${this.firstName} and age is ${this.age}`)
// }

// const person1 ={
//       firstName : "rocket",
//       age : 8 ,
//       about :personInfo,
// }
// const person2 ={
//       firstName :"mehemud",
//       age : 10,
//       about :personInfo,
// }
// const person3 ={
//       firstName :"monkey",
//       age : 18 ,
//       about :personInfo,
// }
// const person4 ={
//       firstName : "asif",
//       age : 17 ,
//       about :personInfo,
// }

// person1.about();
// person2.about();
// person3.about();


//
// console.log(this);//window does the same as this
// //console.log(window)

// function  myFunc(){
//     'use strict';
//     console.log(this);// use strict use korle undefined ashhbe
// }
// myFunc();



// function hello(){
//     console.log("hello world");
// }
// hello.call();
//call,,,apply,bind

// const user1 = {
//     firstName : "mehemud",
//     age:8 ,
//     about :function(hobby, favMusic){
//         console.log(this.firstName, this.age,hobby,favMusic)
//     }
// }
// const user2 = {
//     firstName : "monkey",
//     age:18 ,
//     //i dont have about method in user2 but i want to use it
// }

// user1.about();
// user1.about.call(user2,"guiter","mozert");//now we will be able to use about method withhaving to use it in user2





//apply 
//call and apply aree pretty much same


// function about (hobby, favMusicician){
//     console.log(this.firstName,this.age,hobby,favMusicician)
// }

// about.apply(user1,[ 'guiter', 'bach']);//uses an array to pass extra  eliments

// const func= about.bind(user1, 'guiter', 'baach');
// func();



// const myFunc= function(){
//     console.log(this.firstName, thsi.age);
// }


//arrow functions
// const user1 ={
//     firstName: 'mehemud',
//     age:8,
//     about :()=>{
//         console.log(this.firstName, this.age);//arrow function takes this from surroundings ,,this will be window
//     }
// }

// user1.about()


//shrotsyntax


//object oriented proggraming
// const user1 = {
//   firstName :'mehemud',
//   lastName :"azud",
//   email: "mehemudazad.km@gmail.com",
//   age :2,
//   address:"house Number, Colony, pincode, state",
//   about: function(){
//     return`${this.firstName} is ${this.age} years old`
//   },
//   is18: function(){
//     return this.age>=18;
//   }
// }

// function createUser( firstName, lastName , email,age, address ){
//   const user ={}; 
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about=function(){
//     return`${this.firstName.Name} is ${this.age} years old`
//   }
//    user.is18 = function(){
//     return this.age >=18;
//    }
//    return user;
// }


// const user = createUser('mehemud',"azad",'mehemudazad.km@gmail.com',3, "my address")

// console.log(user)

//  const is18= user1.is18();
//  console.log(is18);


// const about= user1.about();
// console.log(about)



// //method is a functon within an object

// const user11 = createUser('harshit','azov','mehmudazad.km2gmail.com')
// const user2 = createUser('mehemud','azov','mehmudazad.km2gmail.com')
// const user3 = createUser('jain','azov','mehmudazad.km2gmail.com')
// const user4= createUser('cryptopopi','azov','mehmudazad.km2gmail.com')

//






// treating function like object

// function hello(){
//   console.log('hello world');
// }
//  hello()



// //ajvascrict functom ===> functon + object 

// console.log(hello.name);//gives the me of the functions

// hello.myOwnProperty ="very unique value";
// console.log(hello.myOwnProperty);// things just like object 
//functon provides more use ful properties
//functioojn providesffree space
// that free scape is called prototype
// console.log(hello.prototype);//its jusr lik an object
// //only functions provide prototype property

// if(hello.prototype){
//   console.log("prototype is present ")
// }else{
//   console.log("prototype is not present")
// }//proved

// function createUser( firstName, lastName , email,age, address ){//it is a funstion
//   const user = Object.create(createUser.prototype)
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about=function(){
//     return`${this.firstName.Name} is ${this.age} years old`
//   }
//    user.is18 = function(){
//     return this.age >=18;
//    }
//    return user;
// }

// createUser.prototype.about = function(){
//   return `${this.firstName} is ${this.age} years old`;
// }
// createUser.prototype.is18 = function(){
//   return this.age >=18;
// }
// createUser.prototype.sing = function(){
//   return "hello my name is mehemud azad";
// }

// const user1 = createUser("harshit", "azd", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
  
//  console.log(user1); 
// console.log(user1.is18());
// console.log(user1.sing());

//new keyword

// function createUser(firstName, age){
//   this.firstName = firstName ;
//   this.age = age;

// }
// createUser.prototype.about= function(){
//   console.log(this.firstName, this.age);
// }
// const user1 =new createUser("harshit", 6);
// console.log(user1);

// //Object.create(createUser.prototype); ja korto taa new kore ditese i mean it is creaitng a connection
// //no need to do this manually

// user1.about

//
// function createUser( firstName, lastName , email,age, address ){//it is a funstion
//    // const user = Object.create(createUser.prototype)
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     //this.about=function(){
//     //   return`${this.firstName.Name} is ${this.age} years old`
//     // }
//     //  this.is18 = function(){
//     //   return this.age >=18;
//     //  }
//     //  return this;//no need to right return
//   }
  
//   createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
//   }
//   createUser.prototype.is18 = function(){
//     return this.age >=18;
//   }
//   createUser.prototype.sing = function(){
//     return "hello my name is mehemud azad";
//   }
  
//   const user1 = new createUser("harshit", "azd", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
//   const user2 = new createUser("harshit", "azd", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
//   const user3 = new createUser("harshit", "azd", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
//   const user4 = new createUser("harshit", "azad", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
    
//    console.log(user1); 
//   console.log(user1.is18());
//   console.log(user1.sing());
//   console.log(user1.about());

// //it is a convension to start the functio nname with capital letters to tell the user that we used new keyword in making the function


// for(let key in user1){
//   //console.log(key);// if i dont want to see all the properties
//   if(user1.hasOwnProperty(key)){
//     console.log(key);
//   }
// }//will only print its own properties


// //more about properties
// let numbers =[1,2,3];
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

// function hello(){
//   console.log('hello');
// }
//prototype


//class keyword
// //class key word is fake
//  class CreateUser{
//   constructor( firstName, lastName , email,age, address ){//it is a funstion
//       //console.log('constructor started ')
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//       this.age = age;
//       this.address = address;
//       this.about=function(){
//         return`${this.firstName.Name} is ${this.age} years old`
//       }
//        this.is18 = function(){
//         return this.age >=18;//you are able to put the methods in side the constructor
//        }
//       //  return this;//no need to right return
//  }
// } 
//     // createUser.prototype.about = function(){
//     //   return `${this.firstName} is ${this.age} years old`;
//     // }
//     // createUser.prototype.is18 = function(){
//     //   return this.age >=18;
//     // }
//     // createUser.prototype.sing = function(){
//     //   return "hello my name is mehemud azad";
//     // }
    
//     const user1 = new CreateUser("harshit", "azd", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
//     const user2 = new CreateUser("harshit", "azd", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
//     const user3 = new CreateUser("harshit", "azd", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
//     const user4 = new CreateUser("harshit", "azad", "mehemudazad@gmsil.com",18, 'mohsin hall')//im declaring the funstion
//       //new keyword is mandatory

// console.log(user1.is18())
// console.log(user1.about())

// class Animal{
//   constructor(name,age){
//     this.name=name ;
//     this.age= age;
//   }
//   eat(){
//     return`${this.name} is eating`;
//   }
// isSuperCute(){
//   return this.age<= 1 ;
// }
//   isCute(){
//     return true;
//   }
// }

// const animal1 = new Animal('tom', 2);
// console.log(animal1);
// console.log(animal1.eat())
// console.log(animal1.isCute());
// console.log(animal1.isSuperCute())


// // class Dog {
// //   constructor(name, age){

// //   this.name =name;
// //     this.age= age;
// //   }
// //   eat(){
// //     return`${this.name} is eating`;
// //   }
// // isSuperCute(){
// //   return this.age<= 1 ;
// // }
// //   isCute(){
// //     return true;
// //   }
// // }

// // const tommy = new Dog("tommy", 3);
// // console.log(tommy.eat());



// //
// class Dog extends Animal{
//   constructor(name, age, speed){
//     super(name, age);
//     this.speed= speed;
//   }
//   eat(){
//     return `Modified Eat :${this.name} is eating`
//   }
//   run(){
//     return `${this.name} is running at ${this.speed} kmph`
//   }
// }

//const tommy = new Dog("tommy", 3,45);
// console.log(tommy.eat());
// console.log(tommy.isCute());
// console.log(tommy.run());


// //getter and setters
// class Person{
//   constructor(firstName, lastName, age){
//   this.firstName = firstName;
//   this.lastName= lastName;
//   this.age = age;
// }
//   fullName(){
//     return `${this.firstName} ${this.age}`;   //here fullName is a method
//   }
// }

// const person1 = new Person ("harshit", 'sharma',5);
// console.log(person1);
// console.log(person1.fullName());


// //2nd part
// how javascript works//js is a synchronus proggaming language

// console.log(this);//it will igve a window object
// console.log(window);
// console.log(firstName);
// var firstName = 'Harshit';
// console.log(firstName);

 
// function myFunction(){
//   console.log("this is my functon");
// }

// var firstName= 'mehemud';
// var lastName = " azad";
// var fullName = firstName + ""+ lastName;//concatation has bee used  
// console.log(fullName);

//first is error checking
//then ist will check global scope for variqables and function 
// it is also called lexical scoped language

//then glboal execution context


//hoisting
// console.log(myFunction);

//  var myFunction = function(){
//   console.log("this is my functon");
// }

// console.log(myFunction)


//var er khetre eder value undefined set hoye jay before the compilation even starts
//but previosly function declaration use kore je function age call korleo ta eshe porbe 

//global execution context has phases 
//one is creation phase
//other is code execution phase

//firstly is will be saved in global memory
//then it will be executed

//let and cosnt are hoisted but not initialized
//first it will do early error chh=ecking
//golbal scope

//gec 2 phases 1)global execution phase
              //2)code execution phase


// let foo='foo';
// console.log(foo);
// function getFullName(firstName , lastName){
//   console.log(arguments);//we dont use arguments any more
//   let myVar = 'var inside func';
//   console.log(myVar);
//   const fullName = firstName + ''+lastName;
//   return fullName;
// }              

// const personName = getFullName("harshit", 'azad');

// console.log(personName);

// //function execution context

// //array like object er lenght property ache

// //lexicsal environment scope chain

// const lastName = 'mehemud';
// const printName = function(){
//   const firstName = "harshit";
//   console.log(firstName);
//   console.log(lastName);
// }

// printName();

function printFUllName( firstName , lastName){
  function printName(){
    console.log(firstName, lastName);
  }
  return printName; 
}

const ans = printFUllName('harshit', 'sharma');

ans();

