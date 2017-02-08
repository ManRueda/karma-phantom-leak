

const count = Number(process.argv[2])
function getCode(number) {
  return `
    module.service('Service${number}', function Service${number}Factory($window) {
      return function Service${number}() {
        this.getWindow = function getWindow() {
          return $window
        }
      }
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
