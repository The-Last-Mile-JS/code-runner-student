var testCode = require('tape');
var path = require('path');

testCode.createStream({ objectMode: true }).on('data', function (eachTest) {
    if (eachTest.type === "test"){
        console.log("\n-----Start of Test-----")
    }
    else if (eachTest.type === "end"){
        console.log("-----End of Test-----")
    }
    else if (eachTest.ok === true){
        console.log("pass");
    }
    else if (eachTest.ok === false){
        console.log("Your code's output:", eachTest.expected);
        console.log("Expected output:", eachTest.actual);
    }
    console.log();
});


process.argv.slice(2).forEach(function (file) {
    require(path.resolve(file));
});
