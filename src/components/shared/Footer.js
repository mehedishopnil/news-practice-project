import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <Box className="bg-black py-5">
      <Container>
        <h1>Footer</h1>

        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>

          <IconButton>
            <FacebookIcon />
          </IconButton>

          <IconButton>
            <FacebookIcon />
          </IconButton>

          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Box>

        <Box className = "w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">
                  {item.route}
                </Button>
              </Link>
            ))}
          </Box>

          <Typography varient="body2" textAlign="center"
          color="gray"> @2024 The Dragon News. Design by Programming Hero</Typography>

      </Container>
    </Box>
  );
};

export default Footer;
