function randomNumber(y) {
    return parseInt(Math.random()* y);
};

function fizzBuzz(x){
    const fizz = 3;
    const buzz = 5;

    if(x % fizz == 0 && x % buzz == 0) {
        return "FizzBuzz";
    } else if(x % fizz == 0) {
        return "Fizz";
    } else if (x % buzz == 0) {
        return "Buzz";
    } else {
        return `O que você escolheu: ${x}`;
    };
};

for(let i = 0; i < 100; i++) {
    console.log(i, fizzBuzz(i))
}


