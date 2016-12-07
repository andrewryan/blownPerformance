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

var cartItems = [];
//var whatPage = 0;
function slpDropdown()
{
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
    
}
function proDropdown()
{
	location.assign("cart.html");
    whatPage = 5;
}
function whipDropdown()
{
	location.assign("cart.html");
    whatPage = 10;
}

var slpPrice = 6795.95;
var whipPrice = 7650.00;
var proPrice = 5920.00;
function itemsOrdered(cartItems)
{
    var finish = cartItems[0];
    var hose = cartItems[1];
    //alert(whatPage);
    //for(var i = 0; i < 1; i++)
    
    //if(whatPage == 1)
    //{
        /*var finish = getCookie("finish");
        var hose = getCookie("hose");
        if(finish == "gloss black" || finish == "polished")
        {
            cartItems.push(finish);
        }
        else if(hose == "black" || hose == "red")
        {
            cartItems.push(hose);
        }
        */
        if(finish == "polished")
        {
            slpPrice += 175.00;
        }
        else if(hose == "red")
        {
            slpPrice += 90.00;
        }
        document.getElementById("items").innerHTML = finish + " " + hose + " $" + slpPrice;
        //whatPage++;
    //}
    //else if(proDropdown() == true)
}