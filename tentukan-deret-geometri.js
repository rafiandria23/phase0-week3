/**
 * HACKTIV8 Phase 0 - Logic Challenge - Tentukan Deret Geometri
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function tentukanDeretGeometri(arr) {
    if (arr[0] <= arr[1]) {
        var selisih1 = arr[1] / arr[0];
    } else if (arr[0] >= arr[1]) {
        var selisih1 = arr[0] / arr[1];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i+1]) {
            var selisih2 = arr[i+1] / arr[i];
        } else if (arr[i] >= arr[i+1]) {
            var selisih2 = arr[i] / arr[i+1];
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
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false