import { Box, HStack, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import DataCard from "../components/DataCard/DataCard";
import AboutCard from "../components/AboutCard/AboutCard";
import AboutPageCard from "../components/AboutPageCard/AboutPageCard";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const EducationData = [
  {
    id: "edu1",
    year: "2021 - 2024",
    branchName: "BTech in Instrumentation and Control Engineering",
    collegeName: "Vishwakarma Institute of Technology, Pune",
    image:
      "https://www.collegebatch.com/static/clg-gallery/vishwakarma-institute-of-technology-pune-224988.jpg",
  },
  {
    id: "edu2",
    year: "2018 - 2021",
    branchName: "Diploma in Instrumentation Engineering",
    collegeName: "Vidyaprasarak Mandal Polytechnic College, Thane",
    image:
      "https://content3.jdmagicbox.com/comp/thane/42/022p8400842/catalogue/vidya-prasarak-mandals-polytechnic-thane-west-thane-engineering-institutes-njvsjog41i.jpg",
  },
  {
    id: "edu3",
    year: "2018",
    branchName: "SSC - 10th Standard",
    collegeName: "ST. John the Baptist High School and Junior College, Thane",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOVRAOapr7RIPgupAfnxqfThzZReYKf--IXezSk=s1360-w1360-h1020",
  },
];

const ExperienceData = [
  {
    id: "exp1",
    year: "Aug 2023 - Present",
    post: "Head of Web Developement",
    where: "International Society of Automation (ISA)",
    image:
      "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1436854777/xc3cjzrnfciekp6ewd31.png",
  },
];

const AboutMeData =
  "Hello! I'm Samyak Jain, currently pursuing a B.Tech in Instrumentation and Control Engineering at VIT Pune. My skillset includes JavaScript, React.js, React Native, Node.js, and MongoDB, and I have a strong passion for web development and open-source contributions. As the Web Development Head of ISA VIT Pune, I'm dedicated to enhancing my skills, completing projects, and staying updated with industry trends.";

const About = () => {
  return (
    <>
      <Box borderRadius="13px" color="#0f0f0f" mb={10}>
        <Text ml={3} mb={3} fontSize="25px" fontFamily="google-sans-black">
          About ISA
        </Text>
        <Grid templateColumns={{ base: "auto", md: "1fr 1fr" }} gap={20}>
          <GridItem boxShadow="2xl" maxW={{ base: "70%", md: "full" }}>
            <AboutPageCard variant={"one"} />
          </GridItem>
          <GridItem boxShadow="2xl" maxW={"full"}>
            <AboutPageCard variant={"two"} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default About;
