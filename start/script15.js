//RENOMEANDO ARQUIVOS

var fs = require ('fs');

fs.rename('arquivoNovo.txt', 'arquivoNovissimo.txt',
function(err) {
    if (err)
        throw err;
}

);

console.log('Arquivo Renomeado com sucesso!');
