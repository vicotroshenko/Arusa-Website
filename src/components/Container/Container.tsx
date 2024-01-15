import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  bgColor: "main" | "secondary";
}

const Container: React.FC<IContainerProps> = ({
  children,
  bgColor = "main",
}) => {
  return (
    <Stack
      component="section"
      direction="column"
      alignItems="center"
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: `backgroundP.${bgColor}`,
      }}
    >
      {children}
    </Stack>
  );
};

export default Container;
