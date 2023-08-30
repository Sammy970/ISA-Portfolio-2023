import {
  Container,
  Grid,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import classes from "./Profilebar.module.css";
import { Link } from "react-router-dom";

const Profilebar = () => {
  return (
    <div className={classes.profileBar}>
      <Container maxW={"full"} className={classes.container}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <Image
              src="isa_logo.jpeg"
              width={{ base: 90, md: 120 }}
              borderRadius={"50%"}
            />
          </Link>
          <VStack alignItems="end" justifyContent="center">
            <Text
              className={classes.nameText}
              fontFamily={"Work Sans"}
              fontWeight={700}
              // fontSize={{ base: 20 }}
            >
              ISA VIT Pune
            </Text>
            <Grid
              w={"full"}
              templateColumns={"1fr 1fr 1fr"}
              // flexWrap={wrap}
              justifyContent={"space-evenly"}
              m={"auto"}
              display={"flex"}
              // gap={3}
              // spacing={3}
            >
              <Link to={"mailto:vit.isa@vit.edu"}>
                <Image
                  src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-512.png"
                  // className={classes.socialIcon}
                  w={46}
                  h={46}
                />
              </Link>

              <Link
                to={"https://www.linkedin.com/company/isa-vit-chapter"}
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  // className={classes.socialIcon}
                  w={46}
                  h={46}
                />
              </Link>

              <Link
                to={"https://www.instagram.com/isa.vit_pune/"}
                target="_blank"
              >
                <Image
                  src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/instagram-512.png"
                  // className={classes.socialIcon}
                  w={46}
                  h={46}
                />
              </Link>
            </Grid>
          </VStack>
        </Stack>
      </Container>
    </div>
  );
};

export default Profilebar;
