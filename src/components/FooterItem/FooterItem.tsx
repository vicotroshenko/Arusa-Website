import { Link, Stack } from "@mui/material";
import { getBorders } from '../../helpers/getBorders';

interface ILinkObject {
  name: string;
  link: string;
}
interface IFooterItemProps {
  links: ILinkObject[];
  borders?: string[],
}

const FooterItem: React.FC<IFooterItemProps> = ({ links = [], borders=[] }) => {
  const specifyBorders = getBorders(borders);
  
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "backgroundP.main",
        width: {
          xs: "50%",
          md: "25%",
        },
        padding: {
          xs: "16px 15px 16px 12px",
          md: "25px 0 25px 56px",
        },
        ...specifyBorders,
        borderColor: "primary.dark",
      }}
    >
      {links.map((item, index) => (
        <Link href={item.link} key={index} underline="hover">
          {item.name}
        </Link>
      ))}
    </Stack>
  );
};

export default FooterItem;
