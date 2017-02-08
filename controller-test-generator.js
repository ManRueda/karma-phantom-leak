const count = Number(process.argv[2])
const cleanObjects = !!process.argv[3]
function getCode(number) {
  return `
  describe('${number}Controller', function () {
    var $scope
    beforeEach(inject(function () {
      $scope = $rootScope.$new();
    }))
    it('${number}Controller', function () {
      var controller = $controller('${number}Controller', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    })
  ` + (cleanObjects ? `
    afterEach(function () {
      $scope = null
    })
    ` : '') + `
  })
  `
}

let code = `
describe('Controllers', function () {
  beforeEach(module('app'))
  var $controller, $rootScope;
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_
    $rootScope = _$rootScope_
  }))
  `
for (var i = 0; i < count; i++) {
  code = code + getCode(i)
}

if (cleanObjects) {
  code = code + `
    afterEach(function () {
      $controller = null
      $rootScope = null
    })
  `
}
code = code + `
})
`

process.stdout.write(code)
