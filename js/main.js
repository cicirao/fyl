
var stream = document.getElementById('stream');

// summary.innerHTML = tweets[1].summary;

// function test() {
//   stream.appendChild(summary);
// }

// test();

function fillList() {
  for (var i in tweets) {
    console.log(tweets[i].summary);
    var tweet = document.createElement('li');
    tweet.innerHTML = tweets[i].summary;
    stream.appendChild(tweet);
  };
  // $.each(tweets, function(i, tweet) {
  //   summary.innerHTML = tweet.summary;
  //   stream.appendChild(summary);
  // })
}

fillList();