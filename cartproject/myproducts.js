var products=[];
var cart=[];
var prodid=0;


if(localStorage.getItem("item")!=null)
     {
	   products=JSON.parse(localStorage.getItem("item"));
	   prodid=products.length;
     }



function objcreation()
{
	var obje=new Object();
	obje.itnam=document.getElementById("name").value;
	obje.itid=document.getElementById("id").value;
    obje.itno=document.getElementById("no").value;
	obje.itdes=document.getElementById("desc").value;
    //console.log(obje.itid);
    if(document.getElementById("id").value=="" )
    {
    	console.log("id cant be null");
    	return ;
    }
     if(document.getElementById("name").value=="" )
    {
    	console.log("name cant be null");
    	return ;
    }
     if(document.getElementById("no").value=="" )
    {
    	console.log("number of items cant be null");
    	return ;
    }
     if(obje.itno<1)
    {
    	console.log("no of items cant be less than 1");
    	return ;
    }

    
	if(localStorage.getItem("item")!=null)
     {
	   products=JSON.parse(localStorage.getItem("item"));
	   for(var c=0;c<products.length;c++)
	  {
		if(products[c].itid==obje.itid)
		{
			console.log("cant add products of same ids");
			return;
		}
		
	  }
     }
     
    products.push(obje);
	
	localStorage.setItem("item", JSON.stringify(products));
		
 //    var tabl=document.getElementById("tab");
	// var row=document.createElement("tr");
	// row.setAttribute("id", obje.itid);

	// var col1=document.createElement("td");
	// col1.innerHTML=obje.itid;
	// row.appendChild(col1);

	// var col2=document.createElement("td");
	// col2.innerHTML=obje.itnam;
	// row.appendChild(col2);

	// var ecol=document.createElement("td");
	// ecol.innerHTML=obje.itno;
	// row.appendChild(ecol);


	// var col3=document.createElement("td");
	// col3.innerHTML=obje.itdes;
	// row.appendChild(col3);

	// var but =document.createElement("button");
	// but.innerHTML="EDIT";
	// var col4=document.createElement("td");
	// col4.appendChild(but);
	// row.appendChild(col4);

	// var but2 =document.createElement("button");
	// but2.innerHTML="DELETE";
	// var col5=document.createElement("td");
	// col5.appendChild(but2);
	// row.appendChild(col5);

	// var but3 =document.createElement("button");
	// but3.innerHTML="Add To Cart";
	// var col6=document.createElement("td");
	// col6.appendChild(but3);
	// row.appendChild(col6);

 //    var inc=document.getElementById("id").value;
 //    inc++;
	// tabl.appendChild(row);
	// document.getElementById("desc").value=null;
	// document.getElementById("name").value=null;
	// document.getElementById("id").value=inc;
	// var tab1=document.getElementById("tab");
	// 			//console.log(products.length);
	// 			//console.log(tab1.rows.length-1);
				  
				    display();

	
}



function display()
{
	
	if(localStorage.getItem("item")!=null)
	{

		products=JSON.parse(localStorage.getItem("item"));
		var table=document.getElementById("tab");
		while(table.rows.length>1)
				    {
				    	table.deleteRow(1);
				    }
	for (var i = 0; i<products.length; i++) 
	{
		//console.log(i);
		if(products[i].itno>0)
		{
	var tabl=document.getElementById("tab");
      

	var row=document.createElement("tr");
	row.setAttribute("id", products[i].itid);

	var col1=document.createElement("td");
	col1.innerHTML=products[i].itid;
	row.appendChild(col1);

	var col2=document.createElement("td");
	col2.innerHTML=products[i].itnam;
	row.appendChild(col2);

	var ecol=document.createElement("td");
	ecol.innerHTML=products[i].itno;
	row.appendChild(ecol);

    var col3=document.createElement("td");
	col3.innerHTML=products[i].itdes;
	row.appendChild(col3);


	var but =document.createElement("button");
	but.innerHTML="EDIT";
	var col4=document.createElement("td");
	col4.appendChild(but);
	row.appendChild(col4);

	var but2 =document.createElement("button");
	but2.innerHTML="DELETE";
	var col5=document.createElement("td");
	col5.appendChild(but2);
	row.appendChild(col5);

	var but3 =document.createElement("button");
	but3.innerHTML="Add To Cart";
	var col6=document.createElement("td");
	col6.appendChild(but3);
	row.appendChild(col6);

	tabl.appendChild(row);
	but2.addEventListener("click", function(event)
{
	var tar=event.target.parentNode.parentNode;
	//console.log(tar.id);
	var j;
	for(j=0;j<products.length;j++)
	{
		if(products[j].itid==tar.id)
		{
			//console.log(j);
			//console.log(products[j]);
			products.splice(j,1);
			localStorage.setItem("item", JSON.stringify(products));
			//console.log(products);
			display();
			


		}
	}
	
})
	but3.addEventListener("click", function(event)
	{
		var dd=event.target.parentNode.parentNode;
		//console.log(dd.id);
		var k;
		for(k=0;k<products.length;k++)
		{
			if(products[k].itid==dd.id)
			{
				if(products[k].itno>0)
				{
				localStorage.setItem("indx", k);
				var x=parseInt(products[k].itno);
				x--;
				//console.log(x);
				products[k].itno=x;
				localStorage.setItem("item", JSON.stringify(products));
				var s;
				var tab1=document.getElementById("tab");
				//console.log(products.length);
				//console.log(tab1.rows.length-1);
				    
				    display();
				    showcart();
				    break;
				}
				else
				{
					console.log("item is no more");
				}
			}
		}
	})


but.addEventListener("click", function(event)
{
	var edt=event.target.parentNode.parentNode;
	//console.log(edt);
	for(var s=0;s<products.length;s++)
	{
		if(products[s].itid==edt.id)
		{
			break;
		}
	}
	//console.log(s);
	localStorage.setItem("ind", s);
	location.assign("edit.html");

})
}
}
 }
displaycart();

}

