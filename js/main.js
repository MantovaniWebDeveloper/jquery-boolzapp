//genero l'evento per attivare il tasto enter da tastiera
var inputElemento = $('#rispInput');
var template = $('.wrapMessInviato');
var messInviato = $('.messaggioInviato');
inputElemento.keypress(function(e) {
    if(e.which == 13) {
      //  alert('sono vivo');
      //recupero il valore da input box scrivi messaggio
      var messagioRecuperato = inputElemento.val();
      console.log(messagioRecuperato);
      //recupero il nodo per il messaggio inviato
      // e lo clono
     var messIniviatoClone = template.clone();

     messIniviatoClone.children('.messaggioInviato').text(messagioRecuperato);

      $('#zonaChat').append(messIniviatoClone);
    }
});
