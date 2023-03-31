//your JS code here. If required.
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredNumbers = numbers.filter((number) => number % 2 === 0);
      resolve(filteredNumbers);
    }, 1000);
  });
}

function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map((number) =>
        number % 2 === 0 ? number * 2 : number
      );
      resolve(multipliedNumbers);
    }, 2000);
  });
}

const outputDiv = document.getElementById("output");

getNumbers()
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then((result) => {
    outputDiv.innerHTML = result.join(", ");
  })
  .catch((error) => {
    console.error(error);
  });
