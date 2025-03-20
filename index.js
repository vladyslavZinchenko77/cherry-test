function fibonacci(n) {
  if (n <= 1) return n;

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(fibonacci(10)); // 55

function removeDuplicates(arr) {
  let result = [];

  result = arr.filter((num, index, arr) => arr.indexOf(num) === index);
  console.log(result);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([7, 8, 8, 9, 10, 10, 10])); // [7, 8, 9, 10]
console.log(removeDuplicates([100, 200, 100, 300])); // [100, 200, 300]
console.log(removeDuplicates([])); // []
