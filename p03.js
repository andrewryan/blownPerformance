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
    whatPage += 5;
    itemsOrdered(whatPage);   
}
function proPage()
{
    whatPage += 10;
    itemsOrdered(whatPage);
}
function whipPage()
{
    whatPage += 15;
    itemsOrdered(whatPage);
}
var cartItems = [];
var slpPrice = 6795.95;
var whipPrice = 7650.99;
var proPrice = 5920.89;
var finish = "";
var hose = "";
var partsList = "";
function itemsOrdered(whatPage)
{
    while(whatPage == 5)
    {
        finish = getCookie("finish");
        hose = getCookie("hose");
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
        cartItems.push(slpPrice);
        whatPage++;
        partsList = cartItems.toString();
        setCookie("list", partsList, 1);
    }
    while(whatPage == 10)
    {
        finish = getCookie("finish");
        hose = getCookie("hose");
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
            proPrice += 215.00;
        }
        if(hose == "red")
        {
            proPrice += 75.00;
        }
        cartItems.push(proPrice);
        whatPage++;
        partsList = cartItems.toString();
        setCookie("list", partsList, 1);
    }
    while(whatPage == 15)
    {
        finish = getCookie("finish");
        hose = getCookie("hose");
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
            whipPrice += 370.00;
        }
        if(hose == "red")
        {
            whipPrice += 135.00;
        }
        cartItems.push(whipPrice);
        whatPage++;
        partsList = cartItems.toString();
        setCookie("list", partsList, 1);
    }
}
var newList = "";
function printToCart()
{
    var orderList = getCookie("list");
    var printList = [];
    printList = orderList.split(",");
    document.getElementById("finishColor").innerHTML = "Your Supercharger finsh is " + printList[0] + ".";
    document.getElementById("hoseColor").innerHTML = "Your hose coupling color is " + printList[1] + ".";
    document.getElementById("subtotal").innerHTML = "Your subtotal is $" + printList[2];
    var subtotal = 0.00;
    var tax = 0.00;
    var total = 0.00;
    subtotal = Number(printList[2]);
    var tax = subtotal * .075;
    total = (subtotal + tax);
    total = total.toFixed(2);
    document.getElementById("total").innerHTML = "Your total is $" + total;
}