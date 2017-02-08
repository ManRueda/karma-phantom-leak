const count = Number(process.argv[2])
function getCode(number) {
  return `
    module.controller('${number}Controller', function ($scope) {
      $scope.password = '';
      $scope.grade = function() {
        var size = $scope.password.length;
        if (size > 8) {
          $scope.strength = 'strong';
        } else if (size > 3) {
          $scope.strength = 'medium';
        } else {
          $scope.strength = 'weak';
        }
      };
    })
  `
}

let code = `
(function (angular) {
  var module = angular.module('app')
  `
for (var i = 0; i < count; i++) {
  code = code + getCode(i)
}

code = code + `
})(angular)
  `

process.stdout.write(code)
