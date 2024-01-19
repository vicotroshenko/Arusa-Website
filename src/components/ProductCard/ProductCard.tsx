import { Box, Typography, Stack } from "@mui/material";

interface IProductCardProps {
  scrImage: string;
  title: string;
  price: string;
  color: "dark2" | "light2";
  widthPx: string;
  heightPx: string;
  alt: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  scrImage,
  title,
  price,
  color,
  widthPx = "330px",
  heightPx = "331px",
  alt,
}) => {
  return (
    <Box
      component="div"
      sx={{ 
        maxWidth: widthPx, 
        width: "100%", 
        color: `textP.${color}`, 
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          height: heightPx,
          overflow: "hidden",
          objectPosition: "center",
        }}
      >
        <img src={scrImage} alt={alt} loading="lazy"/>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%", marginTop: "10px" }}
      >
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body1">${price}</Typography>
      </Stack>
    </Box>
  );
};

export default ProductCard;
