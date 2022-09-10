//VARIAVEIS 
var largura = document.querySelector('#largura');
var altura = document.querySelector('#altura');
var resposta = document.querySelector('#resposta');

var quadradoTotal, cantoTotal, f530, f530Total, stTotal, parafuso25Total, massaPronta, massaPo, fita, uniaoF530;


//FUNCAO CALCULA METRO-QUADRADO

function metroQuadrado(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var metroQuadrado = larg * alt;
    quadradoTotal = "Total: " + metroQuadrado.toFixed(2) + "m² \n";
}

//FUNCAO CALCULA CANTONEIRA

function cantoneira(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var calculando = 2 * (larg + alt) / 3;
    var cantoneiraTotal = Math.ceil(calculando);
    cantoTotal = "Cantoneira: " + cantoneiraTotal + " und. \n";
}

//FUNCAO CALCULA PERFIL F530

function perfilF530(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    if (larg >= alt) {
        var perfilF530 = larg / 0.60;
        var restoPerfil = alt - 3;
        var parcialPerfil = (perfilF530 * restoPerfil) / 3;
        f530 = Math.ceil(parcialPerfil + perfilF530);
        f530Total = "Perfil F530: " + Math.ceil(parcialPerfil + perfilF530) + " und. \n";


    } else {

        var perfilF530 = alt / 0.60;
        var restoPerfil = larg - 3;
        var parcialPerfil = (perfilF530 * restoPerfil) / 3;
        f530 = Math.ceil(parcialPerfil + perfilF530);
        f530Total = "Perfil F530: " + Math.ceil(parcialPerfil + perfilF530) + " und. \n";
    }
}

//FUNCAO CALCULA PLACA ST TAMANDO PADRAO 180 X 120 ARREDONDANDO PARA MAIS

function placaST(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var metroQuadrado = (larg * alt);
    var placaST = metroQuadrado + (5 * metroQuadrado) / 100;
    stTotal = "PlacaST: " + Math.ceil(placaST / 2.16) + " und. \n";

}

//CALCULA parafuso TA-25

function parafusoTa25(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var quadrado = alt * larg;
    var parafuso = (quadrado + ((5 * quadrado) / 100)) * 12;
    parafuso25Total = "Parafuso-St25: " + Math.ceil(parafuso) + " und. \n";

}

//CALCULA MASSA PARA TRATAMENTO DE JUNTA 

function massaPr(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var quadrado = larg * alt;
    var massaTotal = (quadrado + (5 * quadrado) / 100);
    massaPronta = "Massa Pronta: " + Math.ceil((massaTotal * 0.5)) + " Kg \n";
}

function massaEmPo(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var quadrado = larg * alt;
    var massaTotal = (quadrado + (5 * quadrado) / 100);
    massaPo = "Massa em Pó: " + Math.ceil((massaTotal * 0.35)) + " Kg \n";
}

function fitaJt(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    var quadrado = larg * alt;
    var fitaTotal = (quadrado + (5 * quadrado) / 100);
    fita = "Fita JT: " + Math.ceil(fitaTotal * 1.5) + " Metros \n";
}

function uniaoPerfil(larg, alt) {
    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    if ((larg > alt) && (alt > 3)) {
        var perfil = larg / 0.60;
        uniaoF530 = "Uniao F530: " + Math.ceil(perfil) + " und. \n"
    } else if ((alt > larg) && (larg > 3)) {
        var perfil = alt / 0.60;
        uniaoF530 = "Uniao F530: " + Math.ceil(perfil) + " und. \n"
    }
}

function listaGeral() {
    metroQuadrado();
    cantoneira();
    perfilF530();
    placaST();
    parafusoTa25();
    massaPr();
    massaEmPo();
    fitaJt();

    resposta.value = quadradoTotal + cantoTotal + f530Total + stTotal + parafuso25Total + massaPronta + massaPo + fita;
}