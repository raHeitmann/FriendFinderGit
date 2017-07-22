module.exports = function(app,path,friends) {

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

//QUIZ SUBMISSION
//==============================================================

app.post("/api/new", function(req, res) {
  var newcharacter = req.body;

  friends.push(newcharacter);

  //COMPARING FUNCTION
//===========================================================

  function compareFriends () {

    var me = friends[friends.length-1];
    var allDiff=[];
    for (var i=0; i<friends.length-1; i++){
      var totalDiff = 0;
      //CHANGE TO J<10 WHEN QUESTIONS INCREASED
      for (var j=0; j<6; j++){
        totalDiff = totalDiff+(Math.abs(me.scores[j]-friends[i].scores[j]));
      }
      allDiff.push(totalDiff);
    }

    function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
  }

  res.json(friends[indexOfMin(allDiff)]);
  
  //END OF COMPARE FRIENDS FUNCTION
  }

  compareFriends();

//END OF POST
});
};