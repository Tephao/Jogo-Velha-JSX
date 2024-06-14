import { useEffect, useState } from "react";
import './index.css'

function Velha () {

    //-------------DECLARAÇÕES DE VARIAVEIS-------------------------------------
    const [jogadas, setJogadas] = useState ([
        '','','',
        '','','',
        '','','', ]);

    const [gameover, setGameover] = useState (false);
    const [vez, setVez] = useState ('X');
    const [status, setStatus] = useState('Vez do Jogador X');

    useEffect(()=>{
        verificaVencedor();
    },[jogadas])

    //-------------DECLARAÇÕES DA FUNCAO QUE VERIFICA SE A CELULA ESTA VAZIA------
    function verificaCelulas(c1, c2, c3) {
        const ganhou = (
                jogadas [c1] != '' &&
                jogadas [c2] != '' &&
                jogadas [c3] != '' &&
                jogadas [c1] == jogadas[c2] &&
                jogadas [c2] == jogadas[c3]
        );

        if (ganhou) {
            setStatus(`Jogador ${jogadas[c1]} Ganhou !!`)
        }

        return ganhou;
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
            setGameover(true);
       }

else{
       const totalDeJogadas = jogadas.filter(x => x != '').length
 
      if (totalDeJogadas==9) {                   //VERIFICA SE FEZ TODAS AS VERIFICAÇÕES E CHEGOU NO FIM DOS TURNOS
        setStatus('DEU VELHA !!!')       
        setGameover(true)
        }
    }
    }

    //-------------DECLARAÇÕES DA FUNCAO QUANDO O JOGADOR CLICAR EM UMA CELULA------
    function clickDoJogador(index) {    

        if(gameover==false) {
    
            if(jogadas[index]=='') {
            
                if(vez == 'X') {
                    let novasJogadas = [...jogadas]
                    novasJogadas[index] = vez;
                    setJogadas(novasJogadas)          
                    setVez('O')
                    setStatus('Vez do jogador O')
            }
    
            else {
                let novasJogadas = [...jogadas]
                novasJogadas[index] = vez;
                setJogadas(novasJogadas)
                setVez('X')
                setStatus('Vez do jogador X')
            }
        }
    }
    
      }

    return (
        <>
        <h2>JOGO DA VELHA</h2>
        <h3 id="status">{status}</h3>
        <div id="game">
            {
                jogadas.map((item, i) => (
                    <button 
                    className="buttonGame"
                    onClick= {()=>{clickDoJogador(i)}}
                    >{item}</button>
                ))
            }
        </div>

        <button id="restartButton" onClick= {() =>{window.location.reload(true)}}>Reiniciar Jogo</button>

        </>
        
    )
    
}
export default Velha;