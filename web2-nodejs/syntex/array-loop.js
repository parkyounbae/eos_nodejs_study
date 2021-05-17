var number = [1,2,400,12,34,5];

var i = 0;
var total=0;

while(i<5){
  console.log(number.length);
  total = total + number[i];
  i = i+1;
}

console.log('total : ${total}');
