import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import IVCardPage from "../components/IVCardPage/IVCardPage";

const IV = () => {
  return(
    <>
  <Box borderRadius="13px" color="#0f0f0f" mb={10} ml={20} pl={20} >
  <Text ml={3} mb={3} fontSize="25px" fontFamily="google-sans-black">
    ISA Insustrial Visits
  </Text>
  <Grid templateColumns={{ base: "auto", md: "4fr 4fr"}} gap={10}>
    <GridItem boxShadow="2xl" maxW={{ base: "50%", md: "auto" }}>
      <IVCardPage variant={"1"} />
    </GridItem>
    <GridItem boxShadow="1xl" maxW={{ base: "50%", md: "auto" }}>
    <Image src="image 1.png" w={{ base: "50%", md: "auto" }} />
    </GridItem>
    <GridItem boxShadow="1xl" maxW={{ base: "50%", md: "auto" }}>
    <Image src="image 2.png" w={{ base: "50%", md: "auto" }} />
    </GridItem>
    <GridItem boxShadow="2xl" maxW={{ base: "50%", md: "auto" }}>
      <IVCardPage variant={"2"} />
    </GridItem>
    <GridItem boxShadow="2xl" maxW={{ base: "50%", md: "auto" }}>
      <IVCardPage variant={"3"} />
    </GridItem>
    <GridItem boxShadow="1xl" maxW={{ base: "50%", md: "auto" }}>
    <Image src="image 3.png" w={{ base: "50%", md: "auto" }} />
    </GridItem>
    <GridItem boxShadow="1xl" maxW={{ base: "50%", md: "auto" }}>
    <Image src="image 4.png" w={{ base: "50%", md: "auto" }} />
    </GridItem>
    <GridItem boxShadow="2xl" maxW={{ base: "50%", md: "auto" }}>
      <IVCardPage variant={"4"} />
    </GridItem>
    <GridItem boxShadow="2xl" maxW={{ base: "50%", md: "auto" }}>
      <IVCardPage variant={"5"} />
    </GridItem>

  </Grid>
</Box>
</>
  )
};

export default IV;
