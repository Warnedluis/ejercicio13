function factorial(n)
{
    let aux;
    aux  = 1;
    numero = parseInt(document.getElementById("Numero").value);
    for(let i=1 ; i<=numero; i++)
    {
        aux = aux * i;
    }
    document.getElementById("Resultado").value = aux;

}

function DeterminarPar(n)
{
    if(numero % 2==0)
    {
        document.getElementById("Resultado").value = "El numero es par";
    }
    else
    {
        document.getElementById("Resultado").value = "El numero es impar";
    }
}

function DeterminarPrimo(n)
{

    EsPrimoTextNoPrimo = "NO es un numero primo";
    EsPrimoTextPrimo = "Es un numero primo";

    if(n == 0)
    {
        alert("No se puede dividir entre 0");
    }
    else if(n ==1)
    {
        EsPrimoTextNoPrimo = "NO es un numero primo";
    }
    else if(n != 0 || n != 1)
    {
        for(let i = 2; i<n;i++)
        {
            let EsPrimo = n % i;
            if(EsPrimo == 0)
            {
                document.getElementById("Resultado").value = EsPrimoTextNoPrimo;
                return false;
            }
        }

        document.getElementById("Resultado").value = EsPrimoTextPrimo;
    }
}

function SumaImpares(n)
{

    if(n == 0)
    {
        document.getElementById("Resultado").value = "0";
    }
    else
    {

        const impares = [];
        let j = 0;

        for(let i = 1;i<n;i++)
        {
            if(i%2 != 0)
            {
                impares[j] = i;
                j++;
            }
        }

        let suma = 0;
        for(let k = 0;k<impares.length; k++)
        {
            suma = suma + impares[k];
        }

        document.getElementById("Resultado").value = suma;
    }

}

function SumaPares(n)
{

    if(n == 0)
    {
        document.getElementById("Resultado").value = "0";
    }
    else
    {

        const impares = [];
        let j = 0;

        for(let i = 1;i<n;i++)
        {
            if(i%2 == 0)
            {
                impares[j] = i;
                j++;
            }
        }

        let suma = 0;
        for(let k = 0;k<impares.length; k++)
        {
            suma = suma + impares[k];
        }

        document.getElementById("Resultado").value = suma;
    }

}


btnCalcular.addEventListener('click',function() {
    
    const num = parseInt(document.getElementById("Numero").value);
    const OPC = menu.value;

    switch(OPC)
    {
        case "Es primo?":
            DeterminarPrimo(num);
            break;
        case "Factorial":
            factorial(num);
            break;
        case "Suma de impares":
            SumaImpares(num);
            break;
        case "Suma de pares":
            SumaPares(num);
            break;
        case "Es par?":
            DeterminarPar(num);
            break;
        default:
            break;
    }
})