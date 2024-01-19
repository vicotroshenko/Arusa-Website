import { List, ListItem } from "@mui/material";
import Container from "../Container/Container";
import cards2 from "../../data/shop2.json";
import ProductCard from "../ProductCard/ProductCard";
import ButtonDivider from "../ButtonDivider/ButtonDivider";



const ProductListSecondary = () => {

	const handleClick = () => {
		console.log("click on button show all - done");
	}

		return (
			<Container bgColor="main">
				<List
					sx={{
						display: "flex",
						gap: "28px",
						flexWrap: "wrap",
						justifyContent: "center",
						padding: "24px 16px",
						maxWidth: "1440px",
					}}
				>
					{cards2.map(({ image, title, price, desc }, index) => (
						<ListItem key={index} disablePadding sx={{ width: "auto" }}>
							<ProductCard
								scrImage={image}
								title={title}
								price={price}
								color={"light2"}
								widthPx={"330px"}
								heightPx={"331px"}
								alt={desc}
							/>
						</ListItem>
					))}
				</List>
				<ButtonDivider
        color="light2"
        bgColor="main"
        text="SHOP ALL"
        onClick={handleClick}
      />
			</Container>
	)
}

export default ProductListSecondary