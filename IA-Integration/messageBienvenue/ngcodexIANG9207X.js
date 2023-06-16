/* Contributor : @Codeur ZEBS, none,       
 * Repos NGcodeX script IA integration
 * script
 * @server      pla****r
 * @univ 	    ICT, saint jean
 * @copyright       Copyright (c) 2023 UNESCO
 * @license         
 * @github          https://github.com/NGUENAZEBS
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
        say = "Hello N G codex";
        voice = "UK English Female";
        break;
    case 'fr':
        say = "Bonjour N G codex";
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
 * @github          https://github.com/NGUENAZEBS
 * @version         1.0.1 ICT-U, Saint Jean
 * Help us to keep this project
 *club      NGcodeX
 */
