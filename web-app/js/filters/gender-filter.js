angular.module('app').filter('full', function () {
  
  var male = 'male';
  var female = 'female';

  return function (gender) {
    if (gender == 'm') {
      return male;
    }
    if (gender == 'f') {
      return female;
    }
  }
});