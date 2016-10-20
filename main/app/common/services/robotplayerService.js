/**
 * Created by fbi on 20/10/2016.
 */
'use strict';

angular.module('robot.manager')
    .service('RobotPlayerService',[
    'ApplicationService', '$http', function(ApplicationService, $http){

    function _playHand(hand){
        console.log(hand)

        function _error(){

        }
        $http({
            method:'GET',
            url:ApplicationService.load().API.URL + '/fingers',
            params:hand
        });
    }

    return {
            playHand : _playHand
        }
    }]);