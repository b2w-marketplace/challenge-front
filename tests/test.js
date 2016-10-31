
/* 
    test api http response 
*/

describe('profileCtrl', function() {
   var $httpBackend, $rootScope, createController, authRequestHandler;

   beforeEach(module('appProfile'));

   beforeEach(inject(function($injector) {
     $httpBackend = $injector.get('$httpBackend');
     authRequestHandler = $httpBackend
        .when('GET', 'http://www.mocky.io/v2/57dfec211000009020598073')
        .respond();

     $rootScope = $injector.get('$rootScope');
     var $controller = $injector.get('$controller');

     createController = function() {
       return $controller('profileCtrl', {'$scope' : $rootScope });
     };
   }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

   it('should fetch authentication token', function() {
     $httpBackend.expectGET('http://www.mocky.io/v2/57dfec211000009020598073');
     var controller = createController();
     $httpBackend.flush();
   });
});