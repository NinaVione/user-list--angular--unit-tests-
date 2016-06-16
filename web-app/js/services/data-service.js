angular.module('app').service('DataService', function ($http) {

  var users = [];

  this.getData = function () {
    var url = 'http://www.json-generator.com/api/json/get/bQMOWnUCWa?indent=2';
    var promise = $http.get(url)
    .then(function (response) {
      users = angular.fromJson(response.data);
      return users;
    });
    return promise;
  };

  this.setUser = function (user) {
    var found = false;
    for(var i = 0; i < users.length; i++) {
      if (users[i].email == user.email) {
        found = true;
      }      
    }
    if (!found) {
      user.joindate = new Date();
      user.balance = Math.random();
      users.push(user);
    }
  };

  this.getUsers = function () {
    return users;
  };

}); 