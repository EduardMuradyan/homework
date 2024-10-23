function findLongestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) => 
        word.length >= longest.length ? word : longest, '');
}
const sentence = 'A revolution without dancing is a revolution not worth having'
;
console.log(findLongestWord(sentence));  


// 2












//3 

function rearrangeString(s) {
    let result = '';

    for (let i = 0; i < s.length; i += 3) {
        if (i + 2 < s.length) { 
            result += s[i + 1] + s[i + 2] + s[i]; 
        }
    }

    return result;
}

const input = "dfgjkloyp";
console.log(rearrangeString(input));