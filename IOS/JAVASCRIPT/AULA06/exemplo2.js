// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.)
// e exibe uma mensagem informando qual é o dia atual. Se o número informado não corresponder a um dia válido (1 a 7), 
// uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.


let diadasemana = 4


switch (diadasemana) {
    case 1:
        console.log('Olá hoje,vamos aproveitar a segunda-feira');
        break;

        case 2:
            console.log('Olá hoje,vamos aproveitar a terça-feira');
            break;

            case 3:
                console.log('Olá hoje,vamos aproveitar a quarta-feira');
                break;

                case 4:
                    console.log('Olá hoje,vamos aproveitar a quinta-feira');
                    break;

                    case 5:
                        console.log('Olá hoje,vamos aproveitar a sexta-feira');
                        break;

                        case 6:
                            console.log('Olá hoje,vamos aproveitar a sabado');
                            break;

                            case 7:
                                console.log('Olá hoje,vamos aproveitar a domingo');
                                break;
                        
    default:
        console.log('erro');
        break;
}