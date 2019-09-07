var Pusher = require("pusher");

var pusher = new Pusher({
  appId: '857079',
  key: '01fe9bda0d3c72bd646a',
  secret: '74bd3cc17e64dedc8812',
  cluster: 'ap1',
  encrypted: true
});


//pusher.trigger('cordova', 'cordova-event', { message: 'Test Wow! I am triggering a real-time message from my server!' });
pusher.notify(['cordova'], {
    apns: {
      aps: { 
        alert: { 
          title: 'Update from Pusher',
          body: 'Wow! I am triggering a Push Notification from my server!'
        }
      }
    },
    webhook_url: "http://localhost/www/index.html",
    webhook_level: "INFO"
});

// json data
/*var message = '{"message": "Test Wow! I am triggering a real-time message from my server!"}';
 
// parse json
var jsonParsed = JSON.parse(message);
 
// access elements
console.log(jsonParsed.message);*/

//console.log("Hi there! This is Node.js!" + pusher.trigger('cordova', 'cordova-event', { message: 'Wow! I am triggering a real-time message from my server!' }))