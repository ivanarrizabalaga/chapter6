angular.module('App')
    .controller('SettingsController', function ($scope, Settings, Locations) {
        $scope.settings = Settings;
        $scope.location = Locations;
        $scope.canDelete = false;

        $scope.remove = function (index) {
            Locations.toggle(Locations.data[index]);
        }
    });