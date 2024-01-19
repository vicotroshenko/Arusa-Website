import { List, ListItem } from "@mui/material";
import Container from "../Container/Container";
import cards1 from "../../data/shop1.json";
import ProductCard from "../ProductCard/ProductCard";
import ButtonDivider from "../ButtonDivider/ButtonDivider";

const ProductListPrimary = () => {

  const handleClick = () => {
    console.log("click on button shop all - done");
  }
  return (
    <Container bgColor="secondary">
      <List
        sx={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "24px 16px",
        }}
      >
        {cards1.map(({ image, title, price, desc }, index) => (
          <ListItem key={index} disablePadding sx={{ width: "auto" }}>
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
      <ButtonDivider
        color="dark1"
        bgColor="secondary"
        text="SHOP ALL"
        onClick={handleClick}
      />
    </Container>
  );
};

export default ProductListPrimary;
