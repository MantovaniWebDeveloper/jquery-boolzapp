//genero l'evento per attivare il tasto enter da tastiera
var inputElemento = $('#rispInput');
inputElemento.keypress(function(e) {
    if(e.which == 13) {
      //  alert('sono vivo');
      //recupero il valore da input box scrivi messaggio
      var messagioRecuperato = inputElemento.val();
      console.log(messagioRecuperato);
      //recupero il nodo per il messaggio inviato
      // e lo clono
      var messIniviatoClone = $('.wrapMessInviato .messaggioInviato').clone();
      
      console.log(messIniviatoClone);
      //gli allego il messaggio recuperato dal utento
      messIniviatoClone.text(messagioRecuperato);
      console.log(messIniviatoClone)

      $('#zonaChat').append(messIniviatoClone);
    }
});
