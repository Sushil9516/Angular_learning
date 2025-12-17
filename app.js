// 1. Define the main AngularJS module.
// The empty array '[]' means this module has no external dependencies.
// This name ('myApp') MUST match the ng-app="myApp" attribute in index.html.
var app = angular.module("myApp", []);

// 2. Define a Controller for the module.
// This name ('MyController') MUST match the ng-controller="MyController" attribute in index.html.
app.controller("MyController", function ($scope) {
  // The $scope object is the bridge between the Controller and the View (HTML).
  // We initialize the variable used for the ng-model="userName" input field.

  $scope.userName = "Bro";
});
