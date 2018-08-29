

const Type = {
    isObject(target) {
        return Object.prototype.toString.call(target) === '[object Object]';
    },

    isArray(target) {
        return Object.prototype.toString.call(target) === '[object Array]';
    },

    isFunction(target) {
        return Object.prototype.toString.call(target) === '[object Function]';
    },

    isString(target) {
        return Object.prototype.toString.call(target) === '[object String]';
    },

    isNumber(target) {
        return Object.prototype.toString.call(target) === '[object Number]';
    },

    sameType(origin, target) {
        return Object.prototype.toString.call(origin) === Object.prototype.toString.call(target);
    },
};

export default Type;