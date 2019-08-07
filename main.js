var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Hi';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    var template = `
    <!DOCTYPE html>
    <html lang="ko" dir="ltr">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="portfolio.css">
        <link href="https://fonts.googleapis.com/css?family=Blinker&display=swap" rel="stylesheet">
        <title>${title}</title>
      </head>
      <body>
        <nav>
          <div class="mainList">
            <ol>
              <li><button onclick = "">List</li>
              <li><button onclick = "">Preview</li>
              <li><button onclick = "">Contact</li>
            </ol>
          </div>
        </nav>
        <header>
          <h1><a href="/?id=Portfolio">Portfolio</a></h1>
        </header>

        <section>
          <div class="mainImg">
            <img src="https://wallpaperplay.com/walls/full/6/e/f/164611.jpg">
          </div>

          <div class="exp">
            <p>I make products look beautiful,</p>
            <p>Let me show you</p>
          </div>

          <div class="buttons">
            <button type="button" name="button" onclick="Profile.html">Profile</button><br>
            <button type="button" name="button" onclick="Career.html">Career</button><br>
            <button type="button" name="button" onclick="Project.html">Project</button><br>
            <button type="button" name="button" onclick="Blog.html">Blog</button>
          </div>

          <h2>Carees</h2>
          <div class="prjView">
            <img src="https://pbs.twimg.com/profile_images/1110319067280269312/iEqpsbUA_400x400.png">
            <img src="https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1U7A/image/7j0bAC6fKrBJCQ_pf1KL8LQEUP0.png">
          </div>
        </section>
      </body>
    </html>
`
    console.log(__dirname + _url);
    response.end(template);

});
app.listen(3000);
