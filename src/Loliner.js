

import Arr from './Arr.js';
import Compare from './Compare.js';

const Loliner = {
    mix(source) {
        Object.keys(source).map((key) => {
            if (key.indexOf('_') == 0) {
                return;
            } else {
                this[key] = source[key];
            }
        });
    },
};

Loliner.mix(Arr);
Loliner.mix(Compare);

export default Loliner;
