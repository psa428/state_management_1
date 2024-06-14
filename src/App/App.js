import { useState } from 'react';
import '../components/App.css';
import { AppLayout } from '../components/AppLayout/appLayout';
import { gameOver } from '../utils/utils';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const startField = [
                        ['', '', ''],
                        ['', '', ''],
                        ['', '', '']
                     ];
  const [field, setField] = useState(startField);

  const newGame = () => {
    /********************************************************
        Подготовка к началу новой игры
    *********************************************************/
      //  Очистим игровое поле
        setField(startField);

      //  Зададим начальные значения переменных
        setIsGameEnded(false);
        setIsDraw(false);
        setCurrentPlayer('X');
  };

  const treatOnClick = (i, j) => {
    /********************************************************
      Функция обработки события выполнения хода игроком
    **********************************************************/
    
    if (field[i][j] !== 'X' && field[i][j] !== '0') {
      //  Поставим крестик или нолик в выбранную клетку, если она свободна
      let tmpField = [...field];
      tmpField[i][j] = currentPlayer;
      setField(tmpField);

      

      //  Игра окончена?
      if (gameOver(field, setIsDraw) !== '')
        // установим признак завершения игры
        setIsGameEnded(true);
      else
        //  Сменим текущего игрока
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');  
    }
  };   
  
  
  return (
    <div className="App">
      <AppLayout 
        player={currentPlayer} 
        gameState={isGameEnded} 
        draw={isDraw} 
        fld={field} 
        onClickCeil={treatOnClick} 
        onClickBtn = {newGame}
      />
     
    </div>
  );
}

export default App;
