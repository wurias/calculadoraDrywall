var largura = document.querySelector('#largura');
var altura = document.querySelector('#altura');


function escreva (texto){
    document.write(texto);
}

function calculadora (larg, alt) {

    var larg = parseFloat(largura.value);
    var alt = parseFloat(altura.value);

    //METRO QUADRADO
    var metroQuadrado = larg * alt;
    escreva ('Largura: [' + larg.toFixed(2) + '] Comprimento: [' + alt.toFixed(2) + ']')
    escreva ('<br>Total: ' + metroQuadrado.toFixed(2) + 'm²');

    //QUANTIDADE CANTONEIRA
    var cantoneira = 2 * (larg + alt) / 3;
    escreva ('<br>Cantoneira: ' + Math.ceil(cantoneira));

    //PERFIL F530
    if (larg >= alt){

        var perfilF530 = larg / 0.60;
        var restoPerfil = alt - 3;
        var parcialPerfil = (perfilF530 * restoPerfil) /3;
        var totalPerfil = parcialPerfil + perfilF530;
        escreva ('<br>Perfil-F530: ' + Math.ceil(totalPerfil));

        } else {
                
        var perfilF530 = alt / 0.60;
        var restoPerfil = larg - 3;
        var parcialPerfil = (perfilF530 * restoPerfil) / 3;
        var totalPerfil = parcialPerfil + perfilF530;
        escreva ('<br>Perfil-F530: ' + Math.ceil(totalPerfil));
                
        }

    //PLACAS, COM TAMANHO PADRAO 180 X 120, ARREDONDADO PARA MAIS
    var placaST = metroQuadrado + (5 * metroQuadrado) / 100;
    var placaTotal = placaST / 2.16;
    escreva ('<br>PlacaST: ' + Math.ceil(placaTotal));

}

