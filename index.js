console.log('follow bot starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
//SETTING UP A USER STREAM
var stream = T.stream('user');

//ANYTIME SOMEONE FOLLOWS ME
stream.on('follow', followed);

function followed(eventMsg) {
    console.log('Follow event');
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('Thank you .@' + screenName + ' for follow APLUS Système Automation ! Visit our website:  https://aplus-sa.com');
}

function tweetIt(txt) {
    var tweet = {
        status: txt
    };
    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log('Something went wrong: ' + err);
        } else {
            console.log('It worked');
        }
    };
};