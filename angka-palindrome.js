/**
 * HACKTIV8 Phase 0 - Logic Challenge - Number Palindrome
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/




function angkaPalindrome(num) {
    num++;
    let numString = num.toString();
    let numReversed = '';
    
    for (let i = numString.length - 1; i >= 0; i--) {
        numReversed += numString[i];
    }

    if (numString === numReversed) {
        return num;
    } else {
        return angkaPalindrome(num);
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001