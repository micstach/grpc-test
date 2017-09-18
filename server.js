var PROTO_PATH = __dirname + '/HelloWorld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

function sayHello(call, callback) {
    callback(null, {message: 'Hello my friend: ' + call.request.name});
}

function add(call, callback) {
    callback(null, {value: call.request.a + call.request.b});
}

function main() {
    var server = new grpc.Server();
    server.addProtoService(hello_proto.Greeter.service, {
	sayHello: sayHello,
        add: add
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();