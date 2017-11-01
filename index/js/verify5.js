function validateForm(){
var pwform=document.getElementById("pwform");

var username=document.getElementById("username");
var remember=document.getElementById("remember");
var usernameValue=document.getElementById("username").value;
var pwValue=document.getElementById("pw").value;
var p1= document.createElement("span");
var p2= document.createElement("span");
var p3= document.createElement("span");
var p4= document.createElement("span");
var p5= document.createElement("span");
var p6= document.createElement("span");
var div=document.createElement("div");
div.className="remindtext"
var reg0=/\s/;
var reg1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,}$/;
var reg2=/^(?=.*[a-z])(?=.*[A-Z])(?!.*[0-9]).{4,}$/;
var reg3=/^(?=.*[a-z])(?!.*[A-Z])(?=.*[0-9]).{4,}$/;
var reg4=/^(?=.*[a-z])(?!.*[A-Z])(?!.*[0-9]).{4,}$/;

var reg5=/^(?!.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,}$/;
var reg6=/^(?!.*[a-z])(?=.*[A-Z])(?!.*[0-9]).{4,}$/;
var reg7=/^(?!.*[a-z])(?!.*[A-Z])(?=.*[0-9]).{4,}$/;
var reg8=/^(?!.*[a-z])(?!.*[A-Z])(?=!.*[0-9]).{4,}$/;

var reg9=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{0,3}$/;
var reg10=/^(?=.*[a-z])(?=.*[A-Z])(?!.*[0-9]).{0,3}$/;
var reg11=/^(?=.*[a-z])(?!.*[A-Z])(?=.*[0-9]).{0,3}$/;
var reg12=/^(?=.*[a-z])(?!.*[A-Z])(?!.*[0-9]).{0,3}$/;

var reg13=/^(?!.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{0,3}$/;
var reg14=/^(?!.*[a-z])(?=.*[A-Z])(?!.*[0-9]).{0,3}$/;
var reg15=/^(?!.*[a-z])(?!.*[A-Z])(?=.*[0-9]).{0,3}$/;
var reg16=/^(?!.*[a-z])(?!.*[A-Z])(?=!.*[0-9]).{0,3}$/;


p1.innerHTML="\"User Name/Email/Mobile No.\" is required.</br>"
p2.innerHTML="\"Password\" is required.</br>"
p3.innerHTML="\"Password\" must contain lowercase letters</br>";
p4.innerHTML="\"Password\" must contain uppercase letters</br>";
p5.innerHTML="\"Password\" must contain numbers</br>";
p6.innerHTML="Length of \"Password\" cannot be less than 4</br>";

if(usernameValue==''){
	                 pwform.insertBefore(div,remember);
	                div.appendChild(p1) 

                   }

if(pwValue==''){
	                pwform.insertBefore(div,remember);
	 				div.appendChild(p2)
	 				div.appendChild(p3)
	 				div.appendChild(p4)
	 				div.appendChild(p5)
	 				pwform.replaceChild(div,div.previousSibling);/*替代前一次输入密码时的报错*/
 }
else{
	if(reg1.test(pwValue)){pwform.submit();}
     else if(reg2.test(pwValue)){
     	            pwform.insertBefore(div,remember);
	 				div.appendChild(p5)
	                pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg3.test(pwValue)){
     	            pwform.insertBefore(div,remember);
	 				div.appendChild(p4) 
	                pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg4.test(pwValue)){
     	            pwform.insertBefore(div,remember);
	 				div.appendChild(p4)
	 				div.appendChild(p5)
	                pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg5.test(pwValue)){
     	            pwform.insertBefore(div,remember);
	 				div.appendChild(p3)
	               pwform.replaceChild(div,div.previousSibling);
	 			}	 			
     else if(reg6.test(pwValue)){
     	            pwform.insertBefore(div,remember);
                    div.appendChild(p3)
	 				div.appendChild(p5)
                    pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg7.test(pwValue)){
     	            pwform.insertBefore(div,remember);
                    div.appendChild(p3)
	 				div.appendChild(p4)
	             pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg8.test(pwValue)){
     	            pwform.insertBefore(div,remember);
                    div.appendChild(p3)
	 				div.appendChild(p4)
	 				div.appendChild(p5)
	             pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg9.test(pwValue)){
     	            pwform.insertBefore(div,remember);
	 				div.appendChild(p6)
	             pwform.replaceChild(div,div.previousSibling);
                }
     else if(reg10.test(pwValue)){
     	            pwform.insertBefore(div,remember);
	                div.appendChild(p6)
	 				div.appendChild(p5) 
                    pwform.replaceChild(div,div.previousSibling);
                }
     else if(reg11.test(pwValue)){
	                pwform.insertBefore(div,remember);
	 				div.appendChild(p6)
	 				div.appendChild(p4)
                    pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg12.test(pwValue)){
	                pwform.insertBefore(div,remember);
	 				div.appendChild(p6)
	 				div.appendChild(p4)
	 				div.appendChild(p5)
	                pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg13.test(pwValue)){
	                pwform.insertBefore(div,remember);
	 				div.appendChild(p6)
	 				div.appendChild(p3)
	                pwform.replaceChild(div,div.previousSibling);
	 			}	 			
     else if(reg14.test(pwValue)){
	                pwform.insertBefore(div,remember);
	 				div.appendChild(p6) 
                    div.appendChild(p3)
	 				div.appendChild(p5)
	                pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg15.test(pwValue)){
	                pwform.insertBefore(div,remember);
	 				div.appendChild(p6) 
                    div.appendChild(p3)
	 				div.appendChild(p4) 
	                pwform.replaceChild(div,div.previousSibling);
	 			}
     else if(reg16.test(pwValue)){
	                pwform.insertBefore(div,remember);
	 				div.appendChild(p6)
                    div.appendChild(p3)
	 				div.appendChild(p4)
	 				div.appendChild(p5) 
	                pwform.replaceChild(div,div.previousSibling);
	 			}
}


}