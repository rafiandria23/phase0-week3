/**
 * HACKTIV8 Phase 0 - Logic Challenge - Palindrome
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function palindrome(kata) {
    let kataReversed = '';

    for (i = kata.length - 1; i >= 0; i--) {
        kataReversed += kata[i];
    }

    if (kata === kataReversed) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false