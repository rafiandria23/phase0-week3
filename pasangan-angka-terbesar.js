function pasanganTerbesar(num) {
    let numString = num.toString();
    let numResult = [];

    for (let i = 0; i < numString.length; i++) {
        numResult.push(numString[i] + numString[i+1]);
    }

    let max = Number(numResult[0]);

    for (let j = 1; j < numResult.length; j++) {
        if (max < Number(numResult[j])) {
            max  = Number(numResult[j]);
        }
    }

    return max;
}

console.log(pasanganTerbesar(123456789));
