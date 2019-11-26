/**
 * HACKTIV8 Phase 0 - Logic Challenge - Target Terdekat
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/ 





function targetTerdekat(arr) {
    let steps = 0;
    let checkArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            steps++;
            for (let j = i + 1; j < arr.length; j++) {
                if (j === arr.length - 1 && arr[j] === ' ') {
                    steps = 0;
                    break;
                } else if (arr[j] !== ' ') {
                    if (arr[j] === 'x') {
                        steps = 0;
                    } else if (arr[j] === 'o') {
                        break;
                    } else {
                        steps++;
                    }
                }
            }
            if (steps !== 0) {
                checkArray.push(steps);
                steps = 0;
            }
        } else if (arr[i] === 'o') {
            steps++;
            for (let k = i + 1; k < arr.length; k++) {
                if (k === arr.length - 1 && arr[k] === ' ') {
                    steps = 0;
                    break;
                } else if (arr[k] === ' ') {
                    if (arr[k] === 'o') {
                        steps = 0;
                    } else if (arr[k] === 'x') {
                        break;
                    } else {
                        steps++;
                    }
                }
            }
            if (steps !== 0) {
                checkArray.push(steps);
                steps = 0;
            }
        }
    }

    let result;

    for (let l = 0; l < checkArray.length; l++) {
        if (checkArray[0] > checkArray[l]) {
            result = checkArray[0];        
        }
    }

    return result;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2