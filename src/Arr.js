

import Type from './Type.js';
import Helper from './Helper.js';

const Arr = {

    last(arr) {
        return arr[arr.length - 1];
    },

    // 数组分组
    chunk(arr, size) {
        if (!arr.length || !size) {
            console.warn('please pass me valided params');
            return [];
        }
        let temp = arr;
        let container = [];
        while (temp.length) {
            container.push(temp.splice(0, size));
        }
        return container;
    },

    // 去重
    unique(arr) {
        return Array.from(new Set(arr));
    },

    // 过滤无效元素
    compact(arr) {
        return arr.filter((item) => {
            return !!item;
        });
    },

    flatten(obj, depth) {
        if (Type.isObject(obj)) {
            return Arr.flattenObject(obj, depth);
        } else if (Type.isArray(obj)) {
            return Arr.flattenArray(obj, depth);
        }
    },

    // 平面化数组
    flattenArray(arr = [], depth = Infinity, currDepth = 0, result = []) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (Type.isArray(item) && currDepth < depth) {
                Arr.flattenArray(item, depth, currDepth + 1, result);
            } else {
                result.push(item);
            }
        }
        return result;
    },

    // 平面化对象
    flattenObject(obj = {}, depth = Infinity, currDepth = 0, result = {}, securityArr = []) {
        // 死循环保护
        if (securityArr.includes(obj)) {
            return;
        } else {
            securityArr.push(obj);
        }

        Object.keys(obj).map((key) => {
            let sub = obj[key];
            if (Type.isObject(sub) && currDepth < depth) {
                Arr.flattenObject(sub, depth, currDepth + 1, result, securityArr);
            } else {
                result[key] = sub;
            }
        });

        return result;
    },

    // 并集
    union(...originParams) {
        let result = [];
        let { params, comparator } = Helper._getComparator(originParams, (item, arr) => {
            return arr.includes(item);
        });

        for (let i = 0; i < params.length; i++) {
            let arr = params[i];
            for (let j = 0; j < arr.length; j++) {
                if (!comparator(arr[j], result)) {
                    result.push(arr[j]);
                }
            }
        }

        return result;
    },

    // 交集
    intersection(...originParams) {
        let result = [...originParams[0]];
        let { params, comparator } = Helper._getComparator(originParams, (item, arr) => {
            return arr.includes(item);
        });

        for (let i = 1; i < params.length; i++) {
            result = result.filter(item => {
                return comparator(item, params[i]);
            });
        }

        return result;
    },

    // 差集( a-b-c... )
    difference(...originParams) {
        let result = [...originParams[0]];
        let { params, comparator } = Helper._getComparator(originParams, (item, arr) => {
            return arr.includes(item);
        });

        for (let i = 1; i < params.length; i++) {
            result = result.filter(item => {
                return !comparator(item, params[i]);
            });
        }

        return result;
    }
}

export default Arr;