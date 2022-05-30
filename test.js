"use strict"


describe("pow", function() {

    function makeTest3(x) {
        let expected = x * x * x;
        it (`${x} в степени 3 будет ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
    });
    }

    for (let x = 1; x <= 3; x++) {
        makeTest3(x);
    } 


    function makeTest7(y) {
        let expected = y * y * y * y * y * y * y;
        it (`${y} в степени 7 будет ${expected}`, function() {
            assert.equal(pow(y, 7), expected);
    });
    }

    for (let y = 1; y <= 3; y++) {
        makeTest7(y);
    } 
}) ;
