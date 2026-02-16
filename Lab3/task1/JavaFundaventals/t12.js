let result = (a+b<4) ? 'below':'over';
let message = (login=='employee') ? 'hello' : (login == 'Director') ?
'Greetings' :  (login == '') ? 'No login' : message = '';

alert( null || 2 || undefined );
//2
alert( alert(1) || 2 || alert(3) ); //1  2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); //1 undefined
alert( null || 2 && 3 || 4 ); // 2&&3 -> 3 last true -> 3 or first true

let age = (age>=14 && age<=90) ? 'true' : 'false';
let as = (!(as>=14 && as<=90)) ? 'true' : 'false';

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );