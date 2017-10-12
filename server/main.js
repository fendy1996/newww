var numbers = [18,356,27,3,40];
            // 0 1 2 3 4 5
/*var position = numbers.indexOf(4);
console.log(position);
index找出該文字"
var length = numbers.length;
console.log(length);*/


for(pos = 0 ; pos <= numbers.length; pos++)
{
  if (numbers [pos]<=30 )
  {
    var result = numbers[pos]*numbers[pos];
    var msg = numbers[pos] + " to the power of 2 is "+ result;
    console.log(msg);
  }
  else
  {
    console.log("no!")
  }
  }
/*numbers = numbers.slice(1,4);
console.log(numbers);*/

//console.log(numbers[5]);
/*numbers[3]=10;

console.log(numbers[3]);

numbers.push(70);
//numbers[5] = 70;
console.log(numbers[5]);

numbers.pop();
console.log(numbers[5]);*/
