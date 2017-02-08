# Karma Phantom Leak Lab

Small lab about memory leak in jasmin tests with karma and PhantomJS

## Code Generations

This example has some scripts to generate code and their tests.

There is one `XXX-generator` and a `XXX-test-generator`. The first one creates code and the second one will create the tests that will run over that code.

Those scripts has two parameters, the first one will be the amount of repeated code that will create.
The second one is a flag to inject code to null variables and trigger memory release.

There is one bash script `generate-code.sh` that will run all script and creates all the code.


## Running the test

This projects has only one npm script, `test` that will run the tests.
