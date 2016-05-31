import { Meteor } from 'meteor/meteor';

var client = require("./redis");

Meteor.methods({
  setRedis: function(key, value) {
    return client.setSync(key, value);
  },
  getRedis: function(key) {
    return client.getSync(key);
  },
});
