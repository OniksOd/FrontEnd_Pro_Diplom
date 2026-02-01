import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { DialogActions } from "@mui/material";

export const ConfirmDialog = ({
  open,
  onSuccess,
  product,
  onClose,
  loading,
}) => {
  const onConfirm = () => {
    onSuccess(product.id);
  };
  return (
    <Dialog open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }}>Confirm deletion</DialogTitle>
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogActions sx={{ px: 4 }}>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onConfirm} loading={loading}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
