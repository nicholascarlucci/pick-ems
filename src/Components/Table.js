import React from "react";
import { useTable } from "react-table";

function StandingsTable() {
  const data = React.useMemo(
    () => [
      {
        col1: "Team 1",
        col2: 8,
        col3: 2,
      },
      {
        col1: "Team 2",
        col2: 3,
        col3: 7,
      },
      {
        col1: "Team 3",
        col2: 4,
        col3: 4,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Team",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Wins",
        accessor: "col2",
      },
      {
        Header: "Losses",
        accessor: "col3",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{ border: "solid 1px blue", width: "40%", margin: "2em auto" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StandingsTable;
