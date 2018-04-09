

import Helper from './Helper.js';

const Collection = {
    count(...originParams) {
        let { params, comparator } = Helper._getComparator(originParams);
        let arr = params[0];

        let num = 0;
        if (comparator) {
            for (let i = 0; i < arr.length; i++) {
                if (comparator(arr[i])) {
                    num++;
                }
            }
        } else {
            num = arr.length;
        }

        return num;
    }
};

export default Collection;