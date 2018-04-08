
const Arr = {
    chunk(arr, size) {
        let temp = arr;
        let container = [];
        while (temp.length) {
            container.push(temp.splice(0, size));
        }
        return container;
    },
    unique(arr) {
        return Array.from(new Set(arr));
    }
}

export default Arr;