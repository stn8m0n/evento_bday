AOS.init();

const dataDoEvento = new Date("Jun 02, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime(); //pra saber que tempo(hora é agora).

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //calculo pra saber o intervalos entre a data do evendo e o evento.

    const diaEmMs = 1000 * 60 * 60 * 24; //variável relação a conta transformando dias em ms
    const horaEmMs = 1000 * 60 * 60; //variável relação a conta transformando horas em ms
    const minutoEmMs = 1000 * 60; //variável relação a conta transformando min em ms

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); //calculo de dias até o evento.
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); //calculo de horas até o evento.
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs); //calculo de min até o evento.
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000); //calculo de segundos até o evento.

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`; /*pegar a variável no
    html enviadar o dados e a formatação que será apresentado.*/

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);