import React from 'react';
import './table.styles.sass';

function Table(props) {
  const columns = props.columns;
  const data = props.data;

  const header = (
    <tr id='header'>
      {columns.map((column) =>
        <th key={column.dataPath}>
          {column.label}
        </th>
      )}
    </tr>
  );
  const dataItem = data.map((item) =>
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.comment}</td>
    </tr>
  );

  return (
    <table>
      <tbody>
        {header}
        {dataItem}
      </tbody>
    </table>
  );
}


export default Table;