import { observer } from "mobx-react-lite";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStores } from "../../hooks";
import { ProductsTable } from "./ProductsTable";
import { ProductDialog } from "./ProductDialog";
import { ConfirmDialog } from "./ConfirmDialog";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import logoproducts from "../../assets/logoProducts.png";

export const ProductsPage = observer(() => {
  const [product, setProduct] = useState(null);

  const {
    productsStore: {
      isModalOpen,
      isAddLoading,
      isDeleteLoading,
      isDeleteModalOpen,
      toggleModal,
      toggleDeleteModal,
      addProduct,
      editProduct,
      deleteProduct,
      getProducts,
      clear,
    },
  } = useStores();
  const openDialog = () => {
    toggleModal(true);
  };
  const onClose = () => {
    toggleModal(false);
    setProduct(null);
  };
  const onAddProduct = (data) => {
    addProduct(data);
    onClose();
  };
  const onEditProduct = (data) => {
    editProduct({
      ...product,
      ...data,
    });
    setProduct(null);
  };

  const onEdit = (product) => {
    setProduct(product);
    openDialog();
  };
  const onDelete = (product) => {
    toggleDeleteModal(true);
    setProduct(product);
  };
  const onDeleteClose = () => {
    toggleDeleteModal(false);
    setProduct(null);
  };

  const onDeleteSuccess = (id) => {
    setProduct(null);
    deleteProduct(id);
  };

  useEffect(() => {
    getProducts();

    return () => {
      clear();
    };
  }, []);

  return (
    <>
      <Box
        component="img"
        src={logoproducts}
        alt="logo"
        sx={{ height: 40, width: 240 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          component={Link}
          to="/preview"
          variant="text"
          sx={{ color: "primary.main", backgroundColor: "white" }}
        >
          <PermIdentityIcon></PermIdentityIcon>
          Preview
        </Button>
        <Button
          variant="text"
          onClick={openDialog}
          sx={{ color: "primary.main", backgroundColor: "white" }}
        >
          <AddIcon></AddIcon>
          Add
        </Button>
      </Box>
      <Typography variant="h2" align="center">
        Products
      </Typography>
      <ProductsTable onEdit={onEdit} onDelete={onDelete} />

      {/* Dialogs */}
      <ProductDialog
        open={isModalOpen}
        onClose={onClose}
        loading={isAddLoading}
        onSuccess={product ? onEditProduct : onAddProduct}
        product={product}
      />
      <ConfirmDialog
        open={isDeleteModalOpen}
        product={product}
        loading={isDeleteLoading}
        onSuccess={onDeleteSuccess}
        onClose={onDeleteClose}
      />
    </>
  );
});
