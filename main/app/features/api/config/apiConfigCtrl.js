/**
 * Created by fbi on 19/10/2016.
 */
'use strict';
angular.module('robot.manager').controller('ApiConfigCtrl',['ApplicationService', '$scope',function(ApplicationService, $scope){
    $scope.applicationService = ApplicationService;
    $scope.application = ApplicationService.load();


}]);

