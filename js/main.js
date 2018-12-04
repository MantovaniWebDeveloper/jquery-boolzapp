//genero l'evento per attivare il tasto enter da tastiera
var inputElemento = $('#rispInput');
var template = $('.wrapMessInviato');
var messInviato = $('.messaggioInviato');
template.hide();



inputElemento.keypress(function(e) {
    if(e.which == 13) {
      //Recuperare ora per il messaggio inviato
      var data = new Date();
      var ora = data.getHours();
      var minuti = data.getMinutes();
      console.log(ora + " : " + minuti);
      //variabilizzo il timeStamp
      var timeStamp = ora + ":" + minuti;
      console.log(timeStamp);
      //nascono i div che saranno clonati
      template.show();
      messInviato.hide();
      //  alert('sono vivo');
      //recupero il valore da input box scrivi messaggio
      var messagioRecuperato = inputElemento.val();
      console.log(messagioRecuperato);
      //recupero il nodo per il messaggio inviato
      // e lo clono
     var messIniviatoClone = template.clone();
     messIniviatoClone.children('.messaggioInviato').show().children('.testo').show().text(messagioRecuperato);
     messIniviatoClone.children('.messaggioInviato').show().children('.timeStamp').show().html(timeStamp);
     //lo stampo nella zona chat

      $('#zonaChat').append(messIniviatoClone);

    }
});
