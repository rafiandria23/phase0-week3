/**
 * HACKTIV8 Phase 0 - Logic Challenge - Tentukan Deret Aritmatika
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function tentukanDeretAritmatika(arr) {
    if (arr[0] <= arr[1]) {
        var selisih1 = arr[1] - arr[0];
    } else if (arr[0] >= arr[1]) {
        var selisih1 = arr[0] - arr[1];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i+1]) {
            var selisih2 = arr[i+1] - arr[i];
        } else if (arr[i] >= arr[i+1]) {
            var selisih2 = arr[i] - arr[i+1];
        }
    }

    let status = '';

    if (selisih2 === selisih1) {
        status += true;
    } else {
        status += false;
    }

    return status;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false