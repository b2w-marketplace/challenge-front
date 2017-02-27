describe("Services", function() {

    beforeEach(module('b2wApp'));

    describe("About Service", function() {

        beforeEach(inject(function(_$controller_, _$httpBackend_) {
            $scope = {};
            var controller = _$controller_('CurriculumController', { $scope: $scope });

            $httpBackend = _$httpBackend_;

            //Tell the $httpBackend to respond with our mockLangularList array. Or whatever the api actually returns.Array used for example.
            var mockLanguageList = {};
            $httpBackend.whenGET('http://www.mocky.io/v2/587935ac260000420e1c3644').respond(200, mockLanguageList);
        }));

        it("verify name", function() {
            $scope.gettingData().then(function(response) {
                console.log(mockLanguageList);
            });
            $httpBackend.flush();

        });
    });    

});