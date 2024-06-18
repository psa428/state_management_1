import { FieldLayout } from "./fieldLayout";
import PropTypes from 'prop-types';
import '../App.css';


export function Field({onClickCl }) {
    
    return (
        <div className="table-box">
            
                <FieldLayout  onClickCl={onClickCl}/> 
            
        </div>
    );
}

Field.propTypes = {
    arr:  PropTypes.array,
    onClickCl:    PropTypes.func
}
