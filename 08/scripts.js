function Task1(){
    let byte = +prompt('Введіть кількість байтів.', '');
    let bit = byte * 8 ;
    let mbyte = byte * 0.0000010;
    let mbit = byte * 0.0000080;

    alert(`${byte}` + 'байт/c = ' + `${bit}` + ' біт/с = ' + `${mbyte}` + ' мбайт/с = ' + `${mbit}` + ' мбіт/с ')

    console.log(`${byte}` + 'байт/c = ' + `${bit}` + ' біт/с = ' + `${mbyte}` + ' мбайт/с = ' + `${mbit}` + ' мбіт/с ');
}

function Task2(){
    let a = +prompt('Введіть число: ');

    if(a == 0){
        alert('Число являється нулем.')
        console.log('Число являється нулем.')
    }
    else if(a % 2 == 0){
        alert('Число парне.')
        console.log('Число парне.')
    }
    else{
        alert('Число не парне.')
        console.log('Число парне.')
    }
}