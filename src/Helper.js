

import Type from './Type.js';

const Helper = {
    _getComparator(params, defaultComparator) {
        let comparator;
        if (Type.isFunction(params[params.length - 1])) {
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