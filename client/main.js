var msgRecords = new Mongo.Collection("msgRecords");

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

Template.body.events({
  "click #submitmsg": function(event)
  {event.preventDefault();
    var formula ="67/7-150";
    var results =eval(formula);
    console.log (results);

    var texts= "This is a string.";
    var position = texts.indexOf("how much is?")
    console.log(position);

    var length = texts.length;
    console.log(length);

    var substring = texts.substring(0,17)
    console.log(substring);
    //var conversationbox = document.getElementById("conversationbox");

    //var allMsgs = conversationbox.value;

    //var newMsg = document.getElementById("newMsg");
    //newMsg = "\nYou: "+ newMsg;

    //allMsgs = allMsgs+ newMsg;

    //conversationbox.value = allMsgs;

    //var newElizaMsg = "\nEliza: what's up?"

    //allMsgs = allMsgs+ newElizaMsg ;

    //console.log(allMsgs);
  //alert("Button Clicked!");

    //console.log(newMsg);
 },

  "click #resetmsg": function(event)
  {event.preventDefault();
    //alert("Sure?")
  }
});
