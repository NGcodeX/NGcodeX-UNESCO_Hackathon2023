/* Contributor code: @Codeur ZEBS, none,       
 * Repos NGcodeX script IA integration
 * script
 * @server      pla****r
 * @univ 	    ICT, saint jean
 * @copyright       Copyright (c) 2023 UNESCO
 * @license         
 * @github          https://github.com/NGcodeX
 * @version         1.0.1 ICT-U, Saint Jean
 * Help us to keep this project
 *club      NGcodeX
 */
var lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage; //recuperation de la langue du navigateur
if (lang.indexOf('-') !== -1)
    lang = lang.split('-')[0];
if (lang.indexOf('_') !== -1)
    lang = lang.split('_')[0];
console.log(lang);
var say = 'Hello N G codex'; //initialisation par defaut
var voice = 'UK English Female';
switch (lang) { //pour chaque cas de langue; pour notre cas on a choisi fr et en// mais par defaut c est en
    case 'en':
        say = "Hello and welcome to the N G CODEX Hackathon 2023 club organized by unesco. I introduce myself N G I A; I am an artificial intelligence, developer by a team of students from I C T and Saint Jean universities. This project will allow visually impaired personnel in Cameroon to follow an exemplary education. For more information, join the team or contact the number 6 92 0 7 70 0 5. I repeat 6 92 07 70 05";
        voice = "UK English Female";
        break;
    case 'fr':
        say = "Bonjour et bienvenue au club N G CODEX Hackathon 2023 organisé par l'unesco. Je me présente N G I A; Je suis une intelligence artificielle, développer par une équipe d'étudiants des universités I C T universities et Saint Jean. Ce projet permettra au personnel déficient visuel du Cameroun de suivre une éducation exemplaire. Pour plus d'information, rejoindre la team ou contacter le numero 6 92 07 70 05. je recommence. le 6 92 07 70 05.";
        voice = "French Female";
        break;
    default:
        say = "Hello N G codex";
        voice = "UK English Female";
        break;
}
setTimeout(responsiveVoice.speak(say, voice),15000);

/* Contributor : @Codeur ZEBS, none,       
 * Repos NGcodeX script IA integration
 * script
 * @server      pla****r
 * @univ 	    ICT, saint jean
 * @copyright       Copyright (c) 2023 UNESCO
 * @license         
 * @github     
 * @version         1.0.1 ICT-U, Saint Jean
 * Help us to keep this project
 *club      NGcodeX
 */
