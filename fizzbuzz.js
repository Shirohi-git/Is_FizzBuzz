function fizzbuzz(num) {
    let res = '';
    if (num % 3 == 0) res += 'Fizz';
    if (num % 5 == 0) res += "Buzz";
    if (num % 3 > 0 && num % 5 > 0) res += String(num);
    // console.log(res)
    return res;
}

// fizzbuzz(parseInt(require('fs').readFileSync('/dev/stdin', 'utf8')));

const input = document.getElementById("input");
