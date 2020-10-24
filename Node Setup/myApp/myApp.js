var app = angular.module("myApp" , ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
  .when("/demofile1", {
    templateUrl : "demofile1.html",
    controller : "myCtrl1"
  })
  .when("/demofile2", {
    templateUrl : "demofile2.html",
    controller : "myCtrl2"
  })
  .when("/green", {
    templateUrl : "green.htm"
  })
  .when("/blue", {
    templateUrl : "blue.htm"
  });
});
