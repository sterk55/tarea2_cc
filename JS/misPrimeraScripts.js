function encenderApagar(){

    var valorDisplayApagado = document.getElementById('idFocoApagado').style.display;
    var valorDisplayEncendido = document.getElementById('idFocoEncendido').style.display;

    if (valorDisplayApagado == 'block') {
        valorDisplayApagado = 'none';
        valorDisplayEncendido = 'block';
    } else {
        valorDisplayApagado = 'block';
        valorDisplayEncendido = 'none';
        
    }

    document.getElementById('idFocoApagado').style.display = valorDisplayApagado;
    document.getElementById('idFocoEncendido').style.display = valorDisplayEncendido; 

}