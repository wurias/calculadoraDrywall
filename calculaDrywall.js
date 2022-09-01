//VARIAVEIS 
var largura = document.querySelector('#largura');
var altura = document.querySelector('#altura');
var resposta = document.querySelector('#resposta');
var quadradoTotal, cantoTotal, f530Total, stTotal;


//FUNCAO CALCULA METRO-QUADRADO
function metroQuadrado (larg, alt){
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);   

    var metroQuadrado = larg * alt;
    quadradoTotal = "Total: " + metroQuadrado.toFixed(2) + "m² \n";
}
//FUNCAO CALCULA CANTONEIRA
function cantoneira (larg, alt){
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var calculando = 2 * (larg + alt) / 3;
    var cantoneiraTotal = Math.ceil(calculando);
    cantoTotal = "Cantoneira: " + cantoneiraTotal + " und. \n";    
}
//FUNCAO CALCULA PERFIL F530
function perfilF530 (larg, alt){
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);    

    if (larg >= alt){
        var perfilF530 = larg / 0.60;
        var restoPerfil = alt - 3;
        var parcialPerfil = (perfilF530 * restoPerfil) /3;
        f530Total = "Perfil F530: " + Math.ceil(parcialPerfil + perfilF530) + " und. \n";
        

    } else {

        var perfilF530 = alt / 0.60;
        var restoPerfil = larg - 3;
        var parcialPerfil = (perfilF530 * restoPerfil) / 3;
        f530Total = "Perfil F530: " + Math.ceil(parcialPerfil + perfilF530) + " und. \n";        
    }
}
//FUNCAO CALCULA PLACA ST TAMANDO PADRAO 180 X 120 ARREDONDANDO PARA MAIS
function placaST (larg, alt){
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var metroQuadrado = (larg * alt);
    var placaST = metroQuadrado + (5 * metroQuadrado) / 100;
    stTotal = "PlacaST: " + Math.ceil(placaST / 2.16) + " und. \n";

}

function listaGeral(){
    metroQuadrado();
    cantoneira();
    perfilF530();
    placaST();
    resposta.value = quadradoTotal + cantoTotal + f530Total + stTotal;
}