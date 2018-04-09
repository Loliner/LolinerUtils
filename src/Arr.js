

import Type from './Type.js';

const Arr = {

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
            return this.flattenObject(obj, depth);
        } else if (Type.isArray(obj)) {
            return this.flattenArray(obj, depth);
        }
    },

    // 平面化数组
    flattenArray(arr = [], depth = Infinity, currDepth = 0, result = []) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (Type.isArray(item) && currDepth < depth) {
                this.flattenArray(item, depth, currDepth + 1, result);
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
                this.flattenObject(sub, depth, currDepth + 1, result, securityArr);
            } else {
                result[key] = sub;
            }
        });

        return result;
    },

    // 并集
    union(...arrs) {
        let result = [];

        for (let i = 0; i < arrs.length; i++) {
            let arr = arrs[i];
            for (let j = 0; j < arr.length; j++) {
                if (!result.includes(arr[j])) {
                    result.push(arr[j]);
                }
            }
        }

        return result;
    },

    // 交集
    intersection(...arrs) {
        let result = [...arrs[0]];

        for (let i = 1; i < arrs.length; i++) {
            result = result.filter(item => arrs[i].includes(item));
        }

        return result;
    },

    // 差集( a-b-c... )
    difference(...arrs) {
        let result = [...arrs[0]];
        
        for (let i = 1; i < arrs.length; i++) {
            result = result.filter(item => !arrs[i].includes(item));
        }

        return result;
    }
}

export default Arr;