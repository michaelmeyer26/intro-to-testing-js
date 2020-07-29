// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

//sayHello function
const sayHello = function(input) {
    if (input === "") {
        return "Hello, World!";
    } else if (isNaN(input) === false) {
        return "Hello, World!"
    }else if (typeof input === "string") {
        return "Hello, " + input  + "!";
    } else {
        return "Hello, World!";
    }
}