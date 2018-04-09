

import Type from './Type.js';
import Arr from './Arr.js'

const Helper = {
    _getComparator(params, defaultComparator) {
        let comparator;
        if (Type.isFunction(Arr.last(params))) {
            comparator = params.pop();
        } else {
            comparator = defaultComparator;
        }
        return {
            params,
            comparator,
        };
    }
};

export default Helper;