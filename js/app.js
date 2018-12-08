(function(){
    var app = document.getElementById('app');
    var inputCaracteres = document.getElementById('numero-caracteres');

    var configuaracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minisculas: true
    }
 var caracteres = {
     numeros:'0 1 2 3 4 5 6 7 8 9',
     simbolos:'! @ # $ % * ( ) _ - = { [ } ] ; : < , > . ? /',
     mayusculas:'A B C D F G H J K L Ñ Z X C V B N M Q W E R T Y U I O P',
    minisculas:'a b c d f g h j k l ñ z x c v b n m q w e r t y u i o p'
 }

    /*console.log(configuaracion.caracteres);
    configuaracion.caracteres = configuaracion.caracteres +1;
    console.log(configuaracion.caracteres);
    */

   /*
   Eventos
   */
  //evento para evitar que el app aga un sugmit
app.addEventListener('submit',function(e){
  e.preventDefault();  
});
app.elements.namedItem('btn-mas-uno').addEventListener('click', function(){
  configuaracion.caracteres++;
  inputCaracteres.value = configuaracion.caracteres;
})

app.elements.namedItem('btn-menos-uno').addEventListener('click', function(){
    if(configuaracion.caracteres >1){
    configuaracion.caracteres--;
    inputCaracteres.value = configuaracion.caracteres;
     }
  });

/*
Eventos y funciones
*/

app.elements.namedItem('btn-simbolos').addEventListener('click',function(){
btnToggle(this);
configuaracion.simbolos = !configuaracion.simbolos;
//console.log(configuaracion.simbolos);
});

app.elements.namedItem('btn-numeros').addEventListener('click',function(){
    btnToggle(this);
    configuaracion.numeros = !configuaracion.numeros;
    console.log(configuaracion.numeros);
    });

 app.elements.namedItem('btn-mayusculas').addEventListener('click',function(){
        btnToggle(this);
        configuaracion.mayusculas = !configuaracion.mayusculas;
        console.log(configuaracion.mayusculas);
    });
      
app.elements.namedItem('btn-generar').addEventListener('click', function(){
generarPassword();
});

app.elements.namedItem('input-password').addEventListener('click',function(){
    copiarPassword();
})


function btnToggle(elemento){
    elemento.classList.toggle('false');
    elemento.childNodes[0].classList.toggle('fa-check');
    elemento.childNodes[0].classList.toggle('fa-times');
}

function generarPassword(){
    var caracteresFinales = '';
    var password = '';


    for(propiedad in configuaracion){
        if(configuaracion[propiedad] == true){
            caracteresFinales += caracteres[propiedad] + '';
          

        }
    }
   // console.log(caracteresFinales);

    caracteresFinales = caracteresFinales.trim();
   caracteresFinales = caracteresFinales.split(' ');
   
   for(var i = 0;i < configuaracion.caracteres; i++){
    password = password + caracteresFinales[Math.floor(Math.random()* caracteresFinales.length)];
   }
  
   app.elements.namedItem('input-password').value = password;
}
function copiarPassword(){
    app.elements.namedItem('input-password').select();
    document.execCommand('copy');
    document.getElementById('alerta-copiado').classList.add('active');

    setTimeout(function(){
        document.getElementById('alerta-copiado').classList.remove('active');
    },2000);
}

generarPassword();

}())