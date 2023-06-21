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
<script>// Ici je Vérifie si l'API Web Speech est prise en charge par le navigateur
if ('speechSynthesis' in window) {
  // Fonction pour lire le texte sélectionné
  function lireTexteSelectionne() {
    var texteSelectionne = window.getSelection().toString();
    if (texteSelectionne !== '') {
      var speech = new SpeechSynthesisUtterance();
      speech.lang = 'fr-FR'; // Langue (français)
      speech.text = texteSelectionne;
      speechSynthesis.speak(speech);
    }
  }

  // Écoute l'événement de sélection de texte
  document.addEventListener('mouseup', lireTexteSelectionne);
  document.addEventListener('touchend', lireTexteSelectionne);
} else {
  alert('L\'API Web Speech n\'est pas prise en charge par votre navigateur.');
}
</script>
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
