/**
 * Created by fbi on 19/10/2016.
 */
'use strict';

//modèle = les objets (hand, step), les classes
//vue : rendu html
//controleur : celui fait les actions sur la vue(rendu html, page web)
// voir modèle MVC
//le controleur c'estla glue, permettant de lier les éléments à la vue
angular.module('robot.manager')
    .controller('HandCtrl',['ITLocalStorage','Step', '$scope','RobotPlayerService',
        function(ITLocalStorage,Step, $scope, RobotPlayerService){

        //$scope.hand = new Hand();
        $scope.step = new Step();
        $scope.robotplayer = RobotPlayerService;
        //RobotPlayerService.playHand($scope.step.hand)
            $scope.applicationService = ApplicationService;

            $scope.$watch(('step.hand',function(){
                robotplayer.playHand(($scope.step.hand).then(function(){
                    $scope.requesInfo = 'success'
                },
                function(){
                    $scope.requesInfo = 'error'
                }))
            }))



}]);

/*
var application = {
    API : {
        URL: ''
    },
    playlist :[
        {
            ringfinger : '....'
        }
    ]
}
*/


