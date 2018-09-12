//document.addEventListener('contextmenu', event => event.preventDefault());
var app = angular.module('myApp', []);

app.service("translationService", ["$http", function ($http) {

    this.getTranslation = function ($scope, filename, language) {
        $scope.translation = {};
        for (var i = 0; i < filename.length; i++) {
            var languageFilePath = "resources/" + filename[i] + "_" + language + ".json";
            $http.get(languageFilePath).then(function (result) {
                var keys = Object.keys(result.data);
                angular.forEach(keys, function (key) {
                    $scope.translation[key] = result.data[key];
                });
            });
        }
    };
}]);

app.controller('myCtrl', ["$scope", "translationService", function ($scope, translationService) {
    var selectedfilename = ["AboutMe", "Experience", "Education", "Skills", "Projects", "Interests", "Menu"];

    $scope.selectedLanguage = "fr";
    translationService.getTranslation($scope, selectedfilename, $scope.selectedLanguage);

    $scope.changeRTL = function (selectedLanguage) {
        setTimeout(function () {
            $scope.selectedLanguage = selectedLanguage;
            translationService.getTranslation($scope, selectedfilename, selectedLanguage);
        }, 200)
    }

    var monthDiff = function (d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    var dateDiali = new Date(2017, 5, 1);
    $scope.ModdaHadi = monthDiff(dateDiali, new Date());

}]);