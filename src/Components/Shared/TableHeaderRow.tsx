import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SortIcon from "@mui/icons-material/Sort";
import {SortConfig} from "../../types/globalTypes";


interface TableHeaderRowProps {
    columns: { key: string; title: string }[];
    sortConfig: SortConfig;
    onSort: (column: string) => void;
}

const TableHeaderRow: React.FC<TableHeaderRowProps> = ({
                                                           columns,
                                                           sortConfig,
                                                           onSort,
                                                       }) => {
    const handleClick = (column: string) => {
        onSort(column);
    };

    const getSortingIcon = (column: string) => {
        if (sortConfig.column === column) {
            return sortConfig.direction === "asc" ? (
                <ArrowDropUpIcon style={{verticalAlign: "middle"}}/>
            ) : (
                <ArrowDropDownIcon style={{verticalAlign: "middle"}}/>
            );
        } else {
            return <SortIcon style={{verticalAlign: "middle"}}/>;
        }
    };

    return (
        <TableRow>
            {columns.map((col) => (
                <TableCell
                    style={{backgroundColor: col.title ? "royalblue" : "inherit", color: 'white'}}
                    key={col.key}
                    onClick={() => handleClick(col.key)}
                >
                    {col.title} {col.title ? getSortingIcon(col.key) : null}
                </TableCell>
            ))}
        </TableRow>
    );
};

export default TableHeaderRow;
