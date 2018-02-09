/*
    Script for Profile
*/

var app = angular.module('appProfile', []),
    api = "http://www.mocky.io/v2/57dfec211000009020598073";

app.controller('profileCtrl', function($scope, $http) {
    $http.get(api)
        .then(function(response) {
            $scope.jsonApi = response.data;
        });
});
 
// Show/Hide Contact Mobile
var triggerContactMobile = document.getElementById('triggerContactMobile'),
    isVisible = false;
triggerContactMobile.onclick = function(){ 
    if(isVisible){
        triggerContactMobile.parentElement.style.height = "52px";
        isVisible = false;
    }
    else{
        triggerContactMobile.parentElement.style.height = "220px";
        isVisible = true;
    }
}
