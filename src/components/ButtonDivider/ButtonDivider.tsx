import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

interface IButtonDividerProps {
  color: "light2" | "dark1";
  bgColor: "main" | "secondary";
  text: string;
	onClick: () => void;
}

const ButtonDivider: React.FC<IButtonDividerProps> = ({
  color,
  bgColor,
  text,
	onClick,
}) => {
  return (
    <Button variant="text" fullWidth onClick={onClick} sx={{padding: 0}}>
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
          borderColor: "primary.dark",
        }}
      >
        <Typography variant="body1" component="p" color={`textP.${color}`}>
          {text}
        </Typography>
      </Stack>
    </Button>
  );
};

export default ButtonDivider;
