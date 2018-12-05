//genero l'evento per attivare il tasto enter da tastiera
var inputElemento = $('#rispInput');
var templateInviato = $('.template .rigaMessaggioInviato ');
var cercaContattoInput = $('#cercaContatto');
var contattoBox = $('.chatBox .textChatBoxUser h2');

$(document).ready(function() {
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
        //  alert('sono vivo');
        //recupero il valore da input box scrivi messaggio
        var messagioRecuperato = inputElemento.val();
        console.log(messagioRecuperato);
        //recupero il nodo per il messaggio inviato
        // e lo clono
       var messIniviatoClone = templateInviato.clone();
       //stampo il valore recuperato nel figlio p e timeStamp
       messIniviatoClone.children('.messaggioInviato').show().children('.testo').show().text(messagioRecuperato);
       messIniviatoClone.children('.messaggioInviato').show().children('.timeStamp').show().text(timeStamp);

       //lo stampo nella zona chat
        $('#zonaChat').append(messIniviatoClone);
        //resetto l'input
        $(this).val('');
        //setto la risposta del destinatario
        //con la function timeout
        setTimeout(function () {
          //recupero il template
          var templateRicevuto = $('.template .rigaMessaggioRicevuto ');
          //lo clono
          var messRicevutoClone = templateRicevuto.clone();
          console.log(templateRicevuto);
          console.log(messRicevutoClone);
          //passo ai figli i valori
          messRicevutoClone.children('.messaggioRicevuto').show().children('.testo').show().text("ok");
          messRicevutoClone.children('.messaggioRicevuto').show().children('.timeStamp').show().text(timeStamp);
          //lo stampo in html
          $('#zonaChat').append(messRicevutoClone);
        }, 1000);
      }
  });

  //sezione gestione ricerca contatto
  cercaContattoInput.keypress(function(e) {
      //decodifico il codice della tastiera
      var carattereCercato = String.fromCharCode(e.keyCode);
      console.log(carattereCercato);
      //CICLO SUI NOMI
      var i = 0;
      var charTrovati = [];
      contattoBox.each(function(){
        console.log("giro: " + i);
        var nomeContatto = $(this).text();
        console.log(nomeContatto);
          if(nomeContatto.indexOf(carattereCercato) != -1) {
            console.log("trovato: " + carattereCercato );
          }
          else {
            $(this).hide();
          }
          /*if (nomeContatto[i].includes(carattereCercato)) {
            console.log("trovato");
          }
          else {
            console.log("non trovato");
          }*/


         //console.log(charTrovati);

        //CONFRONTO IL CARATTERE

        i++;
      });
      console.log("NUOVA RICERCA!!")


  });
});
