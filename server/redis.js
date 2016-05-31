import { Meteor } from "meteor/meteor";

var redis = require("redis");
var client = redis.createClient();

client.setSync = Meteor.wrapAsync(client.set);
client.getSync = Meteor.wrapAsync(client.get);

client.on("error", function(err) {
  console.log("REDIS ERROR", err);
});

client.on("connect", function() {
  console.log("connected");
});

module.exports = client;
