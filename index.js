// const suare = {
//     area: (a) => (a * a),
//     perimeter: (a) => (4 * a)
// }

const square = require('./square.js')
const calsuare = (a) => {
    console.log(`the value of a is ${a} and the area is ` + square.area(a));
    console.log(`the value of a is ${a} and the perimeter is ` + square.perimeter(a));
}


calsuare(5);