
import Type from './Type.js';

const Compare =  {
    compareCore(origin, target) {
        if (!Type.sameType(origin, target)) {
            return false;
        } else if (Type.isObject(origin)) {
            return Compare.deepCompareObject(origin, target);
        } else if (Type.isArray(origin)) {
            return Compare.deepCompareArray(origin, target);
        } else {
            return origin === target;
        }
    },

    // 数组深度对比
    deepCompareArray(origin, target) {
        if (origin && !target || !origin && target) {
            return false;
        }
        if (origin.length !== target.length) {
            return false;
        }
        for (let i = 0; i < origin.length; i++) {
            let originItem = origin[i];
            let targetItem = target[i];

            if (!Compare.compareCore(originItem, targetItem)) {
                return false;
            };
        }
        return true;
    },

    // 对象深度对比
    deepCompareObject(origin, target) {
        if (origin && !target || !origin && target) {
            return false;
        }

        let originKeys = Object.keys(origin);
        let targetKeys = Object.keys(target);
        if (!Compare.deepCompareArray(originKeys, targetKeys)) {
            return false;
        }

        for (let key of Object.keys(origin)) {
            let originItem = origin[key];
            let targetItem = target[key];

            if (!Compare.compareCore(originItem, targetItem)) {
                return false;
            }
        }

        return true;
    },

    // 变量深度对比
    deepCompare(origin, target) {
        if (origin && !target || !origin && target) {
            return false;
        }
        if (!Compare.compareCore(origin, target)) {
            return false;
        }
        return true;
    },
}

export default Compare;