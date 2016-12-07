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
    alert("inside slpDropdown")
    whatPage = whatPage + 5;
    alert(whatPage + " slpPage funct")
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
        alert(whatPage + "inside slp page check")

        var finish = getCookie("finish");
        var hose = getCookie("hose");
        alert(getCookie("finish"))
        alert(getCookie("hose"))
/*
        if(finish == "gloss black" || finish == "polished")
        {
            cartItems.push(finish);
        }
        else if(hose == "black" || hose == "red")
        {
            cartItems.push(hose);
        }*/
        
        if(finish == "polished")
        {
            alert("inside check for finish")
            alert(getCookie("finish"))
            alert(getCookie("hose"))
            slpPrice += 175.00;
            alert(slpPrice)
        }
        if(hose == "red")
        {
            alert("inside check for hose")
            alert(getCookie("finish"))
            alert(getCookie("hose"))
            slpPrice += 90.00;
            alert(slpPrice)
        }
        alert(slpPrice + " slpPrice")
        whatPage++;
        alert(whatPage)
        alert("before document.getElem " + finish + " " + " " + hose + " " + slpPrice)
        document.getElementById("items").innerHTML = finish + " " + hose + " $" + slpPrice;
        alert("after document.getElem " + finish + " " + " " + hose + " " + slpPrice)
        //whatPage++;
        //alert(whatPage)
    }
    //else
        //alert("else statement");
}