describe('DataService', function () {
  beforeEach(module('app'));

  var httpBackend;
  var DataService;
  var url = 'http://www.json-generator.com/api/json/get/bQMOWnUCWa?indent=2';

  var usersJSON = [
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
    inject(function (_$httpBackend_, _DataService_) {
      httpBackend = _$httpBackend_;
      DataService = _DataService_;
    })
  });

  it('gets all users [json]', function () {
     httpBackend.when('GET', url).respond(200, usersJSON);
     DataService.getData(function () {});
     httpBackend.flush();
     expect(DataService.getUsers()).toEqual(usersJSON);
  });

  it('adds new user to all users', function () {
    DataService.setUser(user);
    expect(DataService.getUsers()).toEqual([user]);
  });
  
});