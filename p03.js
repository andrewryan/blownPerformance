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
function slpDropdown()
{
	location.assign("cart.html");
    return true;
}
function proDropdown()
{
	location.assign("cart.html");
    return 2;
}
function whipDropdown()
{
	location.assign("cart.html");
    return 3;
}
/*
var partsList = "";
function itemList()
{
    partsList = cartItems.toString();
    console.log(partsList + " = partsList variable");
    setCookie("partslist", partsList, 10);
}
*/

var cartItems = [];
var slpPrice = 6795.95;
var whipPrice = 7650.00;
var proPrice = 5920.00;
function itemsOrdered()
{
    if(slpDropdown() == true)
    {
        var finish = getCookie("slpFinish");
        var hose = getCookie("slpHose");
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
            slpPrice += 175.00;
        }
        if(hose == "red")
        {
            slpPrice += 90.00;
        }
        document.getElementById("items").innerHTML = finish + " " + hose + " $" + slpPrice;
    }
}