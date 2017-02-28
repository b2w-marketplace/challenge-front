describe('About Service', function() {

    var About, $q, $httpBackend
    var API = 'http://www.mocky.io/v2/587935ac260000420e1c3644';
    var RESPONSE_SUCCESS = {
        //
    };

    beforeEach(angular.mock.module('api.b2w'));

    beforeEach(inject(function(_AboutService_, _$q_, _$httpBackend_) {
        About = _AboutService_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', function() {
        expect(About).toBeDefined();
    });

});