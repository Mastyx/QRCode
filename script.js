const btnScan = document.querySelector(".div-scann");
const btnGenerate = document.querySelector(".div-generate");
const info = document.getElementById("info");
const divInfo = document.getElementById("dev-info")

btnScan.addEventListener("click", ()=>{
	window.location.href = './scancode/scan.html';
});

btnGenerate.addEventListener("click", ()=>{
	window.location.href = './createcode/generate.html';
});

info.addEventListener("click",()=>{
});
