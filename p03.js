/*Created by Andrew Ryan*/
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var whatPage = 0;
function slpPage()
{
    //alert("inside slpDropdown")
    whatPage = whatPage + 5;
    //alert(whatPage + " slpPage funct")
    itemsOrdered(whatPage);
    //return 5;
    /*
    alert(getCookie("finish"));
    alert(getCookie("hose"));
    var whatPage = 1;
	//location.assign("cart.html");
    //itemsOrdered(whatPage);
    
    var finish = getCookie("finish");
    var hose = getCookie("hose");
    cartItems.push(finish);
    cartItems.push(hose);
    itemsOrdered(cartItems);
    */
    
}
function proPage()
{
    return 10;
}
function whipPage()
{
    return 15;
}
var cartItems = [];
var slpPrice = 6795.95;
var whipPrice = 7650.00;
var proPrice = 5920.00;
var finish = "";
var hose = "";
var partsList = "";
function itemsOrdered(whatPage)
{
    alert("inside itemsOrdered")
    //alert(whatPage + " itemsOrdered funct")
    //var finish = cartItems[0];
    //var hose = cartItems[1];
    //var finish = getCookie("finish");
    //var hose = getCookie("hose");
    //alert(whatPage);
    //for(var i = 0; i < 1; i++)
    
    while(whatPage == 5)
    {
        //alert(whatPage + "inside slp page check")

        finish = getCookie("finish");
        hose = getCookie("hose");
        //alert(getCookie("finish"))
        //alert(getCookie("hose"))

        if(finish == "gloss black" || finish == "polished")
        {
            cartItems.push(finish);
        }
        if(hose == "black" || hose == "red")
        {
            cartItems.push(hose);
        }
        
        if(finish == "polished")
        {
            //alert("inside check for finish")
            //alert(getCookie("finish"))
            //alert(getCookie("hose"))
            slpPrice += 175.00;
            //alert(slpPrice)
        }
        if(hose == "red")
        {
            //alert("inside check for hose")
            //alert(getCookie("finish"))
            //alert(getCookie("hose"))
            slpPrice += 90.00;
            //alert(slpPrice)
        }
        cartItems.push(slpPrice);
        //alert(slpPrice + " slpPrice")
        whatPage++;
        //alert(whatPage)
        //alert("before function call to printToCart " + finish + " " + " " + hose + " " + slpPrice)
        //printToCart(finish, hose, slpPrice)
        /* this is not working because cart page is using onclick and this is done before that so it has nothing to write to */
        //document.getElementById("items").innerHTML = finish + " " + hose + " $" + slpPrice;
        //alert("after function call to printToCart " + finish + " " + " " + hose + " " + slpPrice)
        alert(cartItems[0] + " " + cartItems[1] + " " + cartItems[2])

        partsList = cartItems.toString();
        alert(partsList + " = partsList");
        setCookie("list", partsList, 10);
        //whatPage++;
        //alert(whatPage)
    }
    //else
        //alert("else statement");
}
var newList = "";
function printToCart()
{
    var orderList = getCookie("list");
    alert(orderList + " orderList")
    var printList = [];
    printList = orderList.split(",");
    document.getElementById("finishColor").innerHTML = "Your Supercharger finsh is " + printList[0] + ".";
    document.getElementById("hoseColor").innerHTML = "Your hose coupling color is " + printList[1] + ".";
    document.getElementById("subtotal").innerHTML = "Your subtotal is $" + printList[2] + ".";
    var subtotal = 0.00;
    var tax = 0.00;
    var total = 0.00;
    subtotal = Number(printList[2]);
    var tax = subtotal * .075;
    total = (subtotal + tax);
    total = total.toFixed(2);
    //total = total.toFixed(2);
    document.getElementById("total").innerHTML = "Your total is $" + total + ".";
    //alert(cartItems[0] + " " + cartItems[1] + " " + cartItems[2])
    //alert(finish + " inside print to cart")
    //alert(hose + " inside print to cart")
    //alert(price + " inside print to cart")
    /*
    for(var i = 0; i < printList.length; i++)
    {
        //alert("inside for loop")
        //document.getElementById("items").innerHTML = printList[i];
        newList = newList + printList[i] + " ";
        //displayItem(arrayCookie[i]);
    }
    //print(newList);
    alert(newList + " = newList");
    /*
    if(newList.includes("gloss black") || newList.includes("polished"))
    {

    }
    
    document.getElementById("items").innerHTML = newList;
    */
}
/*
function print(newList)
{
    alert(newList + " =newList")
    var printOut = [];
    printOut = newList.split(",");
    alert(printOut + " =printOut");
    alert(printOut[0]);
    alert(printOut[1]);
    alert(printOut[2])
    document.getElementById("items").innerHTML = "Your finish is " + printOut[0] + ". Your color is " + printOut[1] + 
    ". Your total is $" + printOut[2];
    //document.getElementById("items").innerHTML = newList;
}
*/
/*
var savedList = "";
function saveList()
{
    savedList = cartItems.toString();
    console.log(savedList + " = savedList");
    setCookie("list", savedList, 1);
}

function loadCookieList()
{
    var cookieList = getCookie("list");
    var arrayCookie = [];
    var arrayCookie = cookieList.split(",");
    //console.log("loadCookieList = " + arrayCookie);
    for(var i = 0; i < arrayCookie.length; i++)
    {
        displayItem(arrayCookie[i]);
    }
}
*/