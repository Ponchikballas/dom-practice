// // практика задание 1
// let elem =document.querySelector('#elem');
// let p = document.querySelector('P');
// elem.addEventListener('blur', function(){
// p.textContent = p.textContent + '' + elem.value;
// })


// // практика задание 2
// let elemm = document.querySelectorAll('#elem');
// let button = document.querySelector("#button");
// let p = document.querySelector('p');
// button.addEventListener('click', func)
// function func(){
//     let sum = 0;
//     for(let elem of elemm ) {
//         sum += +elem.value
//     }
//     p.textContent = sum
// }



// // практика задание 3
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func)
// function func(){
// let arr = elem.value.split('');
// let sum = 0 ;
// for(let num of arr){
//     sum += +num
// }
// elem.value = sum
// }


// // практика задание 4
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func)
// function func(){
//     let arr = elem.value.split(',');
//     let sum = 0;
//     let count = 0;
//     for(let num of arr){
//         sum += +num;
//         count++;
//     }
//     elem.value = sum / count
// }



// // практика задание 5
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// elem1.addEventListener('blur', func)
// function func (){
//     let arr = elem1.value.split(" ");
//     elem2.value = arr[0];
//     elem3.value = arr[1]
//     elem4.value = arr[2]
// }



// // практика задание 6
// let input = document.querySelector('input');
// input.addEventListener('blur', func);
// function func (){
//     let arr = input.value.split(' ');
//    let qqq = '';
//    for ( let elem of arr){
//     let input1 = elem[0].toUpperCase() + elem.slice(1)
//     qqq+= input1;
//     qqq+= '';
//    }
//    input.value = qqq
// }




// // практика задание 7
// let input = document.querySelector('input');
// let peshka = document.querySelector('p');
// input.addEventListener('blur', func);
// function func(){
//     let arr = input.value.split('')
//     let count = arr.length
//     peshka.textContent = count
// }


// // практика задание 8
// let input = document.querySelector('input');
// input.addEventListener('blur', func)
// function func (){
//     let data = input.value.split('.')
//     let data2 = data.reverse()
//     let dash = data2.join('-')
//     input.value = dash
// }


//  // практика задание 9
//  let inp = document.querySelector('#inp');
//  let inp1 = document.querySelector('#inp1');
//  let p = document.querySelector('p');
//  inp1.addEventListener('click', func);
//  function func (){
// let word = inp.value
// let arr = word.split('')
// let arr1 = arr.reverse();
// let word1 = arr1.join('')
// if (word == word1){
//     inp1.value = 'yes'
// }
// else {
// inp1.value = 'no'
// }
//  }




// // практика задание 10
// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', func)
// function func (){
//     let arr = inp.value
//     let three = arr.indexOf('3', 0);
//     if (three == '-1'){
//         console.log('nety')
//     }
//     else {
//         console.log("est'");
//     }
// }