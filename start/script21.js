//Módulo embutido events - É o módulo utilizado para criar, disparar e ouvir o seu próprio evento 

//Objeto EventEmitter - Todas as propriedades e métodos de eventos são uma instância do EventEmitter. *Para acessar todas essas propriedades e métodos é preciso criar um objeto de EventEmitter.

//event handlers = manipuladores de evento

var events = require ('events');
var eventEmiter = new events.EventEmitter();

var hbEventoManipulado = function() {
    console.log('Só sei que nada sei.');
}
//manipulando evento

eventEmiter.on ('mensagem', hbEventoManipulado);
//associando a função manipulada ao evento criado

eventEmiter.emit ('mensagem');
//disparando evento