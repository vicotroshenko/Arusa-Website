import { Stack, Typography } from "@mui/material";
import React from "react";
import { getBorders } from "../../helpers/getBorders";

interface ILookbookItemProps {
	title: string;
	desc: string;
  mobileNone: "none" | "flex" | "block";
  borders?: string[];
}

const LookbookItem: React.FC<ILookbookItemProps> = ({ title, desc, mobileNone, borders=[] }) => {

  const specifyBorders = getBorders(borders)
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding="6px 17px 10px 21px"
      width="100%"
      sx={{
        display: {
          xs: mobileNone,
          md: "flex",
        },
        ...specifyBorders,
        borderColor: "primary.dark",
      }}
    >
      <Typography variant="body1" textTransform="uppercase">{title}</Typography>
      <Typography variant="body1" textTransform="uppercase">{desc}</Typography>
    </Stack>
  );
};

export default LookbookItem;
