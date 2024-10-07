/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in map) {
            let topElement = stack.length ? stack.pop() : '#';
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
