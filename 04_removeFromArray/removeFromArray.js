const removeFromArray = function(arr, ...elements) {
    elements.forEach(function(currentElement) {
        let index = arr.indexOf(currentElement);
        if (index != -1) {
            arr.splice(arr.indexOf(currentElement), 1);
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
