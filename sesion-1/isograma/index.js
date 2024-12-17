export default function isIsogram(word) {
  const cleanedString = word
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (cleanedString.includes(" ")) return false;

  const letters = new Set();
  for (let letter of cleanedString) {
    if (letters.has(letter)) {
      return false;
    }
    letters.add(letter);
  }

  return true;
}
