const Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower="abcdefghijklmnopqrstuvzxyz"
const number="0123456789";
const sym="!@#$%^&*()+=*-";
let pass=document.getElementById("data");
let len=document.querySelector("#Length");
let upper=document.querySelector("#first");
let low=document.querySelector("#second");
let num=document.querySelector("#third");
let symbol=document.querySelector("#fourth");
len.classList.remove("col");
const make=(dataset)=>{
	return dataset[Math.floor(Math.random()*dataset.length)]
}
const chek=()=>{
	let g=upper.checked;
	let h=low.checked;
	let s=symbol.checked;
	let n=num.checked;
	if (g || h||s||n){
		generate();
	}
	else
	{
		pass.innerText="Select at least one contraint"
		pass.classList.add("col");
	}
}
const generate=(password="")=>
{
	
	if (upper.checked){
		pass.classList.remove("col");
		password=password+make(Upper);
		
		
	}
	if(low.checked)
	{
		pass.classList.remove("col");
		password=password+make(lower);
	
	}
	if(num.checked)
	{
		pass.classList.remove("col");
		password=password+make(number)
	
	}
	if(symbol.checked)
	{
		pass.classList.remove("col");
		password=password+make(sym)
	
	}
	if (password.length<=len.value)
	{
		return generate(password);
	}	
	//console.log(truncare(password,len.value));
		pass.innerText=truncare(password,len.value);
}
	
document.querySelector(".genrate").addEventListener("click",function (){
//	generate();

	let size=len.value;
	const check=()=>{
	if (size>=2 && size<=10){
		len.classList.remove("col")
		chek();
	}
	else if (size<2) {
		len.classList.add('col');
		pass.innerText="Length to Small";
	}
	else
	{
		len.classList.add('col');
		pass.innerText="Length exceeds";
	}
}
check();
})
function truncare(pass,total)
 {
 	if (pass.length>total){
 		let sub=pass.substring(0,total)
 		return sub;
 	}
 	
}