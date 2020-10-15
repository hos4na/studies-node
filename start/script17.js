var http = require('http');
var url = require('url');

var end = 'localhost:8080/data.html?dia=17&mes=3&ano=2003';
var dados = url.parse(end, true);  //Método parse do Módulo URL  *Divide a URL em pedaços menores
var d = dados.query;

http.createServer(
    function(req, res) {
        res.write(200, {'Content-Type':'text/html; charset=UTF-8'});
        
        res.write('<h1>Dados do Endereço</h1>');
        res.write('Host: ' + dados.host + '<br>');
        res.write('Caminho: ' + dados.pathname + '<br>');
        res.write('Argumentos: ' + dados.search + '<br>');
        
        res.write('<h1>Dados dos Argumentos</h1>');
        res.write('Dia: ' + dados.host + '<br>');
        res.write('Mês: ' + dados.pathname + '<br>');
        res.write('Ano: ' + dados.search + '<br>');

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.'); 

/* Sintaxe
    url.parse(endereço, true)
    url.parse(endereço, true).query

//Com o query: o parse retorna a divisão do url em argumentos e seus valores. Só terá os seguintes argumentos:
dados.dia
dados.mes
dados.ano

//Sem o query: retorna a divisão do url nos elementos que formam o endereço. Só terá os seguintes argumentos:
dados.host       //retorna o domínio
dados.pathname   //retorna o caminho
dados.search     //retorna os argumentos*/
