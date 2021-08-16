function fizzbuzz(num) {
    let res = '';
    if (num % 3 == 0) res += "Fizz! ";
    if (num % 5 == 0) res += "Buzz! ";
    if (num % 3 > 0 && num % 5 > 0) res += String(num);

    if (res.length==0) res = "Input is not a number"
    // console.log(res)
    return res;
}

// fizzbuzz(parseInt(require('fs').readFileSync('/dev/stdin', 'utf8')));

function input_number() {
    const input = parseInt(document.getElementById("input").value);
    console.log(input)
    const output = document.getElementById("output").innerHTML = `${fizzbuzz(input)}`;
}