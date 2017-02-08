const count = Number(process.argv[2])
const cleanObjects = !!process.argv[3]

function getCode(number) {
  return `
  describe('Service${number}', function onDescribe() {
    var service
    beforeEach(inject(function onInject(_Service${number}_, _$window_) {
      service = new _Service${number}_()
    }))
    it('Service${number}', function onIt() {
      expect(service.getWindow()).toBe($window)
    })
    ` + (cleanObjects ? `
      afterEach(function onAfterEach() {
        service = null
      })
      ` : '') + `
    })
    `
}

let code = `
describe('Services', function onDescribe() {
  beforeEach(module('app'))
  var $window
  beforeEach(inject(function onInject(_$window_) {
    $window = _$window_
  }))
  `
for (var i = 0; i < count; i++) {
  code = code + getCode(i)
}

if (cleanObjects) {
  code = code + `
  afterEach(function onAfterEach() {
    $window = null
  })
  `
}
code = code + `
})
`

process.stdout.write(code)
