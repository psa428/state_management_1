import PropTypes from 'prop-types';
import { Information } from '../Information/information';
import { Field } from '../Field/field';



export function AppLayout({player, gameState, draw, fld, onClickCeil, onClickBtn}) {
    
    return (
        <>
        <Information plr={player} gameSt={gameState} drw={draw}/> 
        <Field arr={fld} onClickCl={onClickCeil}/> 
         <button className="btn" onClick={onClickBtn} >Новая игра</button> 
        </>
    );  
};

AppLayout.propTypes = {
    player:     PropTypes.string,
    gameState:  PropTypes.bool, 
    draw:       PropTypes.func,
    fld:        PropTypes.array,
    onClickCeil:    PropTypes.func,
    onClicklBtn:    PropTypes.func
}