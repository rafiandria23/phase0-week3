/**
 * HACKTIV8 Phase 0 - Menggunakan Switch Case
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function hitungJumlahKata(kalimat) {
    let kalimatSplit = kalimat.split(' ');
    return kalimatSplit.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5