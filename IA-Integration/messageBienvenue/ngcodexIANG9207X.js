/* UNESCO ICTU Club
*Contributor code: @Codeur ZEBS, none,       
 * Repos NGcodeX script IA integration
 * script javascript
 * @server      pla****r
 * @univ 	    ICT U
 * @copyright       Copyright (c) 2023 UNESCO
 * @license         
 * @github          https://github.com/NGcodeX
 * @version         1.0.1 ICT-U
 * Help us to keep this project
 *club      NGcodeX
 */
<script>
var lang = window.navigator.languages ? window.navigator.languages[0] : null; //init a null langue du navigateur
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;// recuperation de la langue du navigateur
if (lang.indexOf('-') !== -1) // suppression des tir de 6
    lang = lang.split('-')[0];
if (lang.indexOf('_') !== -1)
    lang = lang.split('_')[0];
console.log(lang); 
var say = 'Hello';
var voice = 'UK English Female';
switch (lang) {
    case 'en':
        say = "Hi and welcome to the club N G CODEX Hackathon 2023 organized by unesco. I introduce myself N G I A; I am an artificial intelligence, developed by a team of students from I C T universities. This project will allow visually impaired people in Cameroon to follow an exemplary education. In this section, we have 4 modules under development. the first module is integration at school and university level. the second module is the integration of materials according to the class of visually impaired. the third module is a reading by selection module. and finally the last module is the reading of file uploader by a teacher. I will be the virtual assistant for the visually impaired. For more information, join the team or contact the number 6 92 07 70 05. I start again. on 6 92 07 70 05.";
        voice = "UK English Female";
        break;
    case 'fr':
        say = "Salut et bienvenue au club N G CODEX Hackathon 2023 organisé par l'unesco. Je me présente N G I A; Je suis une intelligence artificielle, développer par une équipe d'étudiants des universités I C T universities. Ce projet permettra aux personne mal voyants du Cameroun de suivre une éducation exemplaire. Dans cette section, on a 4 modules en cours de developpement. le premiere module est l'integration au niveau scolaire et universitaire. le deuxieme module est l'integration des matieres en fonction de la classe du mal voyant. le troisieme module est un module de lecture par selection. et enfin le dernier module est la lecture de fichier uploader par un professeur. je serai l assistant virtuel pour les personnes mal voyant. Pour plus d'information, rejoindre la team ou contacter le numero 6 92 07 70 05. je recommence. le 6 92 07 70 05.";
        voice = "French Female";
        break;
    default:
        say = "Hello";
        voice = "UK English Female";
        break;
}
setTimeout(responsiveVoice.speak(say, voice),15000);
</script>
setTimeout(responsiveVoice.speak(say, voice),15000);

/* Contributor : @Codeur ZEBS, none,       
 * Repos NGcodeX script IA integration
 * script
 * @server      pla****r
 * @univ 	    ICT
 * @copyright       Copyright (c) 2023 UNESCO
 * @license         
 * @github     
 * @version         1.0.1 ICT-U
 * Help us to keep this project
 *club      NGcodeX
 */
