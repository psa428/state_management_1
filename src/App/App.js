// import { useState } from 'react';
import '../components/App.css';
import { AppLayout } from '../components/AppLayout/appLayout';
import { gameOver } from '../utils/utils';
import { store } from '../store';
import { useEffect } from 'react';
import { useState  } from 'react';
// import { type } from '@testing-library/user-event/dist/type';
// import { type } from '@testing-library/user-event/dist/type';


function App() {
  const [st, setSt] = useState(store.getState());

  useEffect(() => { 
    store.subscribe(() => {
                             setSt(store.getState());
                          }

    )         
}, []);

  //  const { field } = store.getState();
  const { field } = st;

  const newGame = () => {
    /********************************************************
        Подготовка к началу новой игры
    *********************************************************/
      
        store.dispatch({type: 'NEW_GAME'});
  };

  const treatOnClick = (i, j) => {
    /********************************************************
      Функция обработки события выполнения хода игроком
    **********************************************************/
    
    if (field[i][j] !== 'X' && field[i][j] !== '0') {
      //  Поставим крестик или нолик в выбранную клетку, если она свободна
      
       store.dispatch({ type: 'CLICK', payload: {i, j}});

       //  Игра окончена?
       let res = gameOver(field);
       if ( res !== '') {
          // установим признак завершения игры
          // setIsGameEnded(true);
          store.dispatch({type: 'GAME_IS_OVER'});

          // если ничья
          if (res === 'Ничья' )
            store.dispatch({type: 'IS_DRAW'});
      }  
      else {
        //  Сменим текущего игрока
        // setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');  
        store.dispatch({type: 'SET_NEXT_PLAYER' })
      }  
      }
  };   
  
  
  return (
    <div className="App">
      <AppLayout 
         onClickCeil={treatOnClick} 
         onClickBtn = {newGame}
      />
     
    </div>
  );
}

export default App;
