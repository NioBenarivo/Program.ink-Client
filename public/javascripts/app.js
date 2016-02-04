var app = angular.module('ProgramInk', ['ngRoute', 'ngAnimate', 'ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {

        // $urlRouterProvider.otherwise('/index');

        $stateProvider

            .state('projecttab', {
                url: '/projecttab',
                templateUrl: 'javascripts/directives/projecttab.html',
                controller: 'ProjectTabController'
            })

            .state('languagestab', {
                url: '/languagestab',
                templateUrl: 'javascripts/directives/languagestab.html',
                controller: 'LanguagesTabController'
            })


    });
