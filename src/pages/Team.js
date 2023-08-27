import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import DomainCard, {
  CoreDomainCard,
} from "../components/DomainCard/DomainCard";

const domainData = [
  {
    id: "d1",
    srcImg: "/DomainCard-Assets/webdev.png",
    title: "Web Development",
    textWidth: "84%",
  },
  {
    id: "d2",
    srcImg: "/DomainCard-Assets/mechanical.png",
    title: "Mechanical",
    textWidth: "100%",
  },
  {
    id: "d3",
    srcImg: "/DomainCard-Assets/electronics.png",
    title: "Electronics",
    textWidth: "100%",
  },
  {
    id: "d4",
    srcImg: "/DomainCard-Assets/rnd.png",
    title: "Research and Development",
    textWidth: "80%",
  },
  {
    id: "d5",
    srcImg: "/DomainCard-Assets/aiml.png",
    title: "AI / Machine Learning",
    textWidth: "80%",
  },
  {
    id: "d6",
    srcImg: "/DomainCard-Assets/iot.png",
    title: "Internet of Things",
    textWidth: "80%",
  },
  {
    id: "d7",
    srcImg: "/DomainCard-Assets/robot.png",
    title: "Robotics",
    textWidth: "100%",
  },
];

const domainDataManagement = [
  {
    id: "dm1",
    srcImg: "/DomainCard-Assets/webhand.png",
    title: "Website Handling",
    textWidth: "80%",
  },
  {
    id: "dm2",
    srcImg: "/DomainCard-Assets/sponsor.png",
    title: "Sponsorship & Industry Relations",
    textWidth: "{base: '100%',md: '90%'}",
  },
  {
    id: "dm3",
    srcImg: "/DomainCard-Assets/publicity.png",
    title: "Publicity",
    textWidth: "100%",
  },
  {
    id: "dm4",
    srcImg: "/DomainCard-Assets/branding.png",
    title: "Branding",
    textWidth: "100%",
  },
  {
    id: "dm5",
    srcImg: "/DomainCard-Assets/content.png",
    title: "Content",
    textWidth: "100%",
  },
  {
    id: "dm6",
    srcImg: "/DomainCard-Assets/database.png",
    title: "Database",
    textWidth: "100%",
  },
  {
    id: "dm7",
    srcImg: "/DomainCard-Assets/finance.png",
    title: "Finance",
    textWidth: "100%",
  },
];

const Team = () => {
  return (
    <>
      <Box
        maxW={{ base: "90%", sm: "60%", md: "65%", lg: "65%" }}
        m={"auto"}
        mb={10}
        mt={10}
      >
        <CoreDomainCard />
      </Box>

      <VStack w={"full"}>
        <Text
          fontFamily={"'Press Start 2P', cursive"}
          color={"#0f0f0f"}
          w={"90%"}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 8, md: 10 }}
          fontSize={{ base: 18.5, md: 28 }}
        >
          Technical Domain
        </Text>
        <Grid
          templateColumns={{
            base: "90%",
            md: "45% 45%",
            lg: "45% 45%",
            // xl: "28% 28% 28%",
            xl: "40% 40%",
          }}
          gap={{ base: 16, xl: 20 }}
          justifyContent={"center"}
          mb={{ base: 8, md: 10 }}
        >
          {domainData.map((domain) => (
            <GridItem key={domain.id}>
              <DomainCard
                srcImg={domain.srcImg}
                title={domain.title}
                textWidth={domain.textWidth}
              />
            </GridItem>
          ))}
        </Grid>

        <Text
          fontFamily={"'Press Start 2P', cursive"}
          color={"#0f0f0f"}
          w={"90%"}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 8, md: 10 }}
          fontSize={{ base: 18.5, md: 28 }}
        >
          Management Domain
        </Text>

        <Grid
          templateColumns={{
            base: "90%",
            md: "45% 45%",
            lg: "45% 45%",
            // xl: "28% 28% 28%",
            xl: "40% 40%",
          }}
          gap={{ base: 16, xl: 20 }}
          justifyContent={"center"}
          mb={{ base: 8, md: 10 }}
        >
          {domainDataManagement.map((domain) => (
            <GridItem key={domain.id}>
              <DomainCard
                srcImg={domain.srcImg}
                title={domain.title}
                textWidth={domain.textWidth}
              />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </>
  );
};

export default Team;
