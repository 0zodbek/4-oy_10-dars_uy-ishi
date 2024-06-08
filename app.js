// ********  forEach  ***********

//************************ 1-masala ************************

// function arrkvadrat(arg){
//     let a = arg ;
//     let b = [] ;
//     a.forEach(function(value){
//         b.push(value * value)
    
//         return b ;
//     })   
//     console.log(b);
// }
// console.log(arrkvadrat([1,2,3,4,5,6,7,8,9,99]));


//************************ 2-masala ************************

// function musbatArr (arg){
// let a = arg ; 
// let b = [] ;
// a.forEach(function(value){
// if(value > 0 ){
// b.push(value)
// }
// })
// return b ;
// }
// console.log(musbatArr([1,2,-4,-3,6,-9,5]));


// *********************** 3-masala ************************

// function arr2x (arg){
// let a = arg ; 
// let b = [];
// a.forEach(function(value){
// b.push(value*2)
// })
// return b ;
// }
// console.log(arr2x([1,2,3,4,5,6,7,8,9]));


// *********************** 4-masala ************************

// function sumArr (arg){
// let a = arg ;
// let sum = 0 ; 
// a.forEach(function(value){
// sum += value ;
// })
// return sum ; 
// }
// console.log(sumArr([1,2,3,4,5,6,7,8,9]));


// **********  filter  ************

// *********************** 5-masala ************************

// function arrMusbat (arg){
// let a = arg ;
// let b = a.filter(function(value){
// return value > 0
// })
// return b ;
// }
// console.log(arrMusbat([1,-9,3,-5,2,5,-4]));


// *********************** 6-masala ************************

// function arrMusbat (arg){
// let a = arg ;
// let b = a.filter(function(value){
// return value % 2 == 0
// })
// return b ;
// }
// console.log(arrMusbat([1,2,3,4,5,6,7,8,9]));


// *********************** 7-masala ************************

// function arrMusbat (arg){
// let a = arg ;
// let b = a.filter(function(value){
// return value.length <= 5
// })
// return b ;
// }
// console.log(arrMusbat(['salom','hayr','tanaffus','like',]));


//  ********************** 8-masala ************************  Berilgan massivdan faqat 18 yoshdan katta bo'lgan odamlarning yoshini ajratib, yangi massiv hosil qiling
// let a = [
// {name:'jons',year:17},
// {name:'joe',year:18},
// {name:'mike',year:19},
// {name:'lisa',year:15},
// ]

// let b = [] ;
// a.filter((person) => {
// if(person.year >= 18){
// b.push(person)
// }
// })
// console.log(b);


//  *************** map **************

//  ********************** 9-masala ************************

// function map1 (arg){
// let a = arg ;
// let b = [] ;
// b = a.map(function(value,index){
// return value ** 2 ;
// })
// return b ;
// }
// console.log(map1([1,2,3,4,5,6,7,8,9]));


// *********************** 10-masala ***********************

// function map2 (arg){
//     let a = arg ;
//     let b = [] ;
//     b = a.map(function(value,index){
//     return value + 5 ;
//     })
//     return b ;
//     }
//     console.log(map2([1,2,3,4,5,6,7,8,9]));


// *********************** 11-masala ***********************

// function map3 (arg){
// let a = arg ;
// let b = [] ;
// b = a.map(function(value, index){
// return value.toUpperCase()
// })
// return b ;
// }
// console.log(map3(['salom','akalar','bahor','sumalak']));


// ********************** 12-masala ************************

// Math.sqrt 


//  ********** some/every ***********

// ********************** 13-masala ************************

// function some1 (arg){
// let b = [] ;
// b = arg.some(function(value){
// return value < 0 ;
// })
// return b ;
// }
// console.log(some1([1,-2,3,-4,5,-6]));


// ********************** 14-masala ************************

// function some2 (arg){
// let b = [] ;
// b = arg.some(function(value){
// return value.length > 10 
// })
// return b ;
// }
// console.log(some2(['salom','vertolyotlar','akahonlarim','chiroyligim']));


// ********************** 15-masala ************************

// function every1 (arg){
// let b = [] ;
// b = arg.every(function(value){
// return value > 0 ;
// })
// return b ;
// }
// console.log(every1([1,2,3,4,5,6,-7,8]));


// ********************** 16-masala ************************




//  *********** umumiy **********

// ********************** 1-masala *************************

// function umumiy1(arg){
// let b = [] ;
// b = arg.includes(-4);
// return b ;
// }
// console.log(umumiy1([1,2,3,4,5,6,7,8,9]));


// ********************** 2-masala *************************

// function umumiy2 (arg){
// let a = arg.indexOf('salom');
// return a ;
// }
// console.log(umumiy2(['salom','baxtiyor','aka','ishlar','joyidami']));


// ********************** 3-masala *************************

// function umumiy3 (arg){
// let a = arg.lastIndexOf('salom');
// return a ;
// }
// console.log(umumiy3(['salom','baxtiyor','aka','ishlar','joyidami','salom']));


// ********************** 4-masala *************************

// function umumiy4 (arg){
// let a = arg.find(function(value,index){
// return value === 5
// })
// return a ;
// }
// console.log(umumiy4([5,1,2,3,4,5,6,7,8,8,5]));


// ********************** 5-masala *************************

// function umumiy5 (arg){
// let a = arg.find.Index()
// }