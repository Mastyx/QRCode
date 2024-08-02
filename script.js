const btnScan = document.querySelector(".div-scann");
const btnGenerate = document.querySelector(".div-generate");

btnScan.addEventListener("click", ()=>{
	window.location.href = './scancode/scan.html';
});

btnGenerate.addEventListener("click", ()=>{
	console.log('richiama generate.html');
});
