var msgRecords = new Mongo.Collection("msgRecords");

/*  {
    speaker: "Fendy"
  },
  {
    $set: {msg:"Hello World!"}
  },
  {
     multi: true
  }
);*/

/*var msgTime =new Date();
//console.log(msgTime);//
msgRecords.insert(
  {
    speaker: "Fendy",
    msg:"hey",
    time: msgTime
  }
);

msgRecords.insert(
  {
    speaker: "Mike",
    msg:"hi!",
    time: msgTime
  }
);



var allMsgs = msgRecords.find({});
allMsgs = allMsgs.fetch();
console.log(allMsgs);*/

Metor.Meteor.methods({
  methodName:function(){

  }
});





/*

var allMsgs = msgRecords.findOne(
  {
    speaker: "Fendy"
  }
);
//allMsgs = allMsgs.fetch();//
console.log(allMsgs);*/
