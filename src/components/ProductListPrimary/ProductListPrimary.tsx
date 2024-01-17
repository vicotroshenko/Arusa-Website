import { List, ListItem } from "@mui/material";
import Container from "../Container/Container";
import cards1 from "../../data/shop1.json";
import ProductCard from "../ProductCard/ProductCard";

const ProductListPrimary = () => {

  return (
    <Container bgColor="secondary">
      <List
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "24px 16px",
        }}
      >
        {cards1.map(({ image, title, price, desc }) => (
          <ListItem disablePadding sx={{ width: "auto" }}>
            <ProductCard
              scrImage={image}
              title={title}
              price={price}
              color={"dark2"}
              widthPx={"330px"}
              heightPx={"331px"}
              alt={desc}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProductListPrimary;
