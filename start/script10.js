var fs = require ('fs');

fs.writeFile('arquivo2.txt', 'Desenvolvimento de aplicações distribuídas e móveis.',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo gravado com sucesso!')