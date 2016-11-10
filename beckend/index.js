var Server = require("./server");
var Router = require("./router");
var RequestHandlers = require("./requestHandlers");

var Handle = {};
Handle["/"] = RequestHandlers.Start;
Handle["/start"] = RequestHandlers.Start;
Handle["/upload"] = RequestHandlers.Upload;
Handle["/show"] = RequestHandlers.Show;

Server.start(Router.route, Handle);