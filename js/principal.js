/*
* Principal JS
*/
localStorage.clickcount = 0;
var partidas;
$('#config').hide();
$('#ci').hide();
$('#ct').hide();
$('#cm').hide();
$('#fondo1').hide();
$('#fondo2').hide();
$('#fondo3').hide();
$('#fondo4').hide();
$('#fondo5').hide();
$('#chispa1').hide();
$('#chispa2').hide();

$('#boo1').hide();
$('#boo2').hide();
$('#shyguy1').hide();
$('#shyguy2').hide();

function inicio(){
  setTimeout(function(){
  	//mus=document.getElementById("cancHome");
    //mus.play();

    $('#cuadro').hide();

    $(document).ready(function(){

      $("#cuadro").slideDown(1000);

      $("#boton").on("click", function(){

        $("#cuadro").slideUp(1000);
        $("#config").slideDown(1000);
	        $("#boton2").on("click", function(){

	        $("#config").slideUp(1000);
	        
      });
      });

    });

  });
}



var bandera1=3;
function config1(){
	setTimeout(function(){
		
		$(document).ready(function(){
			 
			if(bandera1%2==0){
				$("#ci").slideDown(1000);
				$("#marioG").hide(1000);
			}else if(bandera1%2!=0){
				$("#ci").slideUp(1000);
				$("#marioG").show(1000);
			}
		});
	});
	bandera1++;
}

var bandera2=3;
function config2(){
	setTimeout(function(){
		
		$(document).ready(function(){
			 
			if(bandera2%2==0){
				$("#ct").slideDown(1000);
				$("#peachG").hide(1000);
			}else if(bandera2%2!=0){
				$("#ct").slideUp(1000);
				$("#peachG").show(1000);
				
			}
		});
	});
	bandera2++;
}

var bandera3=3;
function config3(){
	setTimeout(function(){
		
		$(document).ready(function(){
			 
			if(bandera3%2==0){
				$("#cm").slideDown(1000);
				$("#yoshiG").hide(1000);
			}else if(bandera3%2!=0){
				$("#cm").slideUp(1000);
				$("#yoshiG").show(1000);
			}
		});
	});
	bandera3++;
}

function configuracion(){
	setTimeout(function(){

    $(document).ready(function(){

      $("#config").slideDown(1000);
      

      $("#boton2").on("click", function(){

        $("#config").slideUp(1000);
      });
    });
  });
}

function py(){
	sound2=document.getElementById("ppy");
  	sound2.src="resources/bep.wav";
	sound2.play();
}
function ayuda(){
	helpi=document.getElementById("nubex");
  	helpi.src="resources/ayudax.wav";
	helpi.play();
}

var burbujaX;

function burbuja(){
	burbujaX=document.getElementById("jugador");
  burbujaX.src="resources/burbuja2.wav";
	burbujaX.play();
}

var hit1;
var hit2;
var hit3;
var hit4;
var nombre1;
var nombre2;
var mus;

//Cambiar música 1-5
function cambiarMusica1(){
	var music = document.getElementById("music1");
	var music2 = document.getElementById("cancHome");
	music2.src=music.src;
  music2.play();
}
function cambiarMusica2(){
	var music = document.getElementById("music2");
	var music2 = document.getElementById("cancHome");
	music2.src=music.src;
    music2.play();
}
function cambiarMusica3(){
	var music = document.getElementById("music3");
	var music2 = document.getElementById("cancHome");
	music2.src=music.src;
    music2.play();
}
function cambiarMusica4(){
	var music = document.getElementById("music4");
	var music2 = document.getElementById("cancHome");
	music2.src=music.src;
    music2.play();
}
function cambiarMusica5(){
	var music = document.getElementById("music5");
	var music2 = document.getElementById("cancHome");
	music2.src=music.src;
    music2.play();
}

//Cambiar imagen 1-5
function cambiarImagen1(){
	var image = document.getElementById("fondo1");
	var image2 = document.getElementById("fondo");
	image2.src=image.src;
}
function cambiarImagen2(){
	var image = document.getElementById("fondo2");
	var image2 = document.getElementById("fondo");
	image2.src=image.src;
}
function cambiarImagen3(){
	var image = document.getElementById("fondo3");
	var image2 = document.getElementById("fondo");
	image2.src=image.src;
}
function cambiarImagen4(){
	var image = document.getElementById("fondo4");
	var image2 = document.getElementById("fondo");
	image2.src=image.src;
}
function cambiarImagen5(){
	var image = document.getElementById("fondo5");
	var image2 = document.getElementById("fondo");
	image2.src=image.src;
}

