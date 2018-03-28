

import Type from './type.js';

const Loliner = {
    compareCore(origin, target) {
        if (!Type.sameType(origin, target)) {
            return false;
        } else if (Type.isObject(origin)) {
            return Loliner.deepCompareObject(origin, target);
        } else if (Type.isArray(origin)) {
            return Loliner.deepCompareArray(origin, target);
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

            if (!Loliner.compareCore(originItem, targetItem)) {
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
        for (let key of Object.keys(origin)) {
            let originItem = origin[key];
            let targetItem = target[key];

            if (!Loliner.compareCore(originItem, targetItem)) {
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
        if (!Loliner.compareCore(origin, target)) {
            return false;
        }
        return true;
    },

    formatDate (date, fmt) {
        let o = {
            "M+": date.getMonth() + 1,               //月份  
            "d+": date.getDate(),                    //日  
            "h+": date.getHours(),                   //小时  
            "m+": date.getMinutes(),                 //分  
            "s+": date.getSeconds(),                 //秒  
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度  
            "S": date.getMilliseconds()              //毫秒  
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
};

export default Loliner;