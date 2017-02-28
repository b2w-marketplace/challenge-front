describe('About Factory', function() {

    var About, $q, $httpBackend
    var API = 'http://www.mocky.io/v2/587935ac260000420e1c3644';
    var RESPONSE_SUCCESS = {
        id : 1,
        'name': 'John xpto',
        'thumb': 'http://res.cloudinary.com/dnzwpkuzf/image/upload/v1484338381/avatar_cbjx9d.png',
        'profession': 'Frontend Developer'
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

    describe('return data API', function() {
        var result;

        beforeEach(function() {
            result = {};
            spyOn(About, 'getProfile').and.callThrough();
        });    

        it('should return a valid user name', function() {
            $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS))

            expect(About.getProfile).not.toHaveBeenCalled();
            expect(result.name).toEqual('John xpto');

            About.getProfile().then(function(res) {
                result = res;
            });

            $httpBackend.flush();

        });
    });
    
});