//Created by Yan Shi on 4/8/2015
/**
 * Calculate key count, process data and display the msg in result field
 */
function calculateKeyCount() {
    var originInput = document.getElementById("keyCountMessage").value,
        itemArray = originInput.split(/\r?\n/g),
        i, len = itemArray.length, item, keyValueArray,
        validObject = {},
        errorItemArray = [];
    for (i = 0; i < len; i++) {
        item = itemArray[i];
        keyValueArray = item.split(',');
        if (keyValueArray.length == 2 && isNumberString(keyValueArray[1])) {
            validObject = calculateValidItem(validObject, keyValueArray);
        } else if (item){
            errorItemArray.push(item);
        }
    }
    displayResultMessage(validObject, errorItemArray);
}

/**
 * Check if the value only contains number, period and negative symbol
 * @param string
 * @returns {boolean}
 */
function isNumberString(string) {
    return /^[0-9,.,-]*$/.test(string.trim());
}

/**
 * Loop through the data object and adds up the value for keys
 * If key exist, add value to the existing key
 * If key does not exist, assign the value to the new key
 * @param validObject
 * @param keyValueArray
 * @returns {*}
 */
function calculateValidItem(validObject, keyValueArray) {
    if (keyValueArray[0].trim() in validObject) {
        validObject[keyValueArray[0].trim()] += parseInt(keyValueArray[1].trim());
    } else {
        validObject[keyValueArray[0].trim()] = parseInt(keyValueArray[1].trim());
    }
    return validObject;
}

/**
 * Generate result msg and display in result field
 * @param validObject
 * @param errorItemArray
 */
function displayResultMessage(validObject, errorItemArray) {
    var validMessage = getValidMessage(validObject);
    var invalidMessage = getErrorMessage(errorItemArray);
    document.getElementById("resultMessage").value = validMessage + '\n' + invalidMessage;
}

/**
 * Generate valid result messages
 * @param validObject
 * @returns {string}
 */
function getValidMessage(validObject) {
    var msg = 'Key Count Result:\n';
    for (var key in validObject) {
        msg += 'The total for ' + key + ' is ' + validObject[key] + '.\n';
    }
    return msg;
}

/**
 * Generate error message for invalid inputs
 * If no error, then do not display the error message
 * @param errorItemArray
 * @returns {string}
 */
function getErrorMessage(errorItemArray) {
    if (errorItemArray.length == 0) {
        return ''
    } else {
        var msg = 'Key Count Invalid Input:\n',
            i, error, len = errorItemArray.length;
        for (i = 0; i < len; i++) {
            error = errorItemArray[i]
            msg += '\"' + error + '\" is invalid input\n';
        }
        return msg;
    }
}