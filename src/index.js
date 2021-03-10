module.exports = function toReadable(number) {
        let arr = String(number).split('')
        let result
        let first = function (arg) {
            let one
            switch (arg) {
                case 0:
                    one = 'zero'
                    break;
                case 1:
                    one = 'one'
                    break;
                case 2:
                    one = 'two'
                    break;
                case 3:
                    one = 'three'
                    break;
                case 4:
                    one = 'four'
                    break;
                case 5:
                    one = 'five'
                    break;
                case 6:
                    one = 'six'
                    break;
                case 7:
                    one = 'seven'
                    break;
                case 8:
                    one = 'eight'
                    break;
                case 9:
                    one = 'nine'
                    break;

                default:
                    one = ''
                    break;
            }
            return one
        }
        let teen = function (arg) {
            let one
            switch (arg) {
                case 10:
                    one = 'ten'
                    break;
                case 11:
                    one = 'eleven'
                    break;
                case 12:
                    one = 'twelve'
                    break;
                case 13:
                    one = 'thirteen'
                    break;
                case 14:
                    one = 'fourteen'
                    break;
                case 15:
                    one = 'fifteen'
                    break;
                case 16:
                    one = 'sixteen'
                    break;
                case 17:
                    one = 'seventeen'
                    break;
                case 18:
                    one = 'eighteen'
                    break;
                case 19:
                    one = 'nineteen'
                    break;

                default:
                    one = ''
                    break;
            }
            return one

        }

        let twen = function (arg) {
            let one
            switch (arg) {
                case 0:
                    one = ''
                    break;

                case 2:
                    one = 'twenty'
                    break;
                case 3:
                    one = 'thirty'
                    break;
                case 4:
                    one = 'forty'
                    break;
                case 5:
                    one = 'fifty'
                    break;
                case 6:
                    one = 'sixty'
                    break;
                case 7:
                    one = 'seventy'
                    break;
                case 8:
                    one = 'eighty'
                    break;
                case 9:
                    one = 'ninety'
                    break;

                default:
                    one = ''
                    break;
            }
            return one
        }

        if (arr.length == 1) {
            result = first(+arr[arr.length - 1])
        } else if (arr.length == 2) {
            if (number < 20) {
                result = teen(number)
            } else {
                if (+arr[arr.length - 1] == 0) {
                    result = twen(+arr[arr.length - 2])
                } else {
                    result = (twen(+arr[arr.length - 2]) + " " + first(+arr[arr.length - 1]))
                }
            }
        } else if (arr.length == 3) {
            if (arr[arr.length - 2] == 0) {
                if (+arr[arr.length - 1] == 0) {
                    result = (first(+arr[arr.length - 3]) + ' hundred')
                    }
                    else {
                        result = (first(+arr[arr.length - 3]) + ' hundred ' + first(+arr[arr.length - 1]))
                    }
                } else
                if (arr[arr.length - 2] < 2) {
                    result = first(+arr[arr.length - 3]) + ' hundred ' + teen(Number(arr[1] + arr[2]))
                } else
                if (+arr[arr.length - 1] == 0) {
                    result = first(+arr[arr.length - 3]) + ' hundred ' + twen(+arr[arr.length - 2])
                } else {
                    result = (first(+arr[arr.length - 3]) + ' hundred ' + twen(+arr[arr.length - 2]) + " " + first(+arr[arr.length - 1]))
                }
            }
            return result
        }
