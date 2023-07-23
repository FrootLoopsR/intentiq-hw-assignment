import React, {useState} from "react";
import {useSelector} from "react-redux";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeaderRow from "./Shared/TableHeaderRow";
import TableRowHoverButton from "./Shared/TableRowHoverButton";
import {CustomerData, SortConfig} from "../types/globalTypes";
import {customers} from "../Store/store";

interface CustomerConversionDataTableProps {
    toggleDrawer: () => void;
}

const CustomerConversionDataTable: React.FC<
    CustomerConversionDataTableProps
> = ({toggleDrawer}) => {
    const tableData = useSelector(customers);
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        column: "",
        direction: "asc",
    });

    const handleSort = (column: string) => {
        setSortConfig((prevSortConfig) => ({
            column,
            direction:
                prevSortConfig.column === column && prevSortConfig.direction === "asc"
                    ? "desc"
                    : "asc",
        }));
    };

    const sortedData = [...tableData];
    if (sortConfig.column !== "") {
        sortedData.sort((a, b) => {
            const aValue =
                (a[sortConfig.column as keyof CustomerData] as number) ?? 0;
            const bValue =
                (b[sortConfig.column as keyof CustomerData] as number) ?? 0;

            if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
    }


    const columns = [
        {key: "startDate", title: "Start Date"},
        {key: "endDate", title: "End Date"},
        {key: "customer", title: "Customer"},
        {key: "impression", title: "Impression"},
        {key: "conversion", title: "Conversion"},
        {key: "attributeMatches", title: "Attribute Matches"},
        {key: "conversionRate", title: "Conversion Rate"},
        {key: "avgFrequency", title: "Avg. Frequency"},
        {key: "avgTimeToConversion", title: "Avg. Time To Conversion"},
        {key: "", title: ""},
    ];

    return (
        <>
            <Table
                style={{
                    maxWidth: "100%",
                    margin: "0",
                    justifyContent: "start",
                    padding: "0",
                    overflowX: "auto",
                }}
            >
                <TableHead>
                    <TableHeaderRow
                        columns={columns}
                        sortConfig={sortConfig}
                        onSort={handleSort}
                    />
                </TableHead>
                <TableBody>
                    {sortedData.map((row, index) => (
                        <TableRowHoverButton
                            toggleDrawer={toggleDrawer}
                            key={index}
                            row={row}
                            columns={[
                                "startDate",
                                "endDate",
                                "customer",
                                "impression",
                                "conversion",
                                "attributeMatches",
                                "conversionRate",
                                "avgFrequency",
                                "avgTimeToConversion",
                            ]}
                        />
                    ))}
                </TableBody>
            </Table>
        </>
    );
};
export default CustomerConversionDataTable;
