import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "projectNo", label: "案件No", minWidth: 170 },
  { id: "name", label: "国名", minWidth: 100 },
  {
    id: "client",
    label: "顧客",
    minWidth: 170
    //align: "right",
    //format: (value) => value.toLocaleString("en-US")
  },

  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170
    //align: "right",
    //format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2)
  }
];

function createData(projectNo, name, client, size) {
  const density = client / size;
  return { projectNo, name, client, size, density };
}

const rows = [
  createData("1001", 1324171354, "JP", 3287263),
  createData("China", 1403500365, "CN", 9596961),
  createData("Italy", 60483973, "IT", 301340),
  createData("United States", 327167434, "US", 9833520),
  createData("Canada", 37602103, "CA", 9984670),
  createData("Australia", 25475400, "AU", 7692024),
  createData("Germany", 83019200, "DE", 357578),
  createData("Ireland", 4857000, "IE", 70273),
  createData("Mexico", 126577691, "MX", 1972550),
  createData("Japan", 126317000, "JP", 377973),
  createData("France", 67022000, "FR", 640679),
  createData("United Kingdom", 67545757, "GB", 242495),
  createData("Russia", 146793744, "RU", 17098246),
  createData("Nigeria", 200962417, "NG", 923768),
  createData("Brazil", 210147125, "BR", 8515767)
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
