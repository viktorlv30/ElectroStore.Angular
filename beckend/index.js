var Server = require("./server");
var Router = require("./router");
var RequestHandlers = require("./requestHandlers");

var Handle = {};
Handle["/"] = RequestHandlers.start;
Handle["/start"] = RequestHandlers.start;
Handle["/upload"] = RequestHandlers.upload;

Server.start(Router.route, Handle);