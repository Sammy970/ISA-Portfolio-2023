import {
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import classes from "./Profilebar.module.css";
import { Link } from "react-router-dom";
import { wrap } from "framer-motion";

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
            <SimpleGrid
              w={"full"}
              columns={{ base: 3, sm: 5, md: 6 }}
              flexWrap={wrap}
              // spacing={3}
              gap={3}
            >
              <Link to={"mailto:jainsamyak2002.sj@gmail.com"}>
                <Image
                  src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-512.png"
                  className={classes.socialIcon}
                />
              </Link>
              <Link to={"https://samyak970.medium.com/"} target="_blank">
                <Image
                  src="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
                  className={classes.socialIcon}
                />
              </Link>
              <Link to={"https://github.com/Sammy970"} target="_blank">
                <Image
                  src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-512.png"
                  className={classes.socialIcon}
                />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/samyak-jain-3a6639172/"}
                target="_blank"
              >
                <Image
                  src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
                  className={classes.socialIcon}
                />
              </Link>
              <Link>
                <Image
                  src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png"
                  className={classes.socialIcon}
                />
              </Link>
              <Link>
                <Image
                  src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-outline-512.png"
                  className={classes.socialIcon}
                />
              </Link>
            </SimpleGrid>
          </VStack>
        </Stack>
      </Container>
    </div>
  );
};

export default Profilebar;
