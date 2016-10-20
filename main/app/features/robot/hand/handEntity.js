/**
 * Created by fbi on 19/10/2016.
 */
angular.module('robot.manager').factory('Hand', [function(){
    function Hand(){
        this.thumb = 180;
        this.ringfinger = 180;
        this.auricular = 180;
        this.index = 180;
        this.major = 180;
    }

    return function(){
        return new Hand();
    }
}])