module.exports = {

    contains:contains,
    removeDuplicates:removeDuplicates,
    isEmptyOrSpacesOrUndefined:isEmptyOrSpacesOrUndefined,
    createMap:createMap,
    howManyTimesTheValueAppears:howManyTimesTheValueAppears,
    hasChanged:hasChanged
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

var howManyTimesTheValueAppears = function (arr) {

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


var hasChanged = function(object, oldObject, key, type){
    
    if(!object){return;}
    
    if((object === undefined  || object=== null )  || (key === undefined  || key === null )  || oldObject === undefined){ 

        throw "Object e object["+ key +"] são obrigatórios. Object:" + _utils.stringifyAsJson(object) +"/Key: " + key + "oldObject = " +    _utils.stringifyAsJson(oldObject) ;
    }
    
    if(!type){throw "Tipo do campo não encontrado.Type: " + type; }
    
     if((oldObject && oldObject[key])  && object[key]  &&typeof(object[key]) !== typeof(oldObject[key])){
        throw "Object["+key+"] = " + object[key] + " e oldObject["+key+"]= "+ oldObject[key] +" são de tipos diferentes";
    }
     
    let isChanged = false;
     
    if(object[key] && oldObject === null)
    {
        return isChanged = true;
    }
  
     switch (type) {
                case "number":
                     isChanged = Number(object[key]) !==  Number(oldObject[key]);
                    break;
                case "string":
                     isChanged = String(object[key]) !==  String(oldObject[key]);
                    break;
                case "boolean":
                    isChanged = object[key] !==  oldObject[key];
                    break;
                case "object":
                     isChanged =   oldObject && object[key] &&
                                    (
                                        !oldObject[key] ||
                                        oldObject[key]._id !== object[key]._id
                                    )
                    break;
                case "objectAsString":
                    isChanged =   _utils.stringifyAsJson(object[key]) !== _utils.stringifyAsJson(oldObject[key]);
                    
                    break;
                default:
                    break;
            }
    
    return isChanged;
    
    
}