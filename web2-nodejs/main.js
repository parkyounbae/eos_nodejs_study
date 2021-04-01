var http = require('http');
var fs = require('fs');
var url = require('url');
//위의 것들은 모듈을 불러오는 것 ... url이라는 모듈은 url이라는 변수를 통해 할것이다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(queryData.id);

});
app.listen(3000);
