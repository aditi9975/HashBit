// 1. Variable scope example
function scopeExample() {
    var a = 'var scoped';
    let b = 'let scoped';
    const c = 'const scoped';
  
    if (true) {
      var a = 'var re-declared inside block';
      let b = 'let inside block';
      const c = 'const inside block';
      console.log('Inside block:', a, b, c);
    }
  
    console.log('Outside block:', a, b, c);
  }
  scopeExample();
  
  // 2. Get second fruit from array
  function getSecondFruit() {
    const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
    return fruits[1];
  }
  console.log('Second fruit:', getSecondFruit());
  
  // 3. Push and pop element
  function modifyArray(arr) {
    arr.push('NewElement');
    arr.pop();
    return arr;
  }
  console.log('Modified array:', modifyArray([1, 2, 3]));
  
  // 4. Square numbers using map
  function squareNumbers(numbers) {
    return numbers.map(num => num * num);
  }
  console.log('Squared numbers:', squareNumbers([2, 4, 6]));
  
  // 5. Filter out even numbers
  function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
  }
  console.log('Odd numbers:', filterOddNumbers([1, 2, 3, 4, 5, 6]));
  
  // 6. Greeting from object
  function greetPerson(person) {
    console.log(`Hello, my name is ${person.name}, I'm ${person.age} and I work as a ${person.occupation}.`);
  }
  const person = { name: 'Alice', age: 25, occupation: 'Engineer' };
  greetPerson(person);
  
  // 7. Area of rectangle
  function getArea(rectangle) {
    return rectangle.width * rectangle.height;
  }
  console.log('Area:', getArea({ width: 5, height: 10 }));
  
  // 8. Get object keys
  function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  console.log('Keys:', getObjectKeys({ name: 'John', age: 30 }));
  
  // 9. Merge two objects
  function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  console.log('Merged object:', mergeObjects({ a: 1 }, { b: 2 }));
  
  // 10. Sum array using reduce
  function sumArray(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
  }
  console.log('Sum:', sumArray([10, 20, 30]));
  

  //to run node index.js
