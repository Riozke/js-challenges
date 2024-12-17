export default function replaceLettersWithAlphabetIndex(input) {
  const cleanedString = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");

  return cleanedString
    .split("")
    .map((letter) => letter.charCodeAt(0) - "a".charCodeAt(0) + 1)
    .join(" ");
}
