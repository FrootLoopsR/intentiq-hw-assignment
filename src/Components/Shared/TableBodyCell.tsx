import React from "react";
import TableCell from "@mui/material/TableCell";
import {convertToDDMMYYYY, isDateStringValid} from "../../utils/utils";

interface TableBodyCellProps {
    value: string | number;
}

const TableBodyCell: React.FC<TableBodyCellProps> = ({value}) => {

    const formattedValue =
        isDateStringValid(value as string) ? convertToDDMMYYYY(value as string) : value;

    return <TableCell>{formattedValue}</TableCell>;
};

export default TableBodyCell;
