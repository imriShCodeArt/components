import React from "react";

import TableRow from "@mui/material/TableRow";
import Cell from "@mui/material/TableCell";

function Row({ cells }) {
  return (
    <TableRow>
      {cells && cells.map((h, i) => (
        <Cell key={i}>{h}</Cell>
      ))}
    </TableRow>
  );
}

export default Row;
