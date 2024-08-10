const btnScan = document.querySelector(".div-scann");
const btnGenerate = document.querySelector(".div-generate");
const info = document.getElementById("info");
const divInfo = document.getElementById("div-info");


document.addEventListener("DOMContentLoaded", ()=>{
	caricaInfoTesto();	

	btnScan.addEventListener("click", ()=>{
		window.location.href = './scancode/scan.html';
	});

	btnGenerate.addEventListener("click", ()=>{
		window.location.href = './createcode/generate.html';
	});

	info.addEventListener("click",()=>{
		if (divInfo.style.display === 'none') {
			divInfo.style.display = 'block';
			info.style.background = "#FF0033"
		} else {
			divInfo.style.display = 'none';
			info.style.background = '#333'
		}
	});

});


// carica  il file di testo all'interno 
// della div info

const caricaInfoTesto = ()=>{
	let textInfo = '';

	fetch("info.txt")
		.then(response => response.text())
		.then(data => {
			textInfo = data;
			const areatesto = document.createElement("textarea");
			areatesto.id = "area-testo-info";
			areatesto.value = textInfo;
			divInfo.appendChild(areatesto);

		})
		.catch(error => console.log("Errore caricamento info"));
}
