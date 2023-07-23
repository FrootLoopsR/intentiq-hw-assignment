import React, {useState} from "react";
import TableRow from "@mui/material/TableRow";
import TableBodyCell from "./TableBodyCell";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

interface TableSortedRowProps {
    row: any;
    columns: string[];
    toggleDrawer: () => void;
}

const TableRowHoverButton: React.FC<TableSortedRowProps> = ({
                                                                row,
                                                                columns,
                                                                toggleDrawer,
                                                            }) => {
    const [isHovered, setIsHovered] = useState(false);
    const rowStyle = {
        backgroundColor: isHovered ? "lightsteelblue" : "inherit",
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCreateCustomerClick = () => {
        toggleDrawer();
    };

    return (
        <>
            <TableRow
                style={rowStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {columns.map((column) => (
                    <TableBodyCell key={column} value={row[column]}/>
                ))}
                <TableCell style={{width: "15rem"}}>
                    {isHovered && (
                        <Button
                            variant="contained"
                            style={{backgroundColor: "royalblue", color: "white"}}
                            onClick={handleCreateCustomerClick}
                        >
                            Create Customer
                        </Button>
                    )}
                </TableCell>
            </TableRow>
        </>
    );
};

export default TableRowHoverButton;
