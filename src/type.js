

const Happy = 'hahah';

const Type = {
    isObject(target) {
        console.log(`happy ${Happy}`);
        return Object.prototype.toString.call(target) === '[object Object]';
    },

    isArray(target) {
        return Object.prototype.toString.call(target) === '[object Array]';
    },

    sameType(origin, target) {
        return Object.prototype.toString.call(origin) === Object.prototype.toString.call(target);
    },
};

export default Type;