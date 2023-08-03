const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z\d]+/g, "");
    str = str.toLowerCase();
    return str.split('').reverse().join('') == str;
};

// Do not edit below this line
module.exports = palindromes;
