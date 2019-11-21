/**
 * HACKTIV8 Phase 0 - Menggunakan Switch Case
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */





 function balikString(str) {
     var strResult = '';

     for (let i = str.length - 1; i >= 0; i--){     
         strResult += str[i];
     }

     return strResult;
 }

console.log(balikString('hello world!'));