function check()
{
	var products=JSON.parse(localStorage.getItem("item"));
	var iid=localStorage.getItem("ind");
	document.getElementById("desce").value=products[iid].itdes;
	document.getElementById("namee").value=products[iid].itnam;
	document.getElementById("ide").value=products[iid].itid;
	document.getElementById("noe").value=products[iid].itno;
}

function change()
{
	var dsc=document.getElementById("desce").value;
	var nm=document.getElementById("namee").value;
	var idd=document.getElementById("ide").value;
	var no1=document.getElementById("noe").value;
	products=JSON.parse(localStorage.getItem("item"));
	var dd=localStorage.getItem("ind");
	for(var i=0;i<products.length;i++)
	{
		if(i!=dd)
		{
		   if(idd==products[i].itid)
	    	{
		    	console.log("no 2 items can have same ids");
		    	return;
		    }
	    }
	}
	
	products[dd].itid=idd;
	products[dd].itdes=dsc;
	products[dd].itnam=nm;
	products[dd].itno=no1;
	//console.log(products);
	localStorage.setItem("item", JSON.stringify(products));
	location.assign("myproducts.html");
}



function showcart()
{
	var products=JSON.parse(localStorage.getItem("item"));
	var idx=localStorage.getItem("indx");
	
	var count=0;
	var table=document.getElementById("tab2");
	var k=1;
	if(localStorage.getItem("carr")!=null)
	{
		var cart=JSON.parse(localStorage.getItem("carr"));
		for(var i=0;i<cart.length;i++)
		{
			if(products[idx].itid==cart[i].itid)
			{
				count++;
				cart[i].itno=cart[i].itno+1;
                localStorage.setItem("carr", JSON.stringify(cart));
                displaycart();
				break;
			}
		}
		if(count==0)
	    {
	       var obj=new Object();
	       obj.itid=products[idx].itid;
	       obj.itnam=products[idx].itnam;
	       obj.itdes=products[idx].itdes;
	       obj.itno=1;
           cart.push(obj);
           localStorage.setItem("carr", JSON.stringify(cart));
           displaycart();
	}
	
	}
	if(localStorage.getItem("carr")==null)
	{
		var cart1=[];
		console.log(products[idx]);
		var obj=new Object();
	    obj.itid=products[idx].itid;
	    obj.itnam=products[idx].itnam;
	    obj.itdes=products[idx].itdes;
	    obj.itno=1;
	    console.log(obj);
        cart1.push(obj);
        localStorage.setItem("carr", JSON.stringify(cart1));
        displaycart();

	}
	

	
	

     
}


function displaycart()
{
	if(localStorage.getItem("carr")!=null)
	{
		var cart=JSON.parse(localStorage.getItem("carr"));
		if(localStorage.getItem("carr")!=null)
		{
			var tbl=document.getElementById("tab2");
			//console.log(tbl.rows.length);
		    while(tbl.rows.length>1)
            {
    	        tbl.deleteRow(1);
            }
		}

		for(var i=0;i<cart.length;i++)
		{
			if(cart[i].itno>0)
			{
		
		var row=document.createElement("tr");
		row.setAttribute("id", cart[i].itid);

		var col1=document.createElement("td");
		col1.innerHTML=cart[i].itid;
		row.appendChild(col1);

		var col2=document.createElement("td");
		col2.innerHTML=cart[i].itnam;
		row.appendChild(col2);

		var col3=document.createElement("td");
		col3.innerHTML=cart[i].itdes;
		row.appendChild(col3);

		var col4=document.createElement("td");
		col4.innerHTML=cart[i].itno;
		row.appendChild(col4);

		var col5=document.createElement("td");
		var butt=document.createElement("button");
		butt.innerHTML="DELETE";
		col5.appendChild(butt);
		row.appendChild(col5);

        tbl.appendChild(row);


        butt.addEventListener("click", function(event)
        {
             var cc=event.target.parentNode.parentNode;
             //console.log(cc.id);

             var arrc=[];
             arrc=JSON.parse(localStorage.getItem("carr"));
             
             for(var q=0;q<arrc.length;q++)
             {
             	if(cc.id == arrc[q].itid)
             	{
                    if(arrc[q].itno>0)
                    {
             		arrc[q].itno=arrc[q].itno-1;
             		localStorage.setItem("carr",JSON.stringify(arrc));
             		displaycart();
             		var itlis=[];
                    itlis=JSON.parse(localStorage.getItem("item"));
                    for(var w=0;w<itlis.length;w++)
                    {
                    	if(cc.id==itlis[w].itid)
                    	{
                    		
                    		itlis[w].itno=itlis[w].itno+1;
                    		localStorage.setItem("item", JSON.stringify(itlis));
                    		display();
                    		return;
                           
                    	}
                    }
             		
             		

             	}
             	else
             	{
             		console.log("no item can be deleted further");
             	}
             }
             }


        })
           
		}
	}

	}
}

