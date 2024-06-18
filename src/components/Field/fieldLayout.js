import '../App.css';
import PropTypes from 'prop-types';
import { store } from '../../store';

export function FieldLayout({arry, onClickCl})  {

    const { field } = store.getState();
     
    return (
        <table>
            {
                field.map((row, i) => (
                    <tr className='table-row' key={i} id_row={i}>
                        {
                            row.map((ceil, j) => (
                                <td className='table-ceil' key={j} id_col={j} 
                                     onClick={() => onClickCl(i, j)}
                                    >{ceil}</td>
                                  
                            ))
                        }
                    </tr>
                ))
            }
        </table>                       
    );
};

FieldLayout.propTypes = {
    arry:    PropTypes.array,
    onClickCl:  PropTypes.func
}