app.controller('homeController', ['$scope','baseRest',
    
    ($scope, baseRest) => {

        const userInfoApi = baseRest.dataService('http://www.mocky.io/v2/57dfec211000009020598073');

        userInfoApi.get({ url: '/' }).then(data => {
           $scope.user = data.data;
        });

    }
]);
