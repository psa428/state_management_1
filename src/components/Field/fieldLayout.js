import '../App.css';
import PropTypes from 'prop-types';
import { store } from '../../store';
import { useState } from 'react';
import { useEffect } from 'react';


export function FieldLayout({onClickCl})  {
    const [st, setSt] = useState(store.getState());

    // const { field } = store.getState();
     useEffect(() => { store.subscribe(() => {
        setSt(store.getState());
        }   
        )           
    }, []);

     
    return (
        <table>
            {   
                st.field.map((row, i) => (
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