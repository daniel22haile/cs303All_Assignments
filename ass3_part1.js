"use strict";

/**====================================================================+
 * ====HELLO, OBJECT====
 * @param{object} user create a empty object named user
 * @param{string} string add a proprty name
 * @param{string} string replace a property name 
 * @param{string} string remove a property name 
 * ====================================================================+
 */
let user1 = {};
user1.name = "John";
user1.surname = "Smith";
user1.name = "Pete";
delete user1.name;

/**====================================================================+
 * ===CHECK FOR EMPTINESS===
 * @param{object} isEmpty to check the empty object
 * @param{boolean} boolean  true if it's empty
 * @param{boolean} boolean false if it's not empty 
 * ====================================================================+
 */
function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule));
// true schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
// false
/**====================================================================+
 * ===constant obeject?===
 * The const only protects the variable itself from changing.
 * In other words, user stores a reference to the object.
 * And it can’t be changed. But the content of the object can.
 * @param{object} user the user of an object
 * @param{string} string proprty name
 * @param{string} string the property name 
 * ====================================================================+
 */
const user2 = {
    name: "Daniel"
};
// works
user2.name = "Mike";
// error
//user2 = 876;
/**====================================================================+
 * ===multiply numeric properties===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
/**====================================================================+
 * ===Sum object properties===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

/**====================================================================+
 * ===multiply numeric properties by 2===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

/**====================================================================+
 * ===Using "this" in object literal===
 * Here the value of this inside makeUser() is undefined , 
 * because it is called as a function, not as a method with “dot” syntax.
 *The value of this is one for the whole function, code blocks and 
 *object literals do not affect it.
 *So ref: this actually takes current this of the function.  
 * ====================================================================+
 */
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
};
let user3 = makeUser();
console.log(user3.ref().name);
/**====================================================================+
 * ===Create a calculator===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
const prompt = require("prompt-sync")();
let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

/**====================================================================+
 * ===chaining===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}
ladder.up().up().down().up().down().showStep();

/**====================================================================+
 * ===Two functions – one object===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}
console.log(new A() == new B());


/**====================================================================+
 * ===Create new Calculator===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}
let calculator1 = new calculator1();
calculator1.read();
console.log("Sum=" + calculator1.sum());
console.log("Mul=" + calculator1.mul());

/**====================================================================+
 * ===Create new Accumulator===
 * @param{object} salaries the user of an object
 * @param{number} number proprty number of salay for John
 * @param{number} number proprty number of salay for Pete 
 * ====================================================================+
 */
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);