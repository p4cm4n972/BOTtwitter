console.log('bot starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
//SETTING UP A USER STREAM
var stream = T.stream('user');

//ANYTIME SOMEONE FOLLOWS ME
stream.on('follow', followed);

function followed (eventMsg){
var name = eventMsg.source.name;
var screenName = eventMsg.source.screen_name;
tweetIt('Thank you @' + screenName + ' for follow APLUS Système Automation ! Visit our website:  https://aplus-sa.com' );
}

function tweetIt (text) {
var tweet = {
status: text
}
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
if(err) {
console.log('Something went wrong');
} else {
console.log('It worked');
}
}
}
/*T.get('search/tweets', {q:'#neymar since:2017-05-01',count:1000,result_type:'popular'}, function(err, data, response) {
var tweets = data.statuses;
for (var i=0; i < tweets.length; i++) {
console.log(tweets[i].text);
};
});*/
