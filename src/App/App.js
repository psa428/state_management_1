// import { useState } from 'react';
import '../components/App.css';
import { AppLayout } from '../components/AppLayout/appLayout';
import { gameOver } from '../utils/utils';
import { store } from '../store';
import { type } from '@testing-library/user-event/dist/type';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  // const [currentPlayer, setCurrentPlayer] = useState('X');
  // const [isGameEnded, setIsGameEnded] = useState(false);
  // const [isDraw, setIsDraw] = useState(false);
  // const startField = [
  //                       ['', '', ''],
  //                       ['', '', ''],
  //                       ['', '', '']
  //                    ];
  // const [field, setField] = useState(startField);

  const { field, isGameEnded, isDraw, currentPlayer} = store.getState();

  const newGame = () => {
    /********************************************************
        Подготовка к началу новой игры
    *********************************************************/
      //  Очистим игровое поле
        // setField(startField);

      //  Зададим начальные значения переменных
        // setIsGameEnded(false);
        // setIsDraw(false);
        // setCurrentPlayer('X');
        store.dispatch({type: 'NEW_GAME'});
  };

  const treatOnClick = (i, j) => {
    /********************************************************
      Функция обработки события выполнения хода игроком
    **********************************************************/
    
    if (field[i][j] !== 'X' && field[i][j] !== '0') {
      //  Поставим крестик или нолик в выбранную клетку, если она свободна
      // let tmpField = [...field];
      // tmpField[i][j] = currentPlayer;
      // setField(tmpField);

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
        // player={currentPlayer} 
        // gameState={isGameEnded} 
        // draw={isDraw} 
        // fld={field} 
         onClickCeil={treatOnClick} 
         onClickBtn = {newGame}
      />
     
    </div>
  );
}

export default App;
