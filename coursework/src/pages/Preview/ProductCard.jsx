import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ProductCard = ({ product }) => {
  const { name, description, price, quantity, photo } = product;
  return (
    <Card sx={{ width: 275 }}>
      <CardMedia
        sx={{
          objectFit: "contain",
        }}
        title="laptop"
      >
        <Box
          component="img"
          sx={{
            maxHeight: 210,
            minHeight: 210,
            width: "100%",
            p: 1,
          }}
          alt={name}
          src={photo}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {price}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Quantity: {quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <ShoppingCartIcon />
          Ready to go
        </Button>
      </CardActions>
    </Card>
  );
};
