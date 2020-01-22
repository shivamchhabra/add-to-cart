//global variables
var obj1=
{
	"key":["shivamchhabra","shivam", "mini@gmail.com", "aseem@gmail.com","1234"],
	"ans":["1234", "1234", "mini", "aseem","123"],
	"pno":["8427983436", "8427983536","5468464","48848","123456789"]
         
}
var k=0;



function myfunction()
{
prompt("enter the email id");
}



function fun1()
{
		
	var email=document.getElementById("Email").value;
	var pass=document.getElementById("Pass").value;
	var x="" ,i,j=0;
	for(i in obj1.key)
	{
		
		if(email == obj1.key[i] && pass==obj1.ans[i])
		{
			x+="logged in successfully!";
			sessionStorage.setItem("ema",obj1.key[i] );
			sessionStorage.setItem("pn",obj1.pno[i] );
            location.assign("project.html");
            j++;
			break;
		}
		k++;
		
	}
	console.log(k);
	if(j==0)
	{
		x+="cant logg in!!";

	}
	document.getElementById("demo").innerHTML=x;
}
function changename()
{
	var emaa=sessionStorage.getItem("ema");
	var pno1=sessionStorage.getItem("pn");
	var n="";
	if(emaa==null)
	{
         n+="Hello Guest!!";
	}else
	{
	    n+="Hello "+emaa +" P.No:"+pno1+"!";	
	}
	document.getElementById("nam").innerHTML=n;
}