$(document).ready(function () {

  $('#enviar').click(function () {
    var mar = document.getElementById("marca").value;
    var mod = document.getElementById("modelo").value;
    var pla = document.getElementById("placas").value;
    var ann = document.getElementById("ann").value;
    
    //alert("Marca"+mar+mod+pla+ann);
   $('#datos').html("sus datos introducidos son los siguientes \n"
   + mar + "marca \n"
   + mod + "modelo \n"
   + pla + "placas \n"
   + ann + "año \n")   
  });
    
 });