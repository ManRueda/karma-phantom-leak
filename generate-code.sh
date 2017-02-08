iter=500
node service-generator.js $iter $1 > src/set-two.js
node service-test-generator.js $iter $1 > specs/set-two.js
node controller-generator.js $iter $1 > src/set-three.js
node controller-test-generator.js $iter $1 > specs/set-three.js
