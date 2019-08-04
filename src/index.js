import provinces from "./data/provinces";
import citys from "./data/citys";
import areas from "./data/areas";

const { toString } = Object.prototype;

function partial(fn, ...args) {
    return function inner(...newArgs) {
        return fn.apply(this, args.concat(newArgs));
    };
}

function compose(...fns) {
    return function inner(...args) {
        return fns.reduce((prev, fn) => {
            return fn.apply(this, [].concat(prev));
        }, args);
    };
}

function isEqual(x, y) {
    return x === y;
}

const equalString = partial(isEqual, "[object String]");
const equalObject = partial(isEqual, "[object Object]");

const _toString = function (param) {
    return toString.call(param);
};

const isString = compose(_toString, equalString);
const isObject = compose(_toString, equalObject);


const map = {
    provinces,
    citys,
    areas
};

function _getListByCodeOrName(type, param) {
    const filterItem = function (attr, item) {
        return item[attr] === param;
    };

    const filterItemByCode = partial(filterItem, "code");
    const filterItemByName = partial(filterItem, "name");
    
    const list = map[type];
    let result = list.filter(filterItemByCode);
    if (!result.length) {
        result = list.filter(filterItemByName); 
    }
    return result;
}

function _getListByCodeAndName(type, params) {
    let result =  map[type].filter((item) => {
        return item.code === params.code && item.name === params.name;
    });
    if (!result.length) {
        result =  _getListByCodeOrName(type, params.code || params.name);
    }
    return result;
}

function _getList(type, opt) {
    let result = null;
    if (isString(opt)) {
        // 如果传入的是字符串，则先按code查找，如果有则直接返回，如果没有则再按name查找，最后都没有返回[]
        result = _getListByCodeOrName(type, opt);
    } else if (isObject(opt)) {
        // 如果传入的是对象，则先按code及name双重查找，如果有则直接返回，如果没有则再按code or name查找，最后都没有返回[]
        result = _getListByCodeAndName(type, opt);
    } else {
        // 传入为空，返回所有
        result = map[type];
    }
    return result;
}

const _getProvinces = partial(_getList, "provinces");
const _getCitys = partial(_getList, "citys");
const _getAreas = partial(_getList, "areas");

const isProvinceCode = partial(isEqual, "provinceCode");

const _getListByProvincesOrCity = function(type, opt) {
    const code = isString(opt) ? opt : opt[type];
    const citys = isProvinceCode(type) ? _getCitys() : _getAreas();
    return citys.filter((item) => {
        return item[type] === code;
    });
};

function hasValidSearchParams(type, searchParams) {
    return !searchParams || (isObject(searchParams) && !searchParams[type]);
}

const hasValidProviceCodeParam = partial(hasValidSearchParams, "provinceCode");
const hasValidCityCodeParam = partial(hasValidSearchParams, "cityCode");

export default {
    getProvinces(searchParams) {
        return _getProvinces(searchParams);
    },
    getCitys(searchParams) {
        return _getCitys(searchParams);
    },
    getAreas(searchParams) {
        return _getAreas(searchParams);
    },
    getCitysByProvince(searchParams){
        return hasValidProviceCodeParam(searchParams) ? _getCitys(searchParams) : _getListByProvincesOrCity("provinceCode", searchParams);
    },
    getAreasByCity(searchParams) {
        return hasValidCityCodeParam(searchParams) ? _getAreas(searchParams) : _getListByProvincesOrCity("cityCode", searchParams);
    }
};
