import { InformationLayout } from "./informationLayout";
import PropTypes from 'prop-types';
export function Information({plr, gameSt, drw}) {
     
    
    let message;
    if (drw)
            message = 'Ничья';
    else if (gameSt) 
        message = 'Победа ' + plr;   
        
    else
        message = "Играет " + plr;

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