import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import DomainCard, {
  CoreDomainCard,
} from "../components/DomainCard/DomainCard";
import { useNavigate } from "react-router-dom";

const domainData = [
  {
    id: "webdev",
    srcImg: "/DomainCard-Assets/webdev.png",
    title: "Web Development",
    textWidth: "84%",
  },
  {
    id: "mechanical",
    srcImg: "/DomainCard-Assets/mechanical.png",
    title: "Mechanical",
    textWidth: "100%",
  },
  {
    id: "electronics",
    srcImg: "/DomainCard-Assets/electronics.png",
    title: "Electronics",
    textWidth: "100%",
  },
  {
    id: "rnd",
    srcImg: "/DomainCard-Assets/rnd.png",
    title: "Research and Development",
    textWidth: "80%",
  },
  {
    id: "aiml",
    srcImg: "/DomainCard-Assets/aiml.png",
    title: "AI / Machine Learning",
    textWidth: "80%",
  },
  {
    id: "iot",
    srcImg: "/DomainCard-Assets/iot.png",
    title: "Internet of Things",
    textWidth: "80%",
  },
  {
    id: "robotics",
    srcImg: "/DomainCard-Assets/robot.png",
    title: "Robotics",
    textWidth: "100%",
  },
  {
    id: "cybersecurity",
    srcImg: "/DomainCard-Assets/cybersecurity.png",
    title: "Cybersecurity",
    textWidth: "100%",
  },
];

const domainDataManagement = [
  {
    id: "webhandling",
    srcImg: "/DomainCard-Assets/webhand.png",
    title: "Website Handling",
    textWidth: "80%",
  },
  {
    id: "sponsorship",
    srcImg: "/DomainCard-Assets/sponsor.png",
    title: "Sponsorship & Industry Relations",
    textWidth: "{base: '100%',md: '90%'}",
  },
  {
    id: "publicity",
    srcImg: "/DomainCard-Assets/publicity.png",
    title: "Publicity",
    textWidth: "100%",
  },
  {
    id: "branding",
    srcImg: "/DomainCard-Assets/branding.png",
    title: "Branding",
    textWidth: "100%",
  },
  {
    id: "content",
    srcImg: "/DomainCard-Assets/content.png",
    title: "Content",
    textWidth: "100%",
  },
  {
    id: "database",
    srcImg: "/DomainCard-Assets/database.png",
    title: "Database",
    textWidth: "100%",
  },
  {
    id: "finance",
    srcImg: "/DomainCard-Assets/finance.png",
    title: "Finance",
    textWidth: "100%",
  },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        maxW={{ base: "90%", sm: "60%", md: "65%", lg: "65%" }}
        m={"auto"}
        mb={10}
        mt={10}
        onClick={() => navigate("core")}
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
            <GridItem key={domain.id} onClick={() => navigate(domain.id)}>
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
            <GridItem key={domain.id} onClick={() => navigate(domain.id)}>
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
