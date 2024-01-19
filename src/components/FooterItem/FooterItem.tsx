import { Link, Stack } from "@mui/material";

interface ILinkObject {
  name: string;
  link: string;
}
interface IFooterItemProps {
  links: ILinkObject[];
}

const links1: ILinkObject[] = [
  {
    name: "STORE",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Journal",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

const FooterItem: React.FC<IFooterItemProps> = ({ links = [] }) => {
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
        borderRight: "1px solid",
        borderBottom: "1px solid",
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
