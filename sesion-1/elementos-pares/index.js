export default function filterEvenOccurrences(array) {
  const countMap = new Map();

  array.forEach((element) => {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  });

  const result = [];
  countMap.forEach((count, element) => {
    if (count % 2 === 0) {
      result.push(element);
    }
  });
  return result;
}

console.log(filterEvenOccurrences([1, 1, 2, 3, 4, 4, 5]));
