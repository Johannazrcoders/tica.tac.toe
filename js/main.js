$(document).ready(function(){
	var cont = 0
	$(".box").click(function(){
		cont += 1
		if (cont % 2) {
			$(this).text("X")
			$(this).off("click")
				var result = validar("X");
				if(cont == 9){
					if (result = false) {
						alert("PERDIO:( ")
					};
				}
		}else{
			$(this).text("O")
			$(this).off("click")
			var result = validar("X");
			if(cont == 9){
				if (result = false) {
					alert("PERDIO:( ")
				};
			}
		};
	})
})
function validar(valor){
	var btn1 = $("#btn-1").text()
	var btn2 = $("#btn-2").text()
	var btn3 = $("#btn-3").text()
	var btn4 = $("#btn-4").text()
	var btn5 = $("#btn-5").text()
	var btn6 = $("#btn-6").text()
	var btn7 = $("#btn-7").text()
	var btn8 = $("#btn-8").text()
	var btn9 = $("#btn-9").text()
	var ganador = true;
	if (btn1 == btn2 && btn1 == btn3 && btn1 == valor){
		alert("GANO :) ")
	}else if (btn1 == btn4 && btn1 == btn7 && btn1 == valor){
		alert("GANO :) ")
	}else if (btn1 == btn5 && btn1 == btn9 && btn1 == valor){
		alert("GANO :) ")
	}else if (btn2 == btn5 && btn1 == btn8 && btn2 == valor){
		alert("GANO :) ")
	}else if (btn3 == btn6 && btn3 == btn9 && btn3 == valor){
		alert("GANO :) ")
	}else if (btn7 == btn8 && btn7 == btn9 && btn7 == valor){
		alert("GANO :) ")
	}else if (btn3 == btn5 && btn3 == btn7 && btn3 == valor){
		alert("GANO :) ")
	}else if (btn4 == btn5 && btn4 == btn6 && btn4 == valor){
		alert("GANO :) ")
	}else{
		ganador = false;
	}
	return ganador;	
}