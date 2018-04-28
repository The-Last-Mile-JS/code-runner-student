// Customize the reporting

var testCode = require('tape');
var path = require('path');

var clc = require('cli-color');
var pass = clc.green;
var error = clc.red;
var expect = clc.magenta;

testCode.createStream({ objectMode: true }).on('data', function (eachTest) {
    if (eachTest.type === "test"){
        console.log("\n-----Start of Test-----")
    }
    else if (eachTest.type === "end"){
        console.log("-----End of Test-----")
    }
    else if (eachTest.ok === true){
        console.log(pass("pass"));
    }
    else if (eachTest.ok === false){
        console.log(error("Your code's output:", eachTest.expected));
        console.log(expect("Expected output:", eachTest.actual));
    }
    console.log();
});


process.argv.slice(2).forEach(function (file) {
    require(path.resolve(file));
});
