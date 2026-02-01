import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { ProductForm } from "./ProductForm";
import { DialogActions } from "@mui/material";

export const ProductDialog = ({
  item,
  onSuccess,
  product,
  loading,
  onClose,
  open,
}) => {
  const onFormSuccess = (data) => {
    onSuccess({
      ...item,
      ...data,
    });
  };
  return (
    <Dialog open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }}>Products</DialogTitle>
      <IconButton
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          py: 2.5,
          px: 4,
          minWidth: 420,
        }}
      >
        <ProductForm
          id="product-form"
          product={product}
          onSuccess={onFormSuccess}
          containerProps={{
            sx: {
              mt: 2,
              minWidth: 400,
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ px: 4 }}>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          form="product-form"
          loading={loading}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
