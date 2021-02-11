import React, { useEffect, useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import Form from './Form';

const getSize = (level) => {
  switch (level){
    case 'Easy' : return 5;
    case 'Normal' : return 10;
    case 'Hard' : return 15;
  };
}
const getTable = (level) => {
  const size = getSize(level);
  const data = [];
  for (let i = 0; i < size; i++){
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < size; j++){
      rowData.push(CODE.NORMAL);
    }
  }
  console.log(data);
  return data;
}
// ***** 코드명 정의와 초기 컨텍스트 설정 *****
export const CODE = {
  NORMAL: 0,
  MOLE: 1,
  CLOSED: -1,
}

export const TableContext = createContext( {
  tableData: [],
  halted: true,
  dispatch: () => {},
})
// ***** 이벤트 이름 정의 *****
export const START_GAME = 'START_GAME';
export const RANDOM_CHANGE = 'RANDOM_CHANGE';
export const CLOSE_CELL = 'CLOSE_CELL';

// ***** 리듀서로 이벤트 처리 *****
const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME :
      return {
        ...state,
        tableData: getTable(action.level),
        halted: false,
        timer:0,
      }
    case RANDOM_CHANGE :{
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell]=== CODE.NORMAL){
        tableData[action.row][action.cell] = CODE.MOLE
      } else if (tableData[action.row][action.cell]=== CODE.MOLE){
        tableData[action.row][action.cell] = CODE.NORMAL;
      }
      return {
        ...state,
        tableData,
      }
    }
    case CLOSE_CELL :{
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLOSED;
      return {
        ...state,
        tableData,
      }
    }
      
    default:
      return state;
  }
}
// ***** 초기 상태 설정 *****
const initialState = {
  tableData: [],
  level: 'Easy',
  timer: 0,
  result: '',
  halted: true,
  catchCount:0,
}
// ***** 컴포넌트 정의 *****
const CatchMole = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, level, timer, result, halted, catchCount } = state;
  const value = useMemo(() => (
    {tableData, halted, dispatch }
  ), [tableData])

// ***** 렌더링 작업 *****
  return (
    <TableContext.Provider value={value}>
      <Form />
      <Table />
    </TableContext.Provider>
  );
};

export default CatchMole;