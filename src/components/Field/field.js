import { FieldLayout } from "./fieldLayout";
import PropTypes from 'prop-types';
import '../App.css';


export function Field({arr, onClickCl }) {
    
    return (
        <div className="table-box">
            
                <FieldLayout arry={arr} onClickCl={onClickCl}/> 
            
        </div>
    );
}

Field.propTypes = {
    arr:  PropTypes.array,
    onClickCl:    PropTypes.func
}
