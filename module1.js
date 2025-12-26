var app = angular.module('myAppWithRoute', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .when('/user', {
      templateUrl: 'templates/user-form.html',
      controller: 'UserController'
    })
    .otherwise({ redirectTo: '/home' });
});

app.controller('HomeController', function ($scope) {
  $scope.msg = "Home view loaded successfully";
});

app.controller('UserController', function ($scope) {
  $scope.name = '';
});
