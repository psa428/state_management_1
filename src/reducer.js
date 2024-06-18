//  Нчальное состояние
export const initialState = {
    "field":    [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],
    "isGameEnded":  false,
    "isDraw":   false,
    "currentPlayer":    'X'
}; 

export const reducer = (state = initialState, action) => {

       
      const { type, payload } = action;

    const { field, isGameEnded, isDraw, currentPlayer } = state;
    console.log(`field = ${field} currentPlayer = ${currentPlayer}`);
    
    //  Формирование нового state
  
    switch (type) {
      case 'CLICK': {
        console.log('в reducer CLICK');
        console.log(`i = ${payload.i} j = ${payload.j}`);
        return {

            ...state,
            ...field[payload.i][payload.j] = currentPlayer
        };
      }
      case 'SET_NEXT_PLAYER': {
        console.log('SET_NEXT_PLAYER');
        return {
          ...state,
          currentPlayer: currentPlayer === 'X' ? '0' : 'X',
        };
      }
      case 'GAME_IS_OVER': {
        console.log('Game is Ower');
        return {
            ...state,
            isGameEnded:    true
        }
      }
      case 'IS_DRAW': {
        console.log('IS_DRAW');
        return {
            ...state,
            isDraw: true

        }
        
      }
      case 'NEW_GAME': {
        console.log('NEW_GAME');
        return {
            initialState
        }
      }
      default:
        return state;
    }
  };