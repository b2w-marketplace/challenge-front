describe('Curriculum Controller', function () {

    var $controller, CurriculumController;

    beforeEach(angular.mock.module('b2wApp'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        CurriculumController = $controller('CurriculumController', {});
    }));

    it('should be defined', function () {
        expect(CurriculumController).toBeDefined();
    });

});