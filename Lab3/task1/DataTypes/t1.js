let x = +prompt('x' , ' ');
let y = +prompt('x' , ' ');
alert(x+y);

alert( (6.35 * 10).toFixed(20) );

function readNum(){
    let n;
    do{
        n = prompt('enterr' , 0);
    } while(!isFinite(n));
    if(n===null || n=== "") return null;

    return +n;
}
alert(`read ${readNum}`);

function random(min, max){
    return min + Math.random()*(max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );