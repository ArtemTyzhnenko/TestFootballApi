import React from 'react';
import Row from './RowOfTable/Row'

import PropTypes from 'prop-types';

const Table = ({table}) =>(
  <div>
    <table>
      <tbody>
      {table.map((item) => {
          return <Row item={item}/>
          }
        )
      }
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  table: PropTypes.array.isRequired,
};

export default Table;