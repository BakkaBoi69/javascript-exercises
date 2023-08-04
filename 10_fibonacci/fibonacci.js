const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    num = Number(num);
    
    let a = 0, b = 1, temp = b;
    for (let i = 2; i <= num; i++) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
