module.exports = function toReadable (number) {
    const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr2 = [0, 0, 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
      return arr1[number];
    } else if (number > 20 && number < 100) {
        return arr2[number.toString().split('')[0]] + ' ' + arr1[number.toString().split('')[1]];
    } else if (number >= 100 && number.toString()[1] === '0' && number.toString()[2] === '0') {
        return arr1[number.toString()[0]] + ' hundred';
    } else if ((number >= 100 && number.toString()[1] === '0' && number.toString()[2] !== '0')){
        return arr1[number.toString()[0]] + ' hundred' + ' ' + arr1[number.toString()[2]];
    } else if ((number >= 100 && number.toString()[1] === '1')) {
        return arr1[number.toString()[0]] + ' hundred' + ' ' + arr1[number.toString()[1] + number.toString()[2]]
    } else {
        return arr1[number.toString().split('')[0]] + ' hundred' + ' ' + arr2[number.toString().split('')[1]] + ' ' + arr1[number.toString().split('')[2]];
    }
}
