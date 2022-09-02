
const rwClient = require("./twitterClient.js");

const CronJob = require("cron").CronJob;
var iChing = require('i-ching');

const parabolaFlecha = 'Certa vez, um homem foi ferido por uma flecha envenenada. Mas ele antes de ser levado ao hospital ele começou a fazer perguntas do tipo: "quem me acertou?", "que tipo de veneno tem essa flecha?". Antes de fazer a terceira pergunta o homem morreu.';
const parabolaAmor = 'Quando você gosta de uma flor, você a arranca. Quando você ama uma flor, você a rega todos os dias.';
const padrao = 'Chamada a cobrar. Deixe seu nome e a cidade de onde está falando: ';

const tweetOraculo = async (oraculo) => {
    try {
        await rwClient.v1.tweet(
            oraculo.hexagram.character +
            oraculo.hexagram.names.join(', '))
    } catch (e) {
        console.error(e)
    }
}

const tweetTrigrama = async (i) => {

    if (i > 8)
        i = 1;

    try {
        await rwClient.v1.tweet(iChing.trigram(i).chineseName +' '+iChing.trigram(i).names.join(', '))
    } catch (e) {
        console.error(e)
    }

    i++;
}

const morning1 = new CronJob("0 7 * * *", () => {
    console.log('morning1 starting')
    
    var oraculo = iChing.ask('ser ou não ser?');
    tweetOraculo(oraculo)
    console.log('tweet feito!')
})

const morning2 = new CronJob("0 11 * * *", () => {
    console.log('morning2 starting')

    var oraculo = iChing.ask('ser ou não ser?');
    tweetOraculo(oraculo)
    console.log('tweet feito!')
})

const afternoon1 = new CronJob("30 15 * * *", () => {
    console.log('afternoon1 starting')
    
    var oraculo = iChing.ask('ser ou não ser?');
    tweetOraculo(oraculo)
    console.log('tweet feito!')
})

const afternoon2 = new CronJob("13 16 * * *", () => {
    console.log('afternoon2 starting')
    
    var oraculo = iChing.ask('ser ou não ser?');
    tweetOraculo(oraculo)
    console.log('tweet feito!')
})

const night1 = new CronJob("20 19 * * *", () => {
    console.log('night1 starting')
    
    var oraculo = iChing.ask('ser ou não ser?');
    tweetOraculo(oraculo)
    console.log('tweet feito!')
})

const night2 = new CronJob("45 23 * * *", () => {
    console.log('night2 starting')
    
    var oraculo = iChing.ask('ser ou não ser?');
    tweetOraculo(oraculo)
    console.log('tweet feito!')
})

var i = 1
const trigrama = new CronJob("* 12,17,21 * * *", (i) => { 
    console.log('Twitando trigrama')
    tweetTrigrama(i);
    console.log('Tweet feito!')
})

//console.log(iChing.trigram(1).names.join(', '))

// function oraculoBot() {
//     console.log('Oraculo prestando!')

//     trigrama.start()

//     morning1.start();
//     morning2.start();
//     afternoon1.start();
//     afternoon2.start();
//     night1.start();
//     night2.start();
// }

// module.exports = oraculoBot();

tweetTrigrama(i)