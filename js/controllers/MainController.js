var app =angular.module("myApp")

app.controller('IndexController',['$scope', function($scope){

  $scope.title = 'Whale Watch!';
  $scope.subtitle = 'A Simple application for managing all your Docker needs';

}]);

app.controller('ImageController',['$scope','$http', function($scope,$http){

    $http({
    method : "GET",
    url : "http://localhost:4243/images/json"
          }).then(function mySuccess(response) {
                $scope.id = response.data;
                console.log('check');
                console.log(response);
          }, function myError(response) {
      $scope.image = response.statusText;
                                        });           
}]);

app.controller('RunningController',['$scope','$http',function($scope,$http){

    $http({
    method : "GET",
    url : "http://localhost:4243/containers/json"
          }).then(function mySuccess(response) {
                $scope.id = response.data;
                console.log('check');
                console.log(response);
          }, function myError(response) {
      $scope.image = response.statusText;
                                        });
}]);