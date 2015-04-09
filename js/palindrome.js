//Created by Yan Shi on 4/8/2015
/**
 * Process string and check if it is a palindrome
 */
function calculatePalindrome() {
    var originInput = document.getElementById("palindromeMessage").value,
        processedInput = processInput(originInput),
        isPalindrome = checkPalindrome(processedInput);
    displayResultMsg(isPalindrome, originInput);
}

/**
 * Process the input
 * Remove all non-alphabetical and non-numeric characters
 * Make the string to lower so the comparison will be non-case-sensitive
 * @param input
 * @returns {string}
 */
function processInput(input) {
    return input.trim().replace( /[^a-zA-Z0-9]/, "").toLowerCase();
}

/**
 * Check if the string is a palindrome by comparing the original string to a reversed string
 * @param str
 * @returns {boolean}
 */
function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}

/**
 * Display the result message
 * @param isPalindrome
 * @param originInput
 */
function displayResultMsg(isPalindrome, originInput) {
    var msg = 'Input \"' + originInput + '\" ' + (isPalindrome ? 'is' : 'is not') + ' a palindrome';
    document.getElementById("resultMessage").value = msg;
}