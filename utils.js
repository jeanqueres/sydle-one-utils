
var contains = function (array, value) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        if (array[index] == value) {
            return true;
        }
    }
    return false;
};

var removeDuplicates = function(array) {
    var exist = {};
    return array.filter(function(item) {
        return exist.hasOwnProperty(item) ? false : (exist[item] = true);
    });
}