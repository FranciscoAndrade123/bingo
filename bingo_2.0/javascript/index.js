document.addEventListener('DOMContentLoaded', function() {
    function generarNumerosBingo(colorColumnas = false, colorFormaX = false , colorForma3X= false) {
        let tableroBingo = [];
        let print = '';
        let min = 1; // número mínimo
        let max = 72; // número máximo
        let clasesColumna = ['b-columna', 'i-columna', 'n-columna', 'g-columna', 'o-columna']; // clases para las columnas
        let colorX = 'color-x1'; // clase para colorear la X 
        let colorX1 = 'X1'; // clase para colorear la X1


        for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
            tableroBingo[iteracion1] = [];
            for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
                tableroBingo[iteracion1][iteracion2] = numeroAleatorio;

                let colorOvalo = ''; // crea  los óvalos
                
                // Condicional para colorear columnas
                if (colorColumnas==true) {
                    colorOvalo += clasesColumna[iteracion2]; //se le agrega el backgraoud al ovalo 
                }
                // Condicional para la formación de la X
               if(colorFormaX==true){
                  if(iteracion1 == iteracion2 || iteracion1 + iteracion2 == 4){
                    colorOvalo += colorX; //se le agrega el backgraoud al ovalo generando la X
                }
               }
                // Condicional para la formación 3X
                if(colorForma3X==true){
                    if(iteracion1*iteracion2==8||iteracion1+iteracion2==2||iteracion1+iteracion2===0||iteracion2+iteracion1==(iteracion2+1)*2 || iteracion2+iteracion1==4){
                        colorOvalo += colorX1;
                    }
                }
                
                print += `<div class="ovalo-numero ${colorOvalo}"><h2>${numeroAleatorio}</h2></div>`; // imprime todo
            }
        }
        return print;
    }


    let print = ''; // imprime los tableros

    //generacion de los tableros bingo
    for (let itera1 = 0; itera1 <= 3; itera1++) {
    
       print += '<div class="row">'
       print += '<div class="col-12 col-md-5">'
        print += '<div  class="card" style="width: 25rem; height: 24rem; border: 3px solid black;   border-radius: 12px;">'; // segundo div
        print += '<div class="card-body">'; // tercer div  
        print += '<div class="letras">'; // cuarto div
        print += '<h2 class="letrab card-title">B</h2>';
        print += '<h2 class="letrai card-title">I</h2>';
        print += '<h2 class="letran card-title">N</h2>';
        print += '<h2 class="letrag card-title">G</h2>';
        print += '<h2 class="letrao card-title">O</h2>';
        print += '</div>'; // cierra letras div

        let colorColumnas = false; 
        let colorFormaX = false;
        let colorForma3X = false;

        if (itera1 === 1){
            colorColumnas = true;
        }
        if (itera1 === 2) {
            colorFormaX = true;
        }
        if (itera1 === 3){
            colorForma3X = true;
        } 

        print += '<div class="numeros">';
        print += generarNumerosBingo(colorColumnas, colorFormaX, colorForma3X);
        print += '</div>'; // cierra números div
        print += '</div>'; // cierra card-body div
        print += '</div>'; // cierra card div
        print += '</div>'; // cierra el  col-12 col-md-5
        print += '</div>'; // cierra el  row
        print += '<br>';
    }

    document.getElementById('tableros').innerHTML = print; //imprime los tableros
});

