// anagrams.
// given two strings, write a function to determine if 
// the second string is an anagram of the first. 
// an anagram is a word, phrase or name formed by rearranging 
// the letters of another.

// validAnagram('', ''); // true
// validAnagram('aaz', 'azz'); // false
// validAnagram('rata', 'lata'); // false
// validAnagram('qwerty', 'qeywrt'); // true

// time complexity: O(n)
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];

        // if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];

        // can´t find letter or letter is zero then it´s not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

let resultado = validAnagram('anagram', 'nagaram');
console.log(resultado);