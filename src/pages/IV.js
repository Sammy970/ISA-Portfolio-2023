import React from "react";
import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import IVCardPage from "../components/IVCardPage/IVCardPage";

const IV = () => {
  return (
    <Box borderRadius="13px" color="#0f0f0f" mx={["10px", "20px"]} mb={10}>
      <Center>
      <Text mx="auto" mb={10} fontSize="25px" fontFamily="google-sans-black">
        ISA Industrial Visits
      </Text>
      </Center>
      <Center>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={28}
        maxW="80%" // Set maximum width for the entire grid
        marginX="auto" // Center align the grid horizontally
      >
        <Box
          boxShadow="2xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <IVCardPage variant={"1"} desc={"situated in Pune and founded in 2006, is a well-known producer and provider of Control Panel Cabinets. During an industry visit, students learnt about PLC panels, hardware, installation, and safety procedures, gaining important insights into PLC commissioning and technological advancement."} />
        </Box>
        <Box
          boxShadow="1xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screen10
        >
          <Image src="image 1.png" w="100%" />
        </Box>
        <Box
          boxShadow="1xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <Image src="image 2.png" w="100%" />
        </Box>
        <Box
          boxShadow="2xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <IVCardPage variant={"2"} desc={"On September 28, 2019, ISA Pune attended Automation expo 2019, which was hosted at the Bombay Convention and Exhibition Centre in Goregaon, Mumbai. "}/>
        </Box>
        <Box
          boxShadow="2xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <IVCardPage variant={"3"} desc={"VIT ISA Pune organised an industrial visit to ISRO Ahmedabad from April 25, 2022 to May 5, 2022. Senior ISRO scientists are available for interaction with the visitors during this visit."} />
        </Box>
        <Box
          boxShadow="1xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <Image src="image 3.png" w="100%" />
        </Box>
        <Box
          boxShadow="1xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <Image src="image 4.png" w="100%" />
        </Box>
        <Box
          boxShadow="2xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <IVCardPage variant={"4"}  desc={"Endress+Hauser Flowtec (India) Pvt. Ltd. was the subject of an industrial visit scheduled by ISA on the 20th of March 2019. Professor Kapil Mundada of the Instrumentation Engineering Department organised the visit. Instruments for flow measurement are custom-made by Endress+Hauser."}/>
        </Box>
        <Box
          boxShadow="2xl"
          width="100%" // Full width for mobile, otherwise auto
          maxWidth={{ md: "100%" }} // Maximum width for larger screens
        >
          <IVCardPage variant={"5"}  />
        </Box>
        {/* ... Repeat the pattern for other items */}
      </Grid>
      </Center>
    </Box>
  );
};

export default IV;
