import React, { useContext } from 'react';
import { TableContext } from './CatchMole';
import Td from './Td'

const Tr = ({rowIndex}) => {
  const { tableData } = useContext(TableContext);


  return (
    <>
      <tr>
        { tableData[0] && tableData[rowIndex].map( (td, i) => <Td key={'cell'+ i} rowIndex={rowIndex} cellIndex={i}/>)}
      </tr>
    </>
  );
};

export default Tr;