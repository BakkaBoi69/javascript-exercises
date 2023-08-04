const getTheTitles = function(list) {
    let result = [];
    list.forEach(element => {
        result.push(element["title"]);
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
