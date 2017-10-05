
var name1 ="Ray", age1 =18;
var name2 ="Eve", age2 =26;

var agecomment = function(name, age)
{
  var msg;
  if (age<= 20)
  {
    msg = name+",you are so young!";
  }
  else
    {
    msg= name+", you are an adult....";
    }
  return msg;
}

var comment= agecomment(name1,age1);
console.log(comment);
var comment = agecomment(name2,age2);
console.log(comment);
