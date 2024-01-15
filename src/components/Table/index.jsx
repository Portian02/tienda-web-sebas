import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { productsData } from "../../API/Users";

export default function BasicTable() {
  const param = useParams();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">weight(g)</TableCell>
            <TableCell align="left">height</TableCell>
            <TableCell align="left">currency</TableCell>
            <TableCell align="left">value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={productsData.items[param.id].character}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope={productsData.items[param.id]}>
              {productsData.items[param.id].character}
            </TableCell>
            <TableCell align="left">
              {productsData.items[param.id].weight}
            </TableCell>
            <TableCell align="left">
              {productsData.items[param.id].height}
            </TableCell>
            <TableCell align="left">
              {productsData.items[param.id].currency}
            </TableCell>
            <TableCell align="left">
              {productsData.items[param.id].value}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
