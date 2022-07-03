


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
// let age3 = 22;

// if(man[0]==="m"){
//     console.log('ur name starts with m');
// }
// if (age3> 18){
//     console.log("ur age is above 18");


//if (man[0]==="m"&& age3>18){
//     console.log('name starts with m and above 18');
// }else{
//     console.log('inside else');
// }
// //or
// if(man[1]==='e'||age3>18){
//     console.log('iside if');

// }else{
//     console.log('inside else');
//
//nested if else
// winning number 19
// 19 ur guess is right17 to low
// 20 too high
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
//when it comes to array it is a referece data type so similar locations are allocated in memory
//but for primitive data types like numbers different locations are allocated.
//if we want our similar arrays to look different the nwe need to write then separately but will we wright them separately nope. for that we have 3 methods

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
function singHappyBirthday(){
    console.log("sing HAPPY birthday");
}

singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();