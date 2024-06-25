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
    
    
    //  Формирование нового state
  
    switch (type) {
      case 'CLICK': {
        
        let tmp = [];
        Object.assign(tmp, state.field);
        tmp[payload.i][payload.j] = state.currentPlayer;
        return {
            ...state,
            field: tmp
       
        };
      }
      case 'SET_NEXT_PLAYER': {
        
        return {
          ...state,
          currentPlayer: currentPlayer === 'X' ? '0' : 'X',
        };
      }
      case 'GAME_IS_OVER': {
        
        return {
            ...state,
            isGameEnded:    true
        }
      }
      case 'IS_DRAW': {
        
        return {
            ...state,
            isDraw: true

        }
        
      }
      case 'NEW_GAME': {
        
        return {
          ...state,
            "field":    [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],
            "isGameEnded":  false,
            "isDraw":   false,
            "currentPlayer":    'X' 
                }
      }
      default:
        return state;
    }
  };