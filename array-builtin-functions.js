/**
 * HACKTIV8 Phase 0 - Menggunakan Switch Case
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */





let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
 
function dataHandling2(arr) {
    arr.splice(1, 1, "Roman Alamsyah Elsharawy");
    arr.splice(2, 1, "Provinsi Bandar Lampung");
    arr.splice(4, 1, "Pria");
    arr.splice(5, 1, "SMA Internasional Metro");

    console.log(arr);
    
    let arrSplit = arr[3].split('/');
    switch (arrSplit[1]) {
		case '01':
			arrSplit[1] = 'Januari';
			break;
		case '02':
			arrSplit[1] = 'Februari';
			break;
		case '03':
			arrSplit[1] = 'Maret';
			break;
		case '04':
			arrSplit[1] = 'April';
			break;
		case '05':
			arrSplit[1] = 'Mei';
			break;
		case '06':
			arrSplit[1] = 'Juni';
			break;
		case '07':
			arrSplit[1] = 'Juli';
			break;
		case '08':
			arrSplit[1] = 'Agustus';
			break;
		case '09':
			arrSplit[1] = 'September';
			break;
		case '10':
			arrSplit[1] = 'Oktober';
			break;
		case '11':
			arrSplit[1] = 'November';
			break;
		case '12':
			arrSplit[1] = 'Desember';
			break;
		default:
			break;
    }
	console.log(arrSplit[1]);
	
	let arrSplit2 = arr[3].split('/');
	let arrSort = arrSplit2.sort(function(a, b){return b-a});

	console.log(arrSort);

	let arrJoin = arrSort.join('-');

	console.log(arrJoin);

	let arrSlice = arr[1].slice(0, 14);

	console.log(arrSlice);
}

dataHandling2(input);