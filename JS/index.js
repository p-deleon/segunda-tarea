var num1;
var num2;
var signo;
var existe = false;
var count = allStorage().length;


document.getElementById("show").innerHTML= allStorage();



function presionar(num1)
{
    var x = document.getElementById("calculo").innerText;
    if(x == "0" || existe)
    {
        document.getElementById("calculo").innerHTML= num1; 
        existe = false;
        
        
    }
    else
    {
        document.getElementById("calculo").innerHTML = x + num1;
    }

}

function operacion(x)
{
    switch (x) {
        case 'C':document.getElementById("calculo").innerHTML = 0; num1 = 0; num2 = 0;
            
            break;

        case '*': num1 = document.getElementById("calculo").innerText; document.getElementById("calculo").innerHTML = ''; signo ='*';
            break;
        
        case '=' : num2 = document.getElementById("calculo").innerText; resultado(signo); existe = true;
        break;

        case '+': num1 = document.getElementById("calculo").innerText; document.getElementById("calculo").innerHTML = ''; signo ='+';
            break;
        
        case '-': num1 = document.getElementById("calculo").innerText; document.getElementById("calculo").innerHTML = ''; signo ='-';
        break;

        case '/': num1 = document.getElementById("calculo").innerText; document.getElementById("calculo").innerHTML = ''; signo ='/';

        break;


    
        default:
            break;

    }
}

function resultado (signo)
{
    if (signo == '*') {
        document.getElementById("calculo").innerHTML = num1 * num2;
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (num1 * num2));
        document.getElementById("show").innerHTML= allStorage();

    }

    if (signo == '-') {
        document.getElementById("calculo").innerHTML = num1 - num2;
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (num1 - num2));
        document.getElementById("show").innerHTML= allStorage();
    }

    if (signo == '+') {
        document.getElementById("calculo").innerHTML = parseFloat(num1)+ parseFloat(num2);
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (parseFloat(num1)+ parseFloat(num2)));
        document.getElementById("show").innerHTML= allStorage();
    }

    if (signo == '/') {
        document.getElementById("calculo").innerHTML = num1 / num2;
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (num1 / num2));
        document.getElementById("show").innerHTML= allStorage();
    }



}



function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}


function clean()
{
    localStorage.clear();
    document.getElementById("show").innerHTML= allStorage();
}





