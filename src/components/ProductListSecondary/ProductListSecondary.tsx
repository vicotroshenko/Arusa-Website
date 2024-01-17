import { List, ListItem } from "@mui/material";
import Container from "../Container/Container";
import cards2 from "../../data/shop2.json";
import ProductCard from "../ProductCard/ProductCard";



const ProductListSecondary = () => {

		return (
			<Container bgColor="main">
				<List
					sx={{
						display: "flex",
						gap: "30px",
						flexWrap: "wrap",
						justifyContent: "center",
						padding: "24px 16px",
					}}
				>
					{cards2.map(({ image, title, price, desc }) => (
						<ListItem disablePadding sx={{ width: "auto" }}>
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
			</Container>
	)
}

export default ProductListSecondary