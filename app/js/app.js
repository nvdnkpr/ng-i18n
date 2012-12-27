'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngI18n']).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {templateUrl:'partials/partial1.html', controller:MyCtrl1});
    $routeProvider.when('/view2', {templateUrl:'partials/partial2.html', controller:MyCtrl2});
    $routeProvider.otherwise({redirectTo:'/view1'});
}]);

myApp.value('ngI18nConfig', {
    //defaultLocale should be in lowercase and is required!!
    defaultLocale: 'en',
    //supportedLocales should be in lowercase and is required!!
    supportedLocales: ['en', 'nl', 'nl-be'],
    //without leading and trailing slashes, default is i18n
    basePath:'app/i18n',
    //default is false
    cache: true
});