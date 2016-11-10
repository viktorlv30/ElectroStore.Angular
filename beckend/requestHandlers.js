//var Exec = require("child_process").exec;
var querystring = require("querystring"),
    fs = require("fs");

function Start(response, postData) {
    console.log("Request handler 'start' was called.");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(body);
        response.end();
        
};

function Upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Yo've sent: " + querystring.parse(postData).text);
    response.end();
}

function Show(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile("d:\Photos\Rolls-Royce-Wraith-2013-1366x768-051.jpg", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(file, "binary");
            response.end();
        }

    });
}

exports.start = Start;
exports.upload = Upload;
exports.show = Show;