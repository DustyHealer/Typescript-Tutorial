// function apple(data: string | number, other: string) {
//     let naitem = 10;
//     if (data === 20) {
//         return true;
//     } else {
//         console.log('Else code');
//     }
// }

// apple('Fruit', 'Hekllo');

function apple(data: string) {
    switch (data) {
        case 'Fruit':
            console.log('Fruit');
            break;
        case 'Color':
            console.log('color');
            break;
    }
}

apple('Fruit');
