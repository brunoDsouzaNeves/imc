calc= document.getElementById("calc");
kg= document.getElementById("kg");
m= document.getElementById("m");
imc= document.getElementById("imc");
leitura= document.getElementById("leitura");

	function calc(){
	if(kg.value!="" && m.value!=""){
		imcx= (kg.value / (m.value * m.value));
		imc.innerHTML = imcx;
		console.log(imcx);
	}
		if(imcx<=15){
			leitura.innerHTML = "Anemia muito Severa"
			document.getElementById('15oM').style.backgroudColor = "#f1c40f";

		}
		else if (imcx >= 15.0000001  && imcx <= 15.9) {
				leitura.innerHTML = "Anemia  Severa"
			document.getElementById('AnemiaS').style.backgroudColor = "#f1c40f";
		}
		else if (imcx >= 16  && imcx <= 18.5) {
				leitura.innerHTML = "Anemia"
			document.getElementById('Anemia').style.backgroudColor = "#f1c40f";
		}
		else if (imcx >= 18.9  && imcx <= 24.9) {
				leitura.innerHTML = "Saudavel"
			document.getElementById('Saudavel').style.backgroudColor = "#f1c40f";
		}
		else if (imcx >= 25  && imcx <= 29,9) {
				leitura.innerHTML = "A cima do Peso"
			document.getElementById('acima_peso').style.backgroudColor = "#f1c40f";
		}
		else if (imcx >= 34  && imcx <= 139.9) {
				leitura.innerHTML = "Obesidade"
			document.getElementById('obesidade').style.backgroudColor = "#f1c40f";
		}
		else if (imcx >= 40) {
				leitura.innerHTML = "Obesidade morbida"
			document.getElementById('morbida').style.backgroudColor = "#f1c40f";
		}
		else {
			alert('Informações Incorretas')
		}
		
	

}