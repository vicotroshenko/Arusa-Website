import { Stack, Typography } from "@mui/material";
import React from "react";

interface ITitleDividerProps {
  color: "light2" | "dark1";
  bgColor: "main" | "secondary";
  text: string;
}

const TitleDivider: React.FC<ITitleDividerProps> = ({ color, bgColor, text }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding="24px 10px 24px 10px"
			width="100%"
			maxWidth="1440px"
			sx={{
				backgroundColor: `backgroundP.${bgColor}`,
				borderTop: "1px solid",
				borderBottom: "1px solid",
				borderColor: "primary.dark"
			}}
    >
      <Typography variant="h4" component="p" color={`textP.${color}`}>
        {text}
      </Typography>
    </Stack>
  );
};

export default TitleDivider;
