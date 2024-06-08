import { useState } from "react";
import './index.css'

function Velha () {

    //-------------DECLARAÇÕES DE VARIAVEIS-------------------------------------
    const [jogadas, setJogadas] = useState ([
        '','','',
        '','','',
        '','','', ]);

    const [gameover, setGameover] = useState (false);
    const [vez, setVez] = useState ('X');

 /*   //-------------DECLARAÇÕES DA FUNCAO QUE VERIFICA SE A CELULA ESTA VAZIA------
    function verificaCelulas(c1, c2, c3) {
        return (
                jogadas [c1] != '' &&
                jogadas [c2] != '' &&
                jogadas [c3] != '' &&
                jogadas [c1] == jogadas[c2] &&
                jogadas [c2] == jogadas[c3]
        );
    }
    //-------------DECLARAÇÕES DA FUNCAO QUEM FOI O VENCEDOR SE AS CELULAS CONTEM O MESMO CARACTER----
    function verificaVencedor() {
       if(
        verificaCelulas(0,1,2) ||
        verificaCelulas(3,4,5) ||
        verificaCelulas(6,7,8) ||

        verificaCelulas(0,3,6) ||
        verificaCelulas(1,4,7) ||
        verificaCelulas(2,5,8) ||

        verificaCelulas(0,3,6) ||
        verificaCelulas(0,4,8) ||
        verificaCelulas(2,4,6)
       ) {
       gameover = true;
       alert('FIM DE JOGO - VENCEDOR JOGADOR >> '+vez);
       label.innerHTML= "<h3>JOGADOR >> +vez ganhou</h3>";
       }
       else if (turnos==10) {                   //VERIFICA SE FEZ TODAS AS VERIFICAÇÕES E CHEGOU NO FIM DOS TURNOS
                gameover=true;
                alert('FIM DE JOGO - DEU VELHA');
        }
    }
*/
    //-------------DECLARAÇÕES DA FUNCAO QUANDO O JOGADOR CLICAR EM UMA CELULA------
    function clickDoJogador(index) {    

        if(gameover==false) {
    
            if(jogadas[index]=='') {
            
                if(vez == 'X') {
                let novasJogadas = [...jogadas]
                novasJogadas[index] = vez;
                setJogadas(novasJogadas)
              //  verificaVencedor();
                setVez('O')
            }
    
            else {
                let novasJogadas = [...jogadas]
                novasJogadas[index] = vez;
                setJogadas(novasJogadas)
             //   verificaVencedor();
                setVez('X')
            }
        }
    }
    
      }

    return (
        <>
        <h3>JOGO DA VELHA</h3>
        <div id="game">
            {
                jogadas.map((item, i) => (
                    <button 
                    className="buttonGame"
                    onclick= {()=>{clickDoJogador(i)}}
                    >{item}</button>
                ))
            }
        </div>
        <h3>Vez do jogador -- {vez}</h3>
        </>
        
    )
    
}
export default Velha;