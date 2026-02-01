import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { Stack, IconButton } from "@mui/material";

interface Props {
    product: any,
    onDelete: (product: any) => void;
    onEdit: (product: any) => void;
}
export const ProductsListItem = ({ product, onDelete, onEdit }: Props) => {
  const { id } = product;
  const _onDelete = () => {
    onDelete(product);
  };
  const onEditItem = () => {
    onEdit(product);
  };

  return (
    <Stack direction="row">
      <IconButton onClick={onEditItem}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={_onDelete}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};
