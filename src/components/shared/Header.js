import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import NewspaperLogo from "@/assets/newspaperLogo.png";
import { getCurrentDateInfo } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDateInfo();
  return (
    <Box className="w-full my-5">
      <Container >
        <Image className="mx-auto" src={NewspaperLogo} width={350} alt="newspaper logo" />

        <Typography varient="body2" textAlign="center" color="gray">
          {" "}
          Journalism Without Fear or Favour
        </Typography>

        <Typography  textAlign="center" color="gray">
          {" "}
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
