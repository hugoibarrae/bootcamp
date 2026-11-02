window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  // 1. Obtener el reproductor de Storyline y las variables
var player = GetPlayer();

var WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwGh7A1Gq9KtmF9F02PmzMnsS1ovHJM_DwKzeqxLGd4Qf0lVwTffAt_KZ4st7DiP6wn/exec";

// 2. Construir el objeto con los datos
var storylineData = {
    "date": new Date().toJSON().slice(0,10), // Guarda la fecha actual (AAAA-MM-DD)
    "name": player.GetVar("name"),
    "email": player.GetVar("email"),
    "Matricula": player.GetVar("Matricula")
};

// 3. Enviar los datos a Google Sheets usando Fetch API (Nativo de JS, sin jQuery)
fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors", // Evita problemas de CORS comunes con Google Apps Script
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(storylineData)
})
.then(function() {
    console.log("Datos enviados con éxito a Google Sheets.");
})
.catch(function(error) {
    console.error("Error al enviar los datos:", error);
});
}

window.Script2 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwGh7A1Gq9KtmF9F02PmzMnsS1ovHJM_DwKzeqxLGd4Qf0lVwTffAt_KZ4st7DiP6wn/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hour" : new Date().toJSON().slice(11,19),
 "Matricula" : player.GetVar("matriculaText"),
 "Nivel" : player.GetVar("NivelEstudios"),
  "Escuela" : player.GetVar("Institucion"),
   "Calificacion" : player.GetVar("calificacion"),
   
   "Bloque" : "modulo3"
}
}

window.Script3 = function()
{
  fetch(WEB_APP_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(storyline)
})
.then(function(response) {
    return response.text();
})
.then(function(data) {
    console.log("Respuesta:", data);
})
.catch(function(error) {
    console.error("Error:", error);
});
}

window.Script4 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script5 = function()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxUCsS3RsVX91NhiTaOA48FEVj0Etji0fjeV9x6I41jqT3boZPzYaPr4WJJ2YfRON1g_w/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "name" : player.GetVar("name"),
 "email" : player.GetVar("email"),
 "message" : player.GetVar("message")
}
}

window.Script6 = function()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

};
