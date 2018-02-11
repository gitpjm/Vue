/**
 * Created by pjm on 2018/1/30.
 */
var f = v => v;
var f = function () { return v; };

var f = () => 5;
var f = function () { return 5 }

var sum = (sum1,sum2) => sum1 + sum2;
var sum = function (sum1,sum2) {
    return sum1 + sum2;
}
var sum = (num1,num2) => { console.log(num1 + num2) }
// sum(1,2)
let getItem = id => ({ id: id, name: "Temp" })

let person = { first:"123",last:"1233" }
const full1 = ( person ) => first + '' + last;
function full (person) {
    return person.first + '' + person.last;
}

const isEven = n => n % 2 === 0;
const squre = n => n * n;

// var result = values.sort(function (a,b) { return a - b; })

// var result = values.sort((a,b) => a-b);

const numbers = (...nums) => nums;
// numbers(1,2,3,4,5)

var handler = {
    id:"123",
    init: function () {
        document.addEventListener("click",event => this.dosomthing(event.type),false);
    },
    dosomething: function () {
        console.log('Handling' + type + 'for' + this.id);
    }
}

function insert (value) {
    return {into: function (array) {
        return {after: function (afterValue) {
            array.splice(array.indexOf(afterValue) + 1,0,value);
            return array;
        }}
    }}
}
insert(2).into([1,2,3]).after(1);

let insert1 = (value) => ( {into: (array) => ({ after:(afterVal) => { array.splice(array.indexOf(afterValue) + 1,0,value );return array; } })} )

var arr = [1,2,3,4];

Array.prototype.sum1 = function () {
    console.time("forLoop")
    var res = {};
    var arr = [];
    for(var i = 0;i<this.length;i++){
        if(!res[this[i]]){
            res[this[i]] = 1;
            arr.push(this[i])
         }
    }
    return arr;
}
arr.sum1()
console.log(arr.sum1())
console.timeEnd("forLoop")

var arr1 = [1,2,3,4]
Array.prototype.sum2 = function () {
    console.time("whileLoop")
    var sumResult = 0;
    var i = this.length;
    while (i--) {
        sumResult += parseInt(this[i]);
    }
    return sumResult;
}
arr1.sum2()
console.timeEnd("whileLoop")

var arr2 = [1,2,3,4,3];
console.time("reduce")
let res = {};
var sum = arr2.reduce(function(preValue,curValue,index,array){
    // console.log(preValue,curValue)
    if(!res[curValue]){
        res[curValue] = true;
        return preValue + "" + curValue;
    }
    return preValue.split('');
})
console.log(sum)
console.timeEnd("reduce")

var arrString = 'sfaskdflaefaf';
var arrS = arrString.split('').reduce((x => {
    let res = {};
    return (prev, curr) => {
        if(!res[curr]) {
            res[curr] = true;
            return prev + curr;
        }
        return prev;
    };
})(), '');
// console.log(arrS)
// var method = obj::obj.foo;
// var method = ::obj.foo;
// let log = ::console.log;
// let log = console.log.bind(console);




