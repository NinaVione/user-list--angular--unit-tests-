describe('UserCtrl', function () {
  beforeEach(module('app'));

  var UserCtrl;
  var $filter;
  var DataService;
  var $scope;
  var usersData = [
    {
      "balance": 61.3446,
      "firstname": "Diane",
      "lastname": "White",
      "age": 89,
      "phone": 9454192208,
      "joindate": "Tue Sep 06 2011 16:48:52 GMT+0300 (Belarus Standard Time)",
      "gender": "f",
      "country": "Latvia",
      "email": "diannosborne@mondicil.com"
    }, 
    {
      "balance": 338.3954,
      "firstname": "Randi",
      "lastname": "Vaughn",
      "age": 60,
      "phone": 9005263222,
      "joindate": "Sun Sep 13 2009 15:56:29 GMT+0300 (Belarus Standard Time)",
      "gender": "f",
      "country": "Turks and Caicos Islands",
      "email": "nataliaatkins@mixers.com"
    }
  ];

  var user = {
    "balance": 8.2006999999999994,
    "firstname": "Sandra",
    "lastname": "Hopper",
    "age": 78,
    "phone": 9615403852,
    "joindate": "Sat May 29 1999 05:44:01 GMT+0300 (Belarus Standard Time)",
    "gender": "m",
    "country": "Seychelles",
    "email": "kerryguzman@eclipto.com"
  };

  beforeEach(function () {
    inject(function (_$controller_, _DataService_, _$filter_) {
      UserCtrl = _$controller_;
      DataService = _DataService_;
      $filter = _$filter_;
      $scope = {};
      var controller = UserCtrl('UserCtrl', { $scope: $scope });
    })
  });

  it('gets all users', function () {
    var succeedPromise;
    spyOn(DataService, "getUsers").and.callFake(function() {
      if (succeedPromise) {
        return $q.when(usersData);
      }
      else{
        return $q.reject("Something went wrong");
      }
    });
  });
  
  it('transfers date to object format', function () {
    var usersDateObjectData = usersData;
    for (var i = 0; i < usersDateObjectData.length; i++) {
      usersDateObjectData[i].joindate = new Date(usersDateObjectData[i].joindate);
    }
    expect($scope.transferToDateObject(usersData)).toEqual(usersDateObjectData);
  });

  it('adds a new user', function () {    
    $scope.userForm = {
      $valid: true,
      $setPristine: function() {}
    };
    spyOn($scope.userForm, '$setPristine');
    $scope.addUser(user);
    expect(DataService.getUsers()).toEqual([user]);
  });

  it('clears user form', function () {
    $scope.userForm = {
      $valid: true,
      $setPristine: function() {}
    };
    spyOn($scope.userForm, '$setPristine');
    $scope.clearForm();
    expect($scope.userForm.$setPristine).toHaveBeenCalled();
  });

  it('orders users by email', function () {
    var orderBy = $filter('orderBy');
    $scope.order('email');
    expect($scope.predicate).toEqual('email');
  });

  it('orders users by balance', function () {
    var orderBy = $filter('orderBy');
    $scope.order('balance');
    expect($scope.predicate).toEqual('balance');
  });

});