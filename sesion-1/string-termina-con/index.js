export default function stringTerminaCon(string1, string2) {
  // return string1.endsWith(string2);
  return string1.slice(-string2.length) === string2q;
}

stringTerminaCon("abc", "bc");
stringTerminaCon("abc", "d");
