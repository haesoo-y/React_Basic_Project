import React, { useContext, useEffect, useCallback, useMemo } from 'react';
import { TableContext, CODE, RANDOM_CHANGE, CLOSE_CELL} from './CatchMole';

const getTdClass = (code) => {
  switch(code) {
    case CODE.NORMAL:
      return 'normal';
    case CODE.MOLE:
      return 'mole';
    case CODE.CLOSED:
      return 'closed';
    default:
      return
  }
}

// ***** 컴포넌트 *****
const Td = ({rowIndex, cellIndex}) => {
  // const [code, setCode] = useState(CODE.NORMAL);
  // const timeOut = useRef();
  const { tableData, dispatch } = useContext(TableContext);

  // ***** 랜덤하게 두더지 생성 *****  
  useEffect( () => {
    let timeOut;
    if (tableData[rowIndex][cellIndex] === CODE.NORMAL){
      timeOut =  setTimeout( ()=> {
        dispatch({ type: RANDOM_CHANGE, row: rowIndex, cell: cellIndex})
      }, Math.random()*10000 + 2000);
       
    } else if (tableData[rowIndex][cellIndex] === CODE.MOLE){
      timeOut =  setTimeout( ()=> {
        dispatch({ type: RANDOM_CHANGE, row: rowIndex, cell: cellIndex})
      }, Math.random()*1000+300);
    } else {
      return;
    }
    return () => {
      clearTimeout(timeOut)
    }
  },[tableData[rowIndex][cellIndex]])

  // ***** 클릭 이벤트 *****
  const onClickTd = useCallback( (e) => {
    e.preventDefault();
    switch (tableData[rowIndex][cellIndex]){
      case CODE.MOLE :
        dispatch({ type: CLOSE_CELL, row: rowIndex, cell: cellIndex});
        return;
      case CODE.NORMAL:
      case CODE.CLOSED:
      default:
        return;
    }
  })

// ***** 랜더링 *****
  return useMemo(()=>(
    <td className={getTdClass(tableData[rowIndex][cellIndex])} onClick={onClickTd}></td>
    
  ),[tableData[rowIndex][cellIndex]]);
};

export default Td;