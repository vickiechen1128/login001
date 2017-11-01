function Keydown(){
	var uname=document.getElementById("username")
	var uword=document.getElementById("pw")
	uname.style.backgroundColor="whitesmoke"
	uword.style.setProperty("background-color","whitesmoke")	
}

function ForgetMe(){

	var pwArea=document.getElementById("pwArea");
	var logintab=document.getElementById("logintab");
	var forgetpw=document.getElementById("forgetpw");
	pwArea.style.display="none";
	logintab.style.display="none";
	forgetpw.style.display="block";
	//forgetpw.style.zIndex=2;	
	document.getElementById("account").addEventListener("click",function(){
		document.getElementById("account").style.borderBottomColor="blue"},false)
}
function Backlogin(){
	pwArea.style.display="block";
	logintab.style.display="block";
	forgetpw.style.display="none";
	//forgetpw.style.zIndex=-1;
}

 function WriteCookie(){
 	var rememberMe=document.getElementById("rememberMe");
 	
	var n=document.getElementById("username").value;
	var pword=document.getElementById("pw").value;
    var expdate = new Date();  
	expdate.setDate(expdate.getDate()+7);   
	document.cookie="username="+n+";expires="+expdate.toGMTString()+";path=/";	
	document.cookie="userpassword="+pword+";expires="+expdate.toGMTString()+";path=/";	
	if (rememberMe.checked==true){
	document.cookie="checkbox="+rememberMe.checked+";expires="+expdate.toGMTString()+";path=/";	}
}

	
    

