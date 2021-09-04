/**
 * Ensures that the array is ints sorted from least to greatest
 * @param {Array} output Outputed array returned from user's code
 * @return {boolean}
 */
function test(output) {
    if (!(output instanceof Array)) {
        return false;
    }
    for (let val of output) {
        if (!(val instanceof Number)) {
            return false;
        }
    }
    let prev = output[0];
    for (let i = 1; i < output.length; i++) {
        let curr = output[i];
        if (curr > prev) {
            return false;
        }
        curr = prev;
    }
    return true;
}