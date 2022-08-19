"use strict"

/*
describe("pow", function() {
    before(() => alert("Тестирование началось – перед тестами"));
    after(() => alert("Тестирование закончилось – после всех тестов"));

    beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
    afterEach(() => alert("После теста – заканчиваем выполнение теста"));

    describe("Возводит x в степень 3", function() {
        function makeTest3(x) {
        let expected = x * x * x;
        it (`${x} в степени 3 будет ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
    });
    }

    for (let x = 1; x <= 3; x++) {
        makeTest3(x);
    } } );


    describe("Возводит y в степень 7", function() {
        function makeTest7(y) {
        let expected = y * y * y * y * y * y * y;
        it (`${y} в степени 7 будет ${expected}`, function() {
            assert.equal(pow(y, 7), expected);
    });
    }

    for (let y = 1; y <= 3; y++) {
        makeTest7(y);
    } } );
}) ;


describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});


describe("Tests", () => {
    it("test", () => {
  assert.equal(feast("great blue heron", "garlic naan"), true)
  assert.equal(feast("chickadee", "chocolate cake"), true)
  assert.equal(feast("brown bear", "bear claw"), false)
    });
  });



describe("Tests", () => {
    it("test", () => {
  assert.equal(areaOrPerimeter(4 , 4) , 16);
  assert.equal(areaOrPerimeter(6 , 10) , 32);
    });
  });
  
  */
  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.equal(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
      assert.equal(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
      assert.equal(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
      })
    })
