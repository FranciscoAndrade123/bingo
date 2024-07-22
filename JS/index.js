document.addEventListener('DOMContentLoaded', function() {
    function generarNumerosBingo(id, colorColumnas = false, colorFormaX = false , colorForma3X= false,) {
        let tableroBingo = [];
        let print = '';
        let min = 1; // número mínimo
        let max = 72; // número máximo
        let clasesColumna = ['b-columna', 'i-columna', 'n-columna', 'g-columna', 'o-columna']; // clases pa las columnas
        let colorX = 'color-x1'; // clase para colorear la X 
        let colorX1 = 'X1'; // clase para colorear la X1
        let colorX2 = 'X2'; // clase para colorear la X2
        let colorX3 = 'X3'; // clase para colorear la X3
        let x1 = [];
        let x2 = [];
        let x3 = [];

        for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
            tableroBingo[iteracion1] = [];
            for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
                tableroBingo[iteracion1][iteracion2] = numeroAleatorio;

                let colorOvalo = ''; //rellena los ovalos
                //primera condicional
                if (colorColumnas) {
                    colorOvalo = clasesColumna[iteracion2]; 
                }
                // condicional de la formacion de la X
                if (colorFormaX && (iteracion1 == iteracion2 || iteracion1 + iteracion2 == 4)) {
                    colorOvalo += colorX; //se le agrega la clase
                }
       
               

                print += `<div class="ovalo-numero ${colorOvalo}"><h2>${numeroAleatorio}</h2></div>`; //imprime todo
            }
        }

        document.getElementById(id).innerHTML = print;
    }

    generarNumerosBingo('numeros1');
    generarNumerosBingo('numeros2', true); 
    generarNumerosBingo('numeros3', false, true);
    generarNumerosBingo('numeros4', false,false,true);
});
