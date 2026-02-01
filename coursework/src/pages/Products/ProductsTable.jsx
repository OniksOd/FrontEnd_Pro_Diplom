import { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react-lite";
import { ProductsListItem } from "./ProductsListItem";
import { useStores } from "../../hooks";

export const ProductsTable = observer(({ onEdit, onDelete }) => {
  const {
    productsStore: { products, isLoading },
  } = useStores();

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 170 },
      { field: "category", headerName: "Category" },
      { field: "name", headerName: "Name" },
      {
        field: "quantity",
        headerName: "quantity",
        type: "number",
        width: 90,
      },
      {
        field: "price",
        headerName: "Price",
        type: "number",
        width: "120",

        valueFormatter: (value) => {
          return new Intl.NumberFormat("ua-UA", {
            style: "currency",
            currency: "UAH",
          }).format(value);
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 280,
        renderCell: ({ row }) => (
          <ProductsListItem
            onEdit={onEdit}
            onDelete={onDelete}
            product={{ ...row }}
          />
        ),
      },
    ],
    [onEdit, onDelete],
  );

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={[...products]}
        columns={columns}
        loading={isLoading}
        sx={{ border: 0 }}
        hideFooter
      />
    </Paper>
  );
});
