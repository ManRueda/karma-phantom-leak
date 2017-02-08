node service-generator.js 1000 $1 > src/set-two.js
node service-test-generator.js 1000 $1 > specs/set-two.js
node controller-generator.js 1000 $1 > src/set-three.js
node controller-test-generator.js 1000 $1 > specs/set-three.js
