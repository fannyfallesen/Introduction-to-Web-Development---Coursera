function validatefirstnm(){
			var nomb = document.getElementById("firstnm").value;
			var condicion = /^[A-Za-z\ñ\Ñ\´\`\'\-\ ]{3,40}$/;

			if (condicion.test(nomb)){
				document.getElementById("firstnmPrompt").style.fontSize =  ".65em";
				document.getElementById("firstnmPrompt").innerHTML =  "Valid";
				return(true);
			}else{
				document.getElementById("firstnmPrompt").style.fontSize =  ".65em";
				document.getElementById("firstnmPrompt").innerHTML =  "You can only enter alphabetic characters..";
				return(false);
			}
		}

		function validatesurname(){
			var surname = document.getElementById("lastnm").value;
			var condicion1 = /^[A-Za-z\´\`\'\-\ ]{3,40}$/;

			if (condicion1.test(surname)){
				document.getElementById("lastnmPrompt").style.fontSize =  ".65em";
				document.getElementById("lastnmPrompt").innerHTML =  "Valid";
				return(true);
			}else{
				document.getElementById("lastnmPrompt").style.fontSize =  ".65em";
				document.getElementById("lastnmPrompt").innerHTML =  "You can only enter alphabetic characters..";
				return(false);
			}
		}
		function validateEmail(){
			var mail = document.getElementById("email").value;
			var condicion2 = /^[A-Za-z\0-9]{3,80}/;
			var condicion3 = /[@coursera.com]{13}/;

			if (condicion2.test(mail) && condicion3.test(mail)){
				document.getElementById("emailPrompt").style.fontSize = ".65em";
				document.getElementById("emailPrompt").innerHTML = "Valid";
				return(true);
			}else{
				document.getElementById("emailPrompt").style.fontSize = ".65em";
				document.getElementById("emailPrompt").innerHTML = "Remember:<br> the name of the e-mail must have minimum, 3 alphanumeric characters.<br> The mandatory domain to use is'@coursera.com'.";
				return(false);
			}
		
		}
        
		function validateplaceworld(){
			var nomb = document.getElementById("placeworld").value;
			var condicion = /^[A-Za-z\ñ\Ñ\´\`\'\-\ ]{3,40}$/;

			if (condicion.test(nomb)){
				document.getElementById("placeworldPrompt").style.fontSize =  ".65em";
				document.getElementById("placeworldPrompt").innerHTML =  "Valid";
				return(true);
			}else{
				document.getElementById("placeworldPrompt").style.fontSize =  ".65em";
				document.getElementById("placeworldPrompt").innerHTML =  "You can only enter alphabetic characters..";
				return(false);
			}
		}
		

  
function sendData(){ //validacion de la data ingresada al momento de clickear el boton de envio.
			var nom = document.getElementById("firstnm").value;
			var surname = document.getElementById("lastnm").value;
			var usuario = nom + surname;
			var correoElec = document.getElementById("email").value;
			var condi = /^[A-Za-z\´\`\'\-\ ]{3,40}$/;
			var condi1 = /^[A-Za-z\´\`\'\-\ ]{3,40}$/;
			var condi2 = /^[A-Za-z\0-9]{3,80}/;
			var condi3 = /[@coursera.com]{13}/;	
			
		

	 		if (condi.test(nom) && condi1.test(surname) && condi2.test(correoElec) && condi3.test(correoElec)){
	 			document.getElementById("enviar").innerHTML ="<br><br><p>Successful send! </p>";
	 		}else{
	 			document.getElementById("enviar").innerHTML += "<p>Please, fill in the fields correctly.</p>"
	 		}
		}