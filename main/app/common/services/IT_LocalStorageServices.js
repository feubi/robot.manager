/**
 * Created by fbi on 19/10/2016.
 */
angular.module('localStorage.Services',[]);

angular.module('localStorage.Services')
//.service('ITLocalStorage', [function(){
    .provider('ITLocalStorage', [function(){

        //paramétrage, configuration du service
        this.defaultKey = "IT_KEY";
        var self = this;

        //self.defaultKey = "IT_KEY";

        //appeler la fonction get pour instancier le service
        this.$get = function(){

            //sauvegarde des cochesms
            function _save(obj){
                if (obj){
                    localStorage.setItem(self.defaultKey,angular.toJson(obj));
                    //localStorage.setItem('KEY',angular.toJson(obj));
                }
            }
            //chargement d'une clé contenant les coches
            function _load(){
                var obj = localStorage.getItem(self.defaultKey);
                //var obj = localStorage.getItem('KEY');
                if(obj){
                    return angular.fromJson(obj);
                }
                return obj;
            }
            return {
                save : _save,
                load : _load
            }
        }
    }])
