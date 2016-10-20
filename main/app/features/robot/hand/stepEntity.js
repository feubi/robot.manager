/**
 * Created by fbi on 20/10/2016.
 */

'use strict'
//class : classname suivi des dépendances (objets)
angular.module('robot.manager').factory('Step',['Hand', function(Hand){
    function Step(previousStep){
        this.stepIndex = (previousStep ? previousStep.stepIndex+1 : 0);
        this.hand = (previousStep ? angular.copy(previousStep.hand, this.hand) : new Hand());
    }



    return function(previousStep){
        return new Step(previousStep)
    }
}])

