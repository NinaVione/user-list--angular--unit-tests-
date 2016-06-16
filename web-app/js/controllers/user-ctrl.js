angular.module('app').controller('UserCtrl', function ($scope, DataService, $filter) {

  var orderBy = $filter('orderBy');

  $scope.getUsers = function () {
    DataService.getData().then(function (data) {
      $scope.users = $scope.transferToDateObject(data);
    });
  };


  $scope.transferToDateObject = function (data) {
    for (var i = 0; i < data.length; i++) {
      data[i].joindate = new Date(data[i].joindate);
    }
    return data;
  };

  $scope.order = function(predicate) {
    $scope.predicate = predicate;
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.users = orderBy($scope.users, predicate, $scope.reverse);
  };

  $scope.getUsers();
  $scope.order('age', true);

  $scope.addUser = function (user) {
    DataService.setUser(user);
    $scope.users = DataService.getUsers();
    $scope.user = '';
    $scope.clearForm();
  };

  $scope.clearForm = function () {
    $scope.userForm.$setPristine();
  };

});