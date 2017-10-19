var msgRecords = new Mongo.Collection("msgRecords");

msgRecords.update(
  {
    speaker: "Fendy"
  },
  {
    $set: {msg:"Hello World!"}
  }
);

var allMsgs = msgRecords.find(
  {
    speaker: "Fendy"
  }
);
allMsgs = allMsgs.fetch();
console.log(allMsgs);

/*var msgTime =new Date();
console.log(msgTime);


msgRecords.insert(
  {
    speaker: "Fendy",
    msg:"hey",
    time: msgTime
  }
);

var allMsgs = msgRecords.findOne(
  {
    speaker: "Fendy"
  }
);
//allMsgs = allMsgs.fetch();//
console.log(allMsgs);*/
