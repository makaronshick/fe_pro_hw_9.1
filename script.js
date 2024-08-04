"use strict";
/* 
Дізнатись суму всіх зарплат користувачів:
const company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
Об'єкт може містити невідому кількість департаментів та співробітників
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function getSalariesSum(inputData) {
  if (Array.isArray(inputData)) {
    let salarySum = 0;
    for (let i = 0; i < inputData.length; i++) {
      salarySum += inputData[i].salary;
    }

    return salarySum;
  } else {
    let sum = 0;
    for (let subInputData in inputData) {
      sum += getSalariesSum(inputData[subInputData]);
    }

    return sum;
  }
}

const result = getSalariesSum(company);
console.log(result);
