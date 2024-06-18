export function gameOver (fld){
    /*********************************************************
     *  Игра окончена?
     *  Если да, вернем победителя
     **********************************************************/
      let tmp = new Array(3);
      let tmpFull = [];
      let res = false;
      //  Ничья?
      
      tmpFull = tmpFull.concat(fld[0], fld[1], fld[2]);
      
      if (tmpFull.length > 0) 
        res = tmpFull.every((element) => (element === 'X' || element === '0'));
      
      if (res) {
        // setIsDraw(true);
        return 'Ничья';
      };  

    const players = ['0', 'X'];
    

    for (let player of players){
      //  Ищем победителя по горизонтали
      
      for (let str of fld) {
        let res = str.every((element) => element === player);
        if (res) 
          return player + ' победил по горизонтали'
          
      };
      
      //  Ищем победителя по вертикали

      tmp.splice(0, 2);
      for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++){
          tmp[i] = fld[i][j];
          
        };  
        
        let res = tmp.every((element) => element === player);
        
        if (res)
          return player + ' победил по вертикали'
        tmp.splice(0, 2);

      };

      //  Ищем победителя по диаганали
      
      tmp[0] = fld[0][0];
      tmp[1] = fld[1][1]; 
      tmp[2] = fld[2][2];
      let res = tmp.every((element) => element === player);
      if (res)
        return player + ' победил по диагонали'
      
      tmp[0] = fld[0][2];
      tmp[1] = fld[1][1];
      tmp[2] = fld[2][0];

      res = tmp.every((element) => element === player);
      if (res)
        return player + ' победил по диагонали'

      
    }; 
    return '';
  } ;