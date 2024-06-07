import { useState } from "react";

function Velha () {

    //-------------DECLARAÇÕES DE VARIAVEIS-------------------------------------
    const [jogadas, setJogadas] = useState ([
        '','','',
        '','','',
        '','','', ]);

    return (
        <>
        <h3>JOGO DA VELHA</h3>
        <div id="game">
            {
                jogadas.map((item, index) => (
                    <button 
                    class="buttonGame"
                    onclick="clickDoJogador(${i})"
                    >{item}</button>
                ))
            }
        </div>
        <h3>Vez do jogador -- X</h3>
        </>
        
    )
    
}
export default Velha;