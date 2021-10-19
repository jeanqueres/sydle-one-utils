module.exports = {

    contains:contains,
    removeDuplicates:removeDuplicates,
    isEmptyOrSpacesOrUndefined:isEmptyOrSpacesOrUndefined,
    createMap:createMap,
    howManyTimeTheValueAppears:howManyTimeTheValueAppears
};


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

var isEmptyOrSpacesOrUndefined = function(str){
    return str === null || str.match(/^ *$/) !== null ||str === undefined ;
}

var createMap = function(array, key) {
    let map = {};
    array.forEach(item => {
        map[item[key]] = item;
    });
    return map;
};

function howManyTimeTheValueAppears(arr) {

    let result = [];

    let res = arr.reduce((data, curr) => {
        data[curr] = data[curr] ? ++data[curr] : 1;
        return data;
    }, {});



    Object.entries = function(obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };



    Object.entries(res).forEach(([val, numTimes]) => {
        if (numTimes > 1)
            result.push("O valor " + val + " aparece " + numTimes + " vezes");
    });

    if (!result.length) {
        result.push("Nenhum resultado encontrado ou todos os elementos aparecem apenas 1 vez.");
    }


   return result;
}
