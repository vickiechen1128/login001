window.onload = function() {
	//tab切换
	var nav = document.getElementById("logintab").getElementsByTagName("a");
	var loginarea = document.getElementsByClassName("LoginArea");
	forgetpw.style.display = "none";
	/*var forgetpw=document.getElementById("forgetpw")
	var backlogin=document.getElementById("backlogin")
	forgetpw.style.zindex=-1
	backlogin.style.zindex=1;*/

	for(i = 0; i < nav.length; i++) {
		nav[i].index = i;
		nav[i].onclick = function() {
			for(var n = 0; n < loginarea.length; n++) { /*所有内容都设置为空*/
				loginarea[n].style.display = "none";
				nav[n].className = "taba";
			}
			loginarea[this.index].style.display = "block"; /*仅仅显示当前索引下的内容*/
			nav[this.index].className = "tabli";
		}

	}

	var rememberMe = document.getElementById("rememberMe");
	var uname = document.getElementById("username")
	var uword = document.getElementById("pw")
	uname.style.backgroundColor = "whitesmoke"
	uword.style.setProperty("background-color", "whitesmoke")
	if(document.cookie.length > 0)
	//GetCookie
	{

		var cookieArray = document.cookie.split(";")
		console.log(cookieArray)
		var name = cookieArray[0].split("=")
		var pword = cookieArray[1].split("=")
		var remember = cookieArray[2].split("=")
		uname.value = name[1];
		uword.value = pword[1];
		rememberMe.checked = remember[1];

		if(rememberMe.checked == true & uname.value.length > 0) {
			uname.style.setProperty("background-color", "#FFF59D")
		}
		if(rememberMe.checked == true & uword.value.length > 0) {
			uword.style.setProperty("background-color", "#FFF59D")
		}
	}

	uname.addEventListener("click", function() {
		uname.style.borderStyle = "none none solid none"
		uname.style.borderBottomColor = "blue"
		uword.style.borderBottomColor = "white"
	}, false)
	uword.addEventListener("click", function() {
		uword.style.borderStyle = "none none solid none"
		uword.style.borderBottomColor = "blue"
		uname.style.borderBottomColor = "white"
	}, false)

}