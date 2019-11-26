/**
 * HACKTIV8 Phase 0 - Logic Challenge - Mengelompokkan Hewan
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function groupAnimals(arr) {
    let alphabets = [];

    for (let i = 0; i < arr.length; i++) {
        let test = 0;
        for (let j = 0; j < alphabets.length; j++) {
            if (arr[i][0] === alphabets[j]) {
                test++;
            }
        }
        if (test === 0) {
            alphabets.push(arr[i][0]);
        }
    }

    alphabets.sort();
    // arr.sort();
    /**
     * Uncomment that above if you want the output to be exactly sorted alphabetically.
     * I'm just trying to make the output exactly match the TEST CASES.
     * Just play around.
     */

    let arrResult = [];

    for (let k = 0; k < alphabets.length; k++) {
        let arrEachResult = [];
        for (let l = 0; l < arr.length; l++) {       
            if (arr[l][0] === alphabets[k]) {
                arrEachResult.push(arr[l]);
            } else {
                continue;
            }
        }
        arrResult.push(arrEachResult);
    }


    return arrResult;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]