angular
.module("meusServicos", ["ngResource"])
.factory('Profissional', function($resource){
  return $resource('http://www.mocky.io/v2/587935ac260000420e1c3644');
});