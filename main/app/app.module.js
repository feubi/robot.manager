'use strict';

angular.module('robot.manager', [
    'itesoft',
    'localStorage.Services',
    'ngRoute',
    'ui.hand',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.bootstrap.dropdown'
    ])
    .config(['$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider) {
        // Declare languages mapping
        $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'de'], {
            'en_US': 'en',
            'en_GB': 'en',
            'fr_FR': 'fr',
            'fr-CA': 'fr',
            'de-DE': 'de'
        }).determinePreferredLanguage();

        // Use partial loader
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'assets/locale/{lang}/{part}-{lang}.json'
        });

        $translateProvider.useSanitizeValueStrategy();
    }])
        .config(['ITLocalStorageProvider','$rootScopeProvider',
            function(ITLocalStorageProvider,$rootScopeProvider){
                //configuration des providers (url, clé, fichiers)
                ITLocalStorageProvider.defaultKey = "ROBOT_MANAGER";


    }])

    .run(['$rootScope', '$route', function ($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.pageTitle = $route.current.title;
        });
    }]);




