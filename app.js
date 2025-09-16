// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];

function agregarAmigo(){

    var dato = document.getElementById("amigo");

    if(dato.value == ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(dato.value);
        listarAmigos();
    };

    //Limpiar Input
    dato.value = "";

};


function listarAmigos(){

    //Limpiamos 2da Lista por si se reinicio el juego.
    let listaUN = document.getElementById("resultado");
    listaUN.innerHTML = "";

    //trabajamos con la lista de nombres.
    let listaU = document.getElementById("listaAmigos");
    listaU.innerHTML="";

    for(i = 0; i < amigos.length ; i++){
        let nuevaLi = document.createElement('li');
        nuevaLi.textContent = amigos[i];
        listaU.appendChild(nuevaLi);
    };

};

function sortearAmigo(){

    if(amigos.length == 0 ){

        alert("Por favor, añade al menos dos amigos para sortear");

    }else{

        //Limpiar 1ra Lista
        let listaV = document.getElementById("listaAmigos");
        listaV.innerHTML = "";

        //Generar valor aleatorio para sortear
        let valorSorteo = Math.floor(Math.random()*amigos.length);
        
        let listaUN = document.getElementById("resultado");
        listaUN.innerHTML = "";
        let nuevaLi = document.createElement('li');
        nuevaLi.textContent = "El ganador es: " + amigos[valorSorteo];
        listaUN.appendChild(nuevaLi);
        //Limpiamos el array para reiniciar el juego. 
        amigos.length = 0;
    };
};
