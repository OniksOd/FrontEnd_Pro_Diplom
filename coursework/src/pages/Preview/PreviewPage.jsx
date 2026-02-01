import { observer } from "mobx-react-lite";
import { ProductCard } from "./ProductCard";
import { useStores } from "../../hooks/useStores";
import { useEffect } from "react";
import { Stack } from "@mui/material";

export const PreviewPage = observer(() => {
  const {
    productsStore: { getProducts, products },
  } = useStores();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Stack direction="row" gap={3} flexWrap="wrap">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </Stack>
  );
});