//cambiar imágenes con la predeterminada, junto con otras funciones
function cambia1() {
  var imagen = document.getElementById("bowser1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/bowserjr/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/bowserjr/win.wav";
  hit3.play();
  nombre1="☆ Bowser Jr ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#bowser2").hide("slow");

  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#luigi2").show("slow");
  $("#mario2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia2() {
  var imagen = document.getElementById("daisy1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/daisy/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/daisy/win.wav";
  hit3.play();
  nombre1="☆ Daisy ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#daisy2").hide("slow");

  $("#bowser2").show("slow");
  $("#dk2").show("slow");
  $("#luigi2").show("slow");
  $("#mario2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia3() {
  var imagen = document.getElementById("dk1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/dk/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/dk/win.wav";
  hit3.play();
  nombre1="☆ Donkey Kong ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#dk2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#luigi2").show("slow");
  $("#mario2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia4() {
  var imagen = document.getElementById("luigi1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/luigi/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/luigi/win.wav";
  hit3.play();
  nombre1="☆ Luigi ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#luigi2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia5() {
  var imagen = document.getElementById("mario1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/mario/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/mario/win.wav";
  hit3.play();
  nombre1="☆ Mario ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#mario2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#luigi2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia6() {
  var imagen = document.getElementById("peach1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/peach/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/peach/win.wav";
  hit3.play();
  nombre1="☆ Peach ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#peach2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#luigi2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia7() {
  var imagen = document.getElementById("rosalina1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/rosalina/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/rosalina/win.wav";
  hit3.play();
  nombre1="☆ Rosalina ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#rosalina2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#luigi2").show("slow");
  $("#peach2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia8() {
  var imagen = document.getElementById("toadette1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/toadette/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/toadette/win.wav";
  hit3.play();
  nombre1="☆ Toadette ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#toadette2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#luigi2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia9() {
  var imagen = document.getElementById("wario1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/wario/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/wario/win.wav";
  hit3.play();
  nombre1="☆ Wario ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#wario2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#luigi2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#yoshi2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambia10() {
  var imagen = document.getElementById("yoshi1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/yoshi/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/yoshi/win.wav";
  hit3.play();
  nombre1="☆ Yoshi ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#yoshi2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#luigi2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");

  if(partidas>=5){
  	$("#boo2").show("slow");
  	$("#shyguy2").show("slow");
  }
}
function cambiaExtra1() {
  var imagen = document.getElementById("boo1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/boo/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/boo/win.wav";
  hit3.play();
  nombre1="☆ Boo ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#boo2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#luigi2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");
  $("#shyguy2").show("slow");
}
function cambiaExtra2() {
  var imagen = document.getElementById("shyguy1");
  var imagen2 = document.getElementById("predeterminada1");
  imagen2.src = imagen.src;
  hit1=document.getElementById("player1");
  hit1.src="resources/shyguy/hit.wav";
  hit3=document.getElementById("player3");
  hit3.src="resources/shyguy/win.wav";
  hit3.play();
  nombre1="☆ Shy Guy ☆";
  document.getElementById("see1").innerHTML = nombre1;
  $("#shyguy2").hide("slow");

  $("#bowser2").show("slow");
  $("#daisy2").show("slow");
  $("#dk2").show("slow");
  $("#mario2").show("slow");
  $("#luigi2").show("slow");
  $("#peach2").show("slow");
  $("#rosalina2").show("slow");
  $("#toadette2").show("slow");
  $("#wario2").show("slow");
  $("#yoshi2").show("slow");
  $("#boo2").show("slow");
}



function cambia11() {
  var imagen = document.getElementById("bowser2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/bowserjr/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/bowserjr/win.wav";
  hit4.play();
  nombre2="☆ Bowser Jr ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#bowser1").hide("slow");

  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
  
}
function cambia12() {
  var imagen = document.getElementById("daisy2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/daisy/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/daisy/win.wav";
  hit4.play();
  nombre2="☆ Daisy ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#daisy1").hide("slow");

  $("#bowser1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia13() {
  var imagen = document.getElementById("dk2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/dk/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/dk/win.wav";
  hit4.play();
  nombre2="☆ Donkey Kong ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#dk1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia14() {
  var imagen = document.getElementById("luigi2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/luigi/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/luigi/win.wav";
  hit4.play();
  nombre2="☆ Luigi ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#luigi1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia15() {
  var imagen = document.getElementById("mario2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/mario/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/mario/win.wav";
  hit4.play();
  nombre2="☆ Mario ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#mario1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia16() {
  var imagen = document.getElementById("peach2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/peach/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/peach/win.wav";
  hit4.play();
  nombre2="☆ Peach ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#peach1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia17() {
  var imagen = document.getElementById("rosalina2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/rosalina/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/rosalina/win.wav";
  hit4.play();
  nombre2="☆ Rosalina ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#rosalina1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia18() {
  var imagen = document.getElementById("toadette2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/toadette/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/toadette/win.wav";
  hit4.play();
  nombre2="☆ Toadette ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#toadette1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia19() {
  var imagen = document.getElementById("wario2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/wario/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/wario/win.wav";
  hit4.play();
  nombre2="☆ Wario ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#wario1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#yoshi1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambia20() {
  var imagen = document.getElementById("yoshi2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/yoshi/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/yoshi/win.wav";
  hit4.play();
  nombre2="☆ Yoshi ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#yoshi1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");

  if(partidas>=5){
  	$("#boo1").show("slow");
  	$("#shyguy1").show("slow");
  }
}
function cambiaExtra3() {
  var imagen = document.getElementById("boo2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/boo/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/boo/win.wav";
  hit4.play();
  nombre2="☆ Boo ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#boo1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");
  $("#shyguy1").show("slow");
}
function cambiaExtra4() {
  var imagen = document.getElementById("shyguy2");
  var imagen2 = document.getElementById("predeterminada2");
  imagen2.src = imagen.src;
  hit2=document.getElementById("player2");
  hit2.src="resources/shyguy/hit.wav";
  hit4=document.getElementById("player4");
  hit4.src="resources/shyguy/win.wav";
  hit4.play();
  nombre2="☆ Shy Guy ☆";
  document.getElementById("see2").innerHTML = nombre2;
  $("#shyguy1").hide("slow");

  $("#bowser1").show("slow");
  $("#daisy1").show("slow");
  $("#dk1").show("slow");
  $("#luigi1").show("slow");
  $("#mario1").show("slow");
  $("#peach1").show("slow");
  $("#rosalina1").show("slow");
  $("#toadette1").show("slow");
  $("#wario1").show("slow");
  $("#yoshi1").show("slow");
  $("#boo1").show("slow");
}

var inter;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var sound;
var sound2;
var helpi;
var segundos=0;


var arregloLetras=["a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var arregloNumeros=[65,66,67,68,69,70,71,72,73,74,
75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];

var teclaJug1;
var teclaJug2;

function configTecla1(){
	var teclaJugador1 = prompt("Inserte la tecla del Jugador 1 (A-Z, sin la Ñ)");
	teclaJugador1= teclaJugador1.toLowerCase();

	for(i=0; i<arregloLetras.length; i++){
		if(teclaJugador1==arregloLetras[i]){
			teclaJug1=arregloNumeros[i];
		}
	}
}
function configTecla2(){
	var teclaJugador2 = prompt("Inserte la tecla del Jugador 2 (A-Z, sin la Ñ)");
	teclaJugador2= teclaJugador2.toLowerCase();

	for(i=0; i<arregloLetras.length; i++){
		if(teclaJugador2==arregloLetras[i]){
			teclaJug2=arregloNumeros[i];
		}
	}
}
function clickCounter() {
  if (segundos > 0) {
    
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
         console.log("Has jugado " + localStorage.clickcount + " veces.");
    } else {
        console.log("El navegador no soporta almacenamiento web...");
    }
  }
  partidas = localStorage.clickcount;
}

function Tiempo(){
	if(teclaJug1==null || teclaJug2==null){
    	alert("No han elegido las teclas para jugar...");
    }else if(teclaJug1==teclaJug2){
    	alert("Seleccione teclas diferentes para ambos jugadores.");
    }else{
	    segundos=prompt("¿Cuántos segundos desea jugar?");
	    document.getElementById("a").innerHTML = 0;
	    document.getElementById("b").innerHTML = 0;
	    cont1=0;
	    cont2=0;
	  
	  if(segundos>0){
	    sound=document.getElementById("sonidoPlay");
	    sound.play();
	    
	    inter=setInterval(tiempoDisminuye,1000);
	    document.body.onkeyup=function(e){
	//
		var teclaA =(document.all) ? e.keyCode : e.which;
	    var teclaB =(document.all) ? e.keyCode : e.which;

	    if (teclaJug2==teclaB) {
	      document.getElementById("b").innerHTML = cont1+1;
	      cont1++;
	      hit2.play();
	      $('#chispa2').show();
	      $('#chispa2').hide("fast",function(){
	      	//$("#chispa2").delay(1000);
	      });

	    }else if (teclaJug1==teclaA) {
	      document.getElementById("a").innerHTML = cont2+1;
	      cont2++;
	      hit1.play();
	      $('#chispa1').show();
	      $('#chispa1').hide("fast",function(){
	      	//$("#chispa1").delay(1000);
	      });
	      

	    }
	    }//
	  }
}
}

function tiempoDisminuye(){
  if (segundos==0) {
  	if(partidas==5){
		alert("---------- ¡Has desbloqueado nuevos personajes! ----------");
	  	$("#boo1").show("slow");
	  	$("#shyguy1").show("slow");
	  	$("#boo2").show("slow");
	  	$("#shyguy2").show("slow");
	}
    sound.pause();
    sound=document.getElementById("sonidoPlay");
    alert("¡Se ha agotado el tiempo!");
    if (cont1<cont2) {
    	
      hit3.play();
      document.getElementById("score1").innerHTML = cont4+1;
      cont4++;
      alert(nombre1+" \nha ganado.");//Jugador 1
      

    }else if (cont1>cont2) {
    	
      hit4.play();
      document.getElementById("score2").innerHTML = cont3+1;
      cont3++;
      alert(nombre2+" \nha ganado.");//Jugador 2

    }else if(cont1==0 && cont2==0){
    	
      alert("No ganó nadie");

    }else if (cont1==cont2) {
    	
      alert("Hubo un empate.");
    }
    document.getElementById("a").innerHTML = 0;
    document.getElementById("b").innerHTML = 0;
    cont1=0;
    cont2=0;
    clearInterval(inter);

  }else if(segundos>0){
    segundos--;

  }else{
    segundos=0;
  }

  document.getElementById("segundos").value = segundos >= 10 ? segundos : "0" + segundos;

}
