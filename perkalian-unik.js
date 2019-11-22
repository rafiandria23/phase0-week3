/**
 * HACKTIV8 Phase 0 - Logic Challenge - Perkalian Unik
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function perkalianUnik(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        let arrResult = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                arrResult *= arr[j];
            }
        }
        arr2.push(arrResult);
        arrResult = 1;
    }
    return arr2;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]