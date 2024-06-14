import '../App.css';
import PropTypes from 'prop-types';

export function FieldLayout({arry, onClickCl})  {
     
    return (
        <table>
            {
                arry.map((row, i) => (
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