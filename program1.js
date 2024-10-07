/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to hold the open brackets
    let stack = [];
    
    // Mapping of closing to opening brackets
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Traverse each character in the string
    for (let char of s) {
        if (char in map) {
            // If current character is a closing bracket, check stack's last element
            let topElement = stack.length ? stack.pop() : '#';  // Pop last element or use a dummy value
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            // It's an opening bracket, push it to the stack
            stack.push(char);
        }
    }
    
    // Stack should be empty if all brackets are matched
    return stack.length === 0;
};

module.exports = { isValid };
