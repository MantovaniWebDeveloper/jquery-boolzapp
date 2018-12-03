//genero l'evento per attivare il tasto enter da tastiera
$(document).keypress(function(e) {
    if(e.which == 13) {
      //  alert('sono vivo');
      //recupero il valore da input box scrivi messaggio
      var input = $('#rispInput').val();
      console.log(input);
    }
});
