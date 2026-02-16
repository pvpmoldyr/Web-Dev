let p = 3;

while (p) {
  alert( p-- );
}
// shows 3, decreases i to 2
// shows 2, decreases i to 1
// shows 1, decreases i to 0
// done, while(i) check stops the loop
let o = 0;
while (++o < 5) alert( o );//1 2 3 4 
//The postfix form i++

let w = 0;
while (w++ < 5) alert( w);//1 2 3 4 5


//The answer: from 0 to 4 in both cases.
for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i );

for(let i=2;i<11;i++){
  if(i%2==0){
      alert(i);
  }
}
let i =0;
while(i<3){
  alert( `number ${i}!` );
  i++;
}

