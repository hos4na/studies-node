var fs = require ('fs');
var rs = fs.createReadStream ('./arquivo1.txt');
//Objeto readStream - Dispara eventos em Node.js quando um arquivo é aberto


rs.on ('open',
    function() {
        console.log ('O arquivo foi aberto!')
    }
);
//Modo on do createReadStream - Associa o evento a um argumento (nome próprio)



