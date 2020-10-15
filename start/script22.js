//Upload De Arquivos
var http = require ('http');
var formidable = require ('formidable');

http.createServer(
    function(req,res) {
        if (req.url == '/script22') {
            res.end();
        }
       
        else {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

    res.write('<h1>Upload De Arquivos</h1>');
    res.write('<form action = "script22" method = "post" enctype = "multipart/form-data">');
    res.write('<fieldset>');
    res.write('<legend>Envio de arquivos</legend>')
    res.write('<p><input type = "file" name = "arquivo"></p>')
    res.write('<p><input type="submit" value="Enviar"></p>');
    res.write('</fieldset>');
    res.write('</form>');

    res.end();
    }
}
).listen(8080);

console.log('Servuidor iniciado na porta 8080. Pressione Crtl + C para encerrar.')