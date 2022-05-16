// function playRugby() {
//     console.log("Go play rugby!");
// }

function spy(){
    return "spy";
}

function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction () {
    return function spy() {return "spy"};
}

function returnsAnAnonymousFunction() {
    return function () { return "I am a cool cat"}
}


//const returnsANamedFunction = () => spy();