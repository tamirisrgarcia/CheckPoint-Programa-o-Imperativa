function calculoTempoPadrao(alimento) {
    let tempoPadrao;

    switch (alimento) {
        case '1': //Pipoca
            tempoPadrao = 10;
            break;
        case '2': // Macarrão
            tempoPadrao = 8;
            break;
        case '3': //Carne
            tempoPadrao = 15;
            break;
        case '4': // Feijão
            tempoPadrao = 12;
            break;
        case '5': //Brigadeiro
            tempoPadrao = 8;
            break;
        default:
            tempoPadrao = 0;
            break;
    }

    return tempoPadrao;
}


function menu(alimento, tempoPreparo) {
    let mensagem = '';
    let tempoPadrao = calculoTempoPadrao(alimento);
    let tempoQueimou = tempoPadrao * 2;
    let tempoKabum = tempoPadrao * 3;

    if (tempoPadrao > 0) {
        if (tempoPreparo > tempoKabum) {
            mensagem += 'kabumm'
        }
        else if (tempoPreparo > tempoQueimou) {
            mensagem += 'Seu alimento queimou!';
        }
        else if (tempoPreparo < tempoPadrao) {
            mensagem += 'Tempo insuficiente';
        }
        else {

            mensagem += 'Prato pronto, bom apetite!!!';
        }
    }
    else {
        mensagem += 'Prato inexistente';
    }

    console.log(mensagem);
}

menu('1', 20);