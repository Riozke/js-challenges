# Isogram

An isogram is a word that does not have any repeating letters. Additional Considerations:

- An empty string is considered an isogram.
- The function must be case insensitive and ignore accents.
- If the string has more than one word, return false.
- The string should be cleaned up before comparison.

Examples:

```js
func("Murciélago"); // returns true
func("reto"); // returns false
func("Casa"); // returns false
func("PeRrO"); // returns false
func("GaTo"); // returns true
```
