const first = 2;
const second = '2';
if(first === second){
    // console.log('condition is true');
}
else{
    // console.log('condition is false');
}


// can't not check Object and array through this (== ===) operator 
// const a = {name: 'ali'};
// const b = {name: 'ali'};
const a = [];
const b = [];

if(a == b){
    console.log('both are same');
}
else{
    console.log('they are not same');
}
