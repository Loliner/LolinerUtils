

import Helper from './Helper.js';
import Type from './Type.js'

const Collection = {

    // 计数器（没啥卵用）
    count(collection, comparator) {
        let num = 0;
        if (comparator) {
            for (let i = 0; i < collection.length; i++) {
                comparator(collection[i]) && num++;
            }
        } else {
            num = collection.length;
        }

        return num;
    },

    // 聚合计数器（大多数情况用不上啊）
    countBy(collection, comparator, initializer) {
        let result = initializer ? initializer() : {};
        for (let i = 0; i < collection.length; i++) {
            let item = collection[i];
            let key;
            if (Type.isFunction(comparator)) {
                key = comparator(item);
            } else {
                key = item[comparator];
            }
            if (Object.hasOwnProperty.call(result, key)) {
                result[key]++;
            } else {
                result[key] = 1;
            }
        }
        return result;
    },

    every(collection, comparator) {
        // array
        if (Type.isFunction(comparator)) {
            for (let i = 0; i < collection.length; i++) {
                if (!comparator(collection[i])) {
                    return false;
                }
            }
            return true;
        }
        // object（只支持一层，后续写个contains方法吧，检测对象的涵盖关系）
        else {
            for (let i = 0; i < collection.length; i++) {
                let item = collection[i];
                for (let key of Object.keys(comparator)) {
                    if (comparator[key] != item[key]) {
                        return false;
                    }
                }
            }
            return true
        }
    }
};

export default Collection;