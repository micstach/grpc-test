var PROTO_PATH = __dirname + '/HelloWorld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

function test() {
    var client = new hello_proto.Greeter('127.0.0.1:50051', grpc.credentials.createInsecure());

    client.sayHello({name: "Michal"}, function(err, response) {
        if (err) {
          console.log(err);
        }

        if (response) {
          console.log('Greeting:', response.message);
        }
    });

    client.add({a: 1, b: 2}, function(err, response) {
      if (err) {
        console.log(err);
      }

      if (response) {
        console.log('Add Value', response.value);
      }
  });
}

test();