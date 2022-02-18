const demoArray = [1, 20, 12, 3, 5, 2, 21, 6, 4, 45, 7];
const input = ["apple", "orange", "mango", "papaya"];

// ex 1
const demo = {name:"gayatri",age:22}
const demoSibling = {...demo,age:demo.age-2}
console.log(demoSibling)

// ex 2
const colorArray = ["blue","red","yellow"]
const anotherColorArray = [...colorArray,"green"]
console.log(anotherColorArray)

//ex3
const birthday = (a) => ({...a,age:a.age+1})
console.log(birthday({name:'anurag',age:22}))

// ex4
const isLessThanTen = a => a<10

const lessThanTenArray =  demoArray.filter(item=>isLessThanTen(item))
console.log(lessThanTenArray)

// ex5
const objectArray = demoArray.map((item) => ({
  number: item
}));
console.log(objectArray);

// ex6
const arraySum = demoArray.reduce((a,b)=>a+b,0)
console.log(arraySum)

// ex7
const customReduce = (arr, fun) => {
  let a = 0;
  arr.forEach((element) => {
    a = fun(a, element);
  });
  return a;
};
console.log(customReduce(demoArray, (a, b) => a + b));

// ex8
const oddNumberSum = demoArray.reduce((a,b) => b%2==0?a:a+b,0)
console.log(oddNumberSum)

// ex9
const oddIndicesNumberSum = demoArray
  .filter((item, i) => !((i + 1) % 2 == 0))
  .reduce((a, b) => a + b,0);
console.log(oddIndicesNumberSum);

// ex10
const biggestNumber = demoArray.reduce((a, b) => (b > a ? (a = b) : a));
console.log(biggestNumber);

// ex11
console.log((divisibleByTen = demoArray.filter((item) => item % 10 == 0)));

// ex12
console.log(demoArray.map((item) => (item % 2 == 0 ? --item : ++item)));

// ex13
const oddEvenObb = demoArray.reduce(
  (a, b) =>
    b % 2 == 0 ? { ...a, even: a.even + b } : { ...a, odd: a.odd + b },
  { even: 0, odd: 0 }
);
console.log(oddEvenObb);

// ex14
console.log(
  input.reduce((a, b) => {
    let t = b.length;
    if (a[t]) {
      return { ...a, [t]: a[t] + 1 };
    } else {
      return { ...a, [t]: 1 };
    }
  }, {})
);

// ex15
let vowels = ["a", "e", "i", "o", "u"];

const vowelArray = input.reduce((a, b) => {
    let hasVowel = false
  for(let i=0;i<vowels.length;i++){
      b.includes(vowels[i])?true:false
  }
}, []);

console.log(vowelArray)

// ex16
console.log(input.map(item=>({[item]:item.length})))

// currying

// ex17
const curryFunction = (name) => (action) => `${name} does ${action}`;
console.log(curryFunction('anurag')('eats anything'))

// ex18
const username = (name) => `ur name is ${name}`
const userID = (id) => `ur id is${id}`

console.log(username(userID('250')))

// ex19
const increment = (num) => num + 1;
const square = (n) => n * n;
const compose = (...arguments) => (n) => arguments.reduce((a,b) => b(a),n);
const incrementThenSquare = compose(increment,square)
console.log(incrementThenSquare(3))