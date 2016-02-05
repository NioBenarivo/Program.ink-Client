var routerApp = angular.module('routerApp', ['ngAnimate', 'anim-in-out', 'ui.router']);

    routerApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/inbox');

        $stateProvider
            .state('inbox', {
                url: '/inbox',
                templateUrl: 'javascripts/directives/inbox.html'
            })

            .state('inbox.inboxmsg', {
                url: '/message',
                templateUrl: 'javascripts/directives/inboxmsg.html'
            })

            .state('sent', {
                url: '/sent',
                templateUrl: 'javascripts/directives/sent.html'
            })

            .state('sent.sentmsg', {
                url: '/message',
                templateUrl: 'javascripts/directives/sentmsg.html'
            })

            .state('compose', {
                url: '/compose',
                templateUrl: 'javascripts/directives/compose.html'
            })


    });