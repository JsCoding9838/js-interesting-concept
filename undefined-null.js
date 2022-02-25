/* 

1. variable value not assigned
2. function but didn't writh return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range or array
7. accesing delete array element
8. explicitly set value to undefined
9. 

*/

let first;
// console.log(first);
function second  (x, y){
    // const sum = x + y;
    // document.getElementById('sum');
}
const result = second(3, 93);
// console.log(result);

function add(a, b){
    const sum = a + b;
    if(b < 10){
        return;
    }
    const fun = a * b;
    return sum;
}

const fourth = add(2, 12);
// console.log(fourth);

function double(a, b){
    const result = a * 2;
    // console.log(b);
    return result; 
}
double(5);
// const twoPeraMeter = double(5);
// console.log(twoPeraMeter);


const fifth = {name: 'sagor', age: 15, lacation: 'bandarbon'};
// console.log(fifth.phone);


const sixth = [54, 12, 41, 31];
// console.log(sixth[4]);

// we should not delete below this way
delete sixth[2];
// console.log(sixth[2]);


const seventh = undefined;
// console.log(seventh);


const myObj = {name: 'samad', profession: null};