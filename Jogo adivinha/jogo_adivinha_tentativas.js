 //Tente adivinhar o número que a máquina está pensando
    
    function mostra(frase){
        document.write(frase+"<br>");
    }
    function sortear(n){
        numero=Math.round(Math.random()*n);
        return numero;
    }
    alert("Olá, humano. Consegue adivinhar o número que irei pensar?");
    var numero=prompt("O número sorteado vai estar entre 0 e:");
    var tentativas=prompt("Quantas tentativas você vai querer?");
        if(isNaN(tentativas) || isNaN(numero)){
            mostra("Você não digitou um número! Aperte F5 para tentar novamente.");
        } else{
        var numeropensado=sortear(numero);
        var numeroDaTentativa=1;
            while(numeroDaTentativa<=tentativas){
                var chute=prompt("Qual foi o número que eu pensei?");
                if (chute==numeropensado){
                mostra("UAU!! Eu realmente pensei no número "+numeropensado);
                break;
                } else {
                    if (chute<numeropensado){
                    alert("Eu pensei em um número maior que esse.");
                    numeroDaTentativa++;
                    } else {
                        alert("Eu pensei em um número menor que esse.");
                        numeroDaTentativa++;
                        }   
                }
            }
            if(chute!=numeropensado){
                mostra("Você não conseguiu adivinhar. Aperte F5 para tentar novamente.");
            }
        }