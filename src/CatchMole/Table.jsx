import React, { useContext } from 'react';
import { TableContext } from './CatchMole';
import Tr from './Tr'


const Table = () => {
  const { tableData } = useContext(TableContext);


  return (
    <>
      <table>
        {tableData.map( (tr,i) => <Tr key={'row'+ i} rowIndex = {i} />)}
      </table>
    </>
  );
};

export default Table;