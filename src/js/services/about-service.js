b2w
    .service('AboutService', about);

function about($http) {
    const API_ADDRESS = "http://www.mocky.io/v2/587935ac260000420e1c3644";
    
    this.getData = (cb) => {
        $http.get(API_ADDRESS)
        .then(function(api) {
            if (api) {
                var objs = [];                
                for (var x in api.data.personalSkill) {
                    if (x.toUpperCase() != "TITLE") {
                        var obj = {};
                        obj['toolName'] = x.toUpperCase();
                        obj['toolSkill'] = api.data.personalSkill[x];
                        objs.push(obj);
                    }
                }
                api.data.personalSkill.skills = objs;
                cb(api.data);
            }
        },
        function(error) {
            throw new Error(error);
        })
    };

    return this;
};