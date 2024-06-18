import { InformationLayout } from "./informationLayout";
import PropTypes from 'prop-types';
import { store } from "../../store";


export function Information() {

    const { isDraw, isGameEnded, currentPlayer } = store.getState();
     
    
    let message;
    if (isDraw)
            message = 'Ничья';
    else if (isGameEnded) 
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