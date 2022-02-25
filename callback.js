function welcomeMessage(name, greetHandler){
    // console.log(name);
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const myObj = {name: 'Tom Chiku', age: 11};

function greetMorning(name){
    console.log('Good Morning', name);
}
function greetAfternoon(name){
    console.log('Good Afternoon', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}

welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Tom Brady', greetAfternoon);
welcomeMessage('Tom Cruise', greetEvening);

function handleClick(){
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)


document.getElementById('btn').addEventListener('click', function (){
    console.log('button is clicked');
})