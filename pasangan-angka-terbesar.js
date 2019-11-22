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

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
