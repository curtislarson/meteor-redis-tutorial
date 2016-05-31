import { Template } from 'meteor/templating';

import './main.html';

Template.tutorial.events({
  "click #set": function(e) {
    var key = $("#key").val();
    var value = $("#value").val();

    Meteor.call("setRedis", key, value, function(err, resp) {
      if (err) {
        alert(err);
      }
      $("#key").val("");
      $("#value").val("");
    });
  },
  "click #get": function(e) {
    var key = $("#key").val();
    Meteor.call("getRedis", key, function(err, resp) {
      if (err) {
        alert(err);
      }
      else {
        $("#getValue").text(resp);
      }
    });
  },
});

