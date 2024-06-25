import { InformationLayout } from "./informationLayout";
import PropTypes from 'prop-types';
import { store } from "../../store";
import { useState, useEffect } from "react";


export function Information() {

    const { isDraw, isGameEnded, currentPlayer } = store.getState();

    const [st, setSt] = useState(store.getState());

    useEffect(() => { 
        store.subscribe(() => {
                                setSt(store.getState());
                              }
        )         
    }, []);

    // setSt(store.getState()) ;
    
    
    let message;
    if (st.isDraw)
            message = 'Ничья';
    else if (st.isGameEnded) 
        message = 'Победа ' + currentPlayer;   
        
    else
        message = "Играет " + currentPlayer;

    return (
        <div className="information" >
            <InformationLayout msg={message} />

        </div>
    )
};

Information.propTypes = {
    player:     PropTypes.string,
    gameState:  PropTypes.bool,
    draw:       PropTypes.bool
}