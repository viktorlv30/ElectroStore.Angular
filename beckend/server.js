var Formidable = require("formidable");
var Http = require("http");
var Url = require("url");
var sys = require("util");

function Start(route, handle){
	function onRequest(request, response) {

        var postData = "";
        var pathname = Url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");

        request.setEncoding("utf8");

	    request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
	    });

	    request.addListener("end", function() {
	        route(handle, pathname, response, postData);
	    });
    };

	//Http.createServer(onRequest).listen(8888);

    Http.createServer(function (req, res) {
        if (req.url == "/upload" && req.method.toLowerCase() == "post") {
            //parse a file upload
            var form = new Formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                res.writeHead(200, { "content-type": "text/plain" });
                res.write("received upload: \n\n");
                res.end(sys.inspect({ fields: fields, files: files }));
            });
            return;
        };

        //show file upload form
        res.writeHead(200, { "content-type": "text/html" });
        res.end(
            '<form action="/upload" enctype="multipart/form-data" ' +
            'method="post">' +
            '<input type="text" name="title"><br>' +
            '<input type="file" name="upload" multiple="multiple"><br>' +
            '<input type="submit" value="Upload">' +
            '</form>'
        );
    }).listen(8888);

	console.log("Server has started");
}



exports.start = Start;