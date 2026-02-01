import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { Stack } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormValidation } from "./schema";

export const ProductForm = ({ id, product, onSuccess }) => {
  const formContext = useForm({
    resolver: zodResolver(productFormValidation),
    defaultValues: {
      category: "",
      name: "",
      quantity: 1,
      price: 10,
      photo:
        "https://cdn.mos.cms.futurecdn.net/nVp3kJoneSTrYQQjP973TV-650-80.jpg.webp",
      description: "",
    },
  });

  useEffect(() => {
    if (product) {
      formContext.reset(product);
      return;
    }
    formContext.reset({});
  }, [product, formContext]);

  return (
    <FormContainer
      FormProps={{
        id,
      }}
      formContext={formContext}
      onSuccess={onSuccess}
    >
      <Stack direction="column" sx={{ width: "100%" }} gap={2.5}>
        <TextFieldElement label="Category" name="category" />
        <TextFieldElement label="Name" name="name" />
        <TextFieldElement label="Quantity" name="quantity" type="number" />
        <TextFieldElement label="Price" name="price" type="number" />
        <TextFieldElement label="Photo" name="photo" />
        <TextFieldElement
          label="Description"
          name="description"
          multiline
          rows={4}
        />
      </Stack>
    </FormContainer>
  );
};